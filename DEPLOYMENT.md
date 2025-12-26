# Deployment Guide: GitHub Pages

This project is configured to be easily deployed to GitHub Pages using the `gh-pages` package.

## Prerequisites

1.  **Git Repository**: Ensure your project is initialized as a git repository and pushed to GitHub.
2.  **Node.js**: Ensure you have Node.js installed.

## Configuration & Common Pitfalls

### 1. `vite.config.js` Base Path
> [!IMPORTANT]
> The `base` property in `vite.config.js` MUST match your GitHub repository name OR be `/` if using a custom domain.
>
> *   Current Repo: `chetan_profile`
> *   **With Custom Domain:** `base: '/'`
> *   **Without Custom Domain:** `base: '/chetan_profile/'`

### 2. `package.json`
*   `homepage`: `https://chetanpiduru.dev/` (or `https://<user>.github.io/<repo>/`)
*   `scripts`: Includes `"deploy": "gh-pages -d dist"`

## How to Deploy

To publish your site, simply run:

```bash
npm run deploy
```

### What that command does:
1.  **Builds** the app (`npm run build`).
2.  **Pushes** the `dist` folder to the `gh-pages` branch on GitHub.

## Accessing Your Site

After deployment:
1.  Go to **GitHub Settings > Pages**.
2.  Ensure **Source** is set to "Deploy from a branch" and select `gh-pages`.
3.  Your site will be live at: `https://chetanpiduru.dev/` (or your GitHub Pages URL).

## Troubleshooting 404 Errors

If you see a 404 error:
1.  **Wait**: It can take a few minutes for changes to propagate.
2.  **Check Branch**: Ensure GitHub Pages is serving from `gh-pages`.
3.  **Hard Refresh**: Clear cache or use Incognito mode.
