# ParkWise – Vehicle Parking Booking Management

A modern, responsive parking booking CRM landing/dashboard inspired by the provided Dribbble concept.

## Features

- Sidebar navigation with upgrade prompt.
- Booking search form (location, vehicle type, slot window).
- KPI cards for total slots, occupancy, revenue, and EV chargers.
- Dynamic booking activity and occupancy-by-zone sections.
- Mobile-friendly responsive layout.

## Run locally

Because this is a dependency-free static app, you can run it with any static server:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## CI/CD setup

### CI (`.github/workflows/ci.yml`)

On pushes to `main` and pull requests:
- Verifies that `index.html`, `styles.css`, and `app.js` exist.
- Checks that HTML is wired to stylesheet/script and contains expected dashboard title text.

### CD (`.github/workflows/deploy-pages.yml`)

On pushes to `main` (and manual dispatch):
- Builds a Pages artifact from repository root.
- Deploys the static site to GitHub Pages using official Pages actions.

## Publishing checklist

1. Push this repository to GitHub.
2. In repository settings, ensure **Pages** source is set to **GitHub Actions**.
3. Push to `main`; deployment URL will appear in the "Deploy static site to GitHub Pages" workflow run.
