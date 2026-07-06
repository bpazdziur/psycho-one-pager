# Psycho One Pager

## About

This repository contains a pure static website for psychotherapy and psychodietetics services.

The website is SEO-first. Core content is available directly in HTML without relying on client-side rendering.

## Project Structure

- `public/index.html` - main page
- `public/privacy.html` - privacy policy page
- `public/images/` - optimized image assets
- `public/robots.txt` and `public/sitemap.xml` - SEO files
- `.github/workflows/deploy.yml` - GitHub Pages deployment

## Local Preview

Run any static file server from the `public` directory:

```bash
cd public
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Deployment

GitHub Actions deploys the `public` directory directly to GitHub Pages.

## License

This project is licensed under the MIT License for software implementation only.

Personal information, contact details, and professional content remain the exclusive property of Marta Paździur.
