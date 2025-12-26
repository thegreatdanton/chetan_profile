# Deployment Guide: GitHub Pages

This project is configured to be easily deployed to GitHub Pages using the `gh-pages` package.

## Prerequisites

1.  **Git Repository**: Ensure your project is initialized as a git repository and pushed to GitHub.
    ```bash
    git remote -v
    # Verified: https://github.com/thegreatdanton/chetan_profile.git
    ```
2.  **Node.js**: Ensure you have Node.js installed.

## Configuration & Common Pitfalls

### 1. `vite.config.js` Base Path
> [!IMPORTANT]
> The `base` property in `vite.config.js` MUST match your GitHub repository name.
>
> *   Current Repo: `chetan_profile`
> *   Recommended Base: `base: '/chetan_profile/'`
>
> If you set this to `/thegreatdanton/` but your repo is `chetan_profile`, your site will not load correctly on GitHub Pages. Changes made to `vite.config.js` must align with `https://username.github.io/<REPO_NAME>/`.

### 2. `package.json`
*   `homepage`: `https://thegreatdanton.github.io/chetan_profile/`
*   `scripts`: Includes `"deploy": "gh-pages -d dist"`

## How to Deploy

To publish your site, simply run the following command in your terminal:

```bash
npm run deploy
```

### What that command does:
1.  **Builds** the app (`npm run build`).
2.  **Pushes** the `dist` folder to the `gh-pages` branch on GitHub.

## Accessing Your Site

After deployment:
1.  Go to **GitHub Settings > Pages**.
2.  Your site will be live at: `https://thegreatdanton.github.io/chetan_profile/`

## Troubleshooting 404 Errors (Critical)

If you still see a 404 error, please check the following:

1.  **Check GitHub Actions Status**:
    *   Go to your repository on GitHub.
    *   Click the **Actions** tab.
    *   Look for a workflow named **"pages-build-deployment"**.
    *   If it has a ❌ Red X, click on it to see why it failed.
    *   If it's running (🟡 Yellow), wait for it to finish.

2.  **Verify Branch Source**:
    *   Go to **Settings > Pages**.
    *   Ensure **Source** is "Deploy from a branch".
    *   Ensure **Branch** is `gh-pages` / `/ (root)`.
    *   **Toggle it**: Sometimes toggling it to 'None', saving, and then back to 'gh-pages' fixes stuck deployments.

3.  **Repository Visibility**:
    *   If your repository is **Private**, you must have a GitHub Pro account to use GitHub Pages, OR ensure the Pages visibility is correctly set.
    *   If you are on a free plan, the repository must be **Public**.

4.  **Force Refresh**:
    *   Sometimes your browser caches the 404. Open an **Incognito/Private** window to test the URL.
