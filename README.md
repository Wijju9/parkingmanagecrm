# ParkingManageCRM (Angular)

This repository has been converted to an Angular application with a **login-first flow**.

## App flow

1. `/login` – user signs in.
2. `/dashboard` – user sees parking/valet management dashboard with sidebar navigation.

## Local development

```bash
npm install
npm start
```

App runs on `http://localhost:4200`.

## Build

```bash
npm run build
```

## CI/CD

- **CI** runs on PRs and pushes to `development` and `main`.
- **CD** deploys production build to GitHub Pages when `main` is updated.

## Publish to GitHub Pages

1. Push to GitHub.
2. In Settings → Pages, select **GitHub Actions** as source.
3. Merge `development` into `main` to trigger deploy workflow.
