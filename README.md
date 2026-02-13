# ValetFlow CRM Dashboard

Behance-inspired parking/valet management web UI with operational navigation and dashboard sections.

## What's included

- Modern admin layout with left rail navigation and top-level dashboard actions.
- Dashboard KPIs, booking request table, and zone utilization progress visualization.
- Multi-section navigation (`Dashboard`, `Bookings`, `Valet Team`, `Reports`, `Settings`) with active-state switching.
- Responsive static architecture (no build step required).

## Run locally

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## CI/CD

### CI: `.github/workflows/ci.yml`

Runs on pull requests and pushes to `main` and validates:
- required static files exist
- HTML references stylesheet + script
- dashboard title text exists

### CD: `.github/workflows/deploy-pages.yml`

Runs on `main` push (or manual dispatch) and deploys repository root to GitHub Pages.

## Publish steps

1. Push repository to GitHub.
2. In **Settings → Pages**, choose **GitHub Actions**.
3. Push to `main` and wait for Pages deployment workflow to complete.


## Branching flow

- Use `development` as the integration branch for feature PRs.
- Merge `development` into `main` for production GitHub Pages releases.
