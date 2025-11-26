import { defineAction } from 'astro:actions';
import { Resend } from 'resend';

export const server = {
  submitContactForm: defineAction({
    accept: 'form',
    handler: async (formData, context) => {
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const phone = formData.get('phone') as string | null;
      const message = formData.get('message') as string;
      const turnstileToken = formData.get('cf-turnstile-response') as string;

      // Validate required fields
      if (!name || !email || !message) {
        return {
          success: false,
          error: 'Please fill in all required fields.',
        };
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return {
          success: false,
          error: 'Please enter a valid email address.',
        };
      }

      // Access Cloudflare runtime environment variables
      const env = (context.locals as any).runtime?.env || {};
      const resendApiKey = env.RESEND_API_KEY || import.meta.env.RESEND_API_KEY;
      const recipientEmail = env.CONTACT_EMAIL || import.meta.env.CONTACT_EMAIL;
      const turnstileSecretKey = env.TURNSTILE_SECRET_KEY || import.meta.env.TURNSTILE_SECRET_KEY;

      // Validate Turnstile token
      if (!turnstileToken) {
        return {
          success: false,
          error: 'Security verification required. Please try again.',
        };
      }

      if (!turnstileSecretKey) {
        console.error('TURNSTILE_SECRET_KEY environment variable is not set');
        return {
          success: false,
          error: 'Server configuration error. Please try again later.',
        };
      }

      // Verify Turnstile token with Cloudflare
      try {
        const verifyData = new FormData();
        verifyData.append('secret', turnstileSecretKey);
        verifyData.append('response', turnstileToken);

        const verifyResponse = await fetch(
          'https://challenges.cloudflare.com/turnstile/v0/siteverify',
          {
            method: 'POST',
            body: verifyData,
          }
        );

        const verifyResult = await verifyResponse.json() as { success: boolean; 'error-codes'?: string[] };

        if (!verifyResult.success) {
          console.error('Turnstile verification failed:', verifyResult['error-codes']);
          return {
            success: false,
            error: 'Security verification failed. Please try again.',
          };
        }
      } catch (error) {
        console.error('Error verifying Turnstile token:', error);
        return {
          success: false,
          error: 'Security verification error. Please try again later.',
        };
      }

      if (!resendApiKey) {
        console.error('RESEND_API_KEY environment variable is not set');
        return {
          success: false,
          error: 'Server configuration error. Please try again later.',
        };
      }

      if (!recipientEmail) {
        console.error('CONTACT_EMAIL environment variable is not set');
        return {
          success: false,
          error: 'Server configuration error. Please try again later.',
        };
      }

      // Initialize Resend with runtime API key
      const resend = new Resend(resendApiKey);

      try {
        const response = await resend.emails.send({
          from: 'Contact Form <wassisoutdoorkitchens@resend.dev>',
          to: [recipientEmail],
          replyTo: email,
          subject: `New Contact Form Submission from ${name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          `,
        });

        // Check if email was sent successfully
        // Resend returns { data: { id: '...' }, error: null } on success
        // or { data: null, error: {...} } on failure
        if (response.error || !response.data) {
          console.error('Resend API error:', response.error);
          return {
            success: false,
            error: 'Failed to send email. Please try again later.',
          };
        }

        // Success - email was sent
        return {
          success: true,
          message: 'Thank you! We\'ve received your message and will contact you shortly.',
        };
      } catch (err) {
        console.error('Error sending email:', err);
        return {
          success: false,
          error: 'An unexpected error occurred. Please try again later.',
        };
      }
    },
  }),
};

