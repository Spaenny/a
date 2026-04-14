# GitHub Pages setup for this project

After pushing to `main`, enable Pages in your repo settings:

1. Open **Settings → Pages** in `Spaenny/a`.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Run (or re-run) the **Deploy GitHub Pages** workflow.

When deployment completes, your simulator should be available at:

- https://spaenny.github.io/a/

If your GitHub username or repository name differs in casing, GitHub will still map the URL by owner/repo.


> Note: The workflow uses `actions/configure-pages@v5` with `enablement: true` to auto-enable Pages when possible.
