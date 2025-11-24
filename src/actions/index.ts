import { defineAction } from 'astro:actions';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
  submitContactForm: defineAction({
    accept: 'form',
    handler: async (formData, { request }) => {
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const phone = formData.get('phone') as string | null;
      const message = formData.get('message') as string;
      const turnstileToken = formData.get('cf-turnstile-response') as string;

      // Validate Turnstile token
      if (!turnstileToken) {
        return {
          success: false,
          error: 'Security verification failed. Please try again.',
        };
      }

      // Verify Turnstile token with Cloudflare
      const secretKey = import.meta.env.TURNSTILE_SECRET_KEY;
      if (!secretKey) {
        console.error('TURNSTILE_SECRET_KEY environment variable is not set');
        return {
          success: false,
          error: 'Server configuration error. Please try again later.',
        };
      }

      // Get client IP address for Turnstile verification
      const clientIP = request.headers.get('CF-Connecting-IP') || 
                       request.headers.get('X-Forwarded-For')?.split(',')[0] || 
                       'unknown';

      try {
        const verifyResponse = await fetch(
          'https://challenges.cloudflare.com/turnstile/v0/siteverify',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              secret: secretKey,
              response: turnstileToken,
              remoteip: clientIP,
            }),
          }
        );

        const verifyResult = await verifyResponse.json();

        if (!verifyResult.success) {
          console.error('Turnstile verification failed:', verifyResult);
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

      const recipientEmail = import.meta.env.CONTACT_EMAIL;
      if (!recipientEmail) {
        console.error('CONTACT_EMAIL environment variable is not set');
        return {
          success: false,
          error: 'Server configuration error. Please try again later.',
        };
      }

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

