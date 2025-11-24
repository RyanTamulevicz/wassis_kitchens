# Wassis' Outdoor Kitchens

A website for Wassis' Outdoor Kitchens built with Astro and Tailwind CSS.

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=your_email@example.com
```

- `RESEND_API_KEY`: Your Resend API key for sending emails
- `CONTACT_EMAIL`: The email address where contact form submissions will be sent

### Cloudflare Pages Deployment

When deploying to Cloudflare Pages, make sure to set these environment variables in your Cloudflare Pages project settings:

1. Go to your Cloudflare Pages project dashboard
2. Navigate to **Settings** > **Environment Variables**
3. Add `RESEND_API_KEY` and `CONTACT_EMAIL` for both Production and Preview environments

## Development

```sh
pnpm install
pnpm dev
```

## Build

```sh
pnpm build
```
