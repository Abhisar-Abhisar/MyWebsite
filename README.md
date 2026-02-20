# Personal portfolio

Vite + React + TypeScript + Tailwind (shadcn-ui). Uses Supabase for optional image uploads.

## Run locally

```bash
git clone <your-repo-url>
cd <repo-name>
npm install
cp .env.example .env   # then edit .env with your Supabase URL and anon key
npm run dev
```

Open the URL shown (e.g. http://localhost:8080).

## Deploy to GitHub Pages

1. **Enable Pages**  
   Repo → **Settings** → **Pages** → **Source**: **GitHub Actions**.

2. **(Optional) Supabase**  
   If you use Supabase (e.g. photo uploads), add repo **Secrets** (Settings → Secrets and variables → Actions):
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`

3. **Push to `main`**  
   The workflow builds and deploys. Your site will be at:

   **https://\<username>.github.io/\<repo-name>/**

## Scripts

- `npm run dev` – development server
- `npm run build` – production build
- `npm run preview` – preview production build locally
