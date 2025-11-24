# Wassis' Outdoor Kitchens

A website for Wassis' Outdoor Kitchens built with Astro and Tailwind CSS.

## Environment Variables

### Local Development

For local development, create a `.dev.vars` file in the root directory with the following variables:

```
PUBLIC_TURNSTILE_SITE_KEY=your_turnstile_site_key_here
TURNSTILE_SECRET_KEY=your_turnstile_secret_key_here
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=your_contact_email@example.com
```

**Note:** You can copy `.dev.vars.example` to `.dev.vars` and fill in your actual values.

- `PUBLIC_TURNSTILE_SITE_KEY`: Public key for Cloudflare Turnstile widget (client-side, PUBLIC_ prefix required)
- `TURNSTILE_SECRET_KEY`: Secret key for Cloudflare Turnstile verification (server-side only)
- `RESEND_API_KEY`: Your Resend API key for sending emails
- `CONTACT_EMAIL`: The email address where contact form submissions will be sent

### Cloudflare Pages Deployment

When deploying to Cloudflare Pages, you must set environment variables in your Cloudflare Pages project settings:

1. Go to your Cloudflare Pages project dashboard
2. Navigate to **Settings** > **Environment Variables**
3. Add the following variables for both **Production** and **Preview** environments:

#### Build-time Variables (Required for client-side code)
- `PUBLIC_TURNSTILE_SITE_KEY`: Must be set as an environment variable (not a secret) so it's available during the build process. This is inlined into the client-side bundle.

#### Runtime Variables (Available at runtime)
- `TURNSTILE_SECRET_KEY`: Secret key for Turnstile verification (can be set as a secret)
- `RESEND_API_KEY`: API key for Resend email service (can be set as a secret)
- `CONTACT_EMAIL`: Email address to receive contact form submissions

**Important:** 
- `PUBLIC_TURNSTILE_SITE_KEY` must be set as a regular environment variable (not a secret) because it needs to be available at build time for client-side code
- All other variables can be set as secrets for better security
- Make sure to set these for both Production and Preview environments if you want them to work in both

## Development

```sh
pnpm install
pnpm dev
```

## Build

```sh
pnpm build
```
