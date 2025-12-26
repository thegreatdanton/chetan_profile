# Deployment Guide: Cloudflare Pages

This project is configured to be deployed to **Cloudflare Pages**.

## Prerequisites

1.  **Git Repository**: Ensure your project is pushed to GitHub.
2.  **Cloudflare Account**: [Sign up for Cloudflare](https://dash.cloudflare.com/sign-up).

## Configuration

*   **Build Command**: `npm run build`
*   **Build Output Directory**: `dist`
*   **Node.js Version**: 18+ (Default usually works)

## How to Deploy

1.  **Push your code to GitHub.**
2.  **Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).**
3.  Go to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
4.  Select this repository (`chetan_profile`).
5.  **Configure the build:**
    *   **Framework preset**: Select `Vite`.
    *   **Build command**: `npm run build`
    *   **Build output directory**: `dist`
6.  Click **Save and Deploy**.

## Custom Domain Customization

1.  In Cloudflare Pages dashboard for your project, go to **Custom Domains**.
2.  Click **Set up a custom domain**.
3.  Enter your domain (e.g., `chetanpiduru.dev`) and follow the instructions to update your DNS records.

## SPA Routing

A `public/_redirects` file is included in this project to ensure Client-Side Routing (SPA) works correctly on Cloudflare Pages.
