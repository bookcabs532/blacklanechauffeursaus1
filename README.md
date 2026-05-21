# Chauffeur Service Sites

Monorepo containing two branded chauffeur service websites.

## Projects

| Project | Directory | Domain | Email |
|---------|-----------|--------|-------|
| Blacklane | `blacklane_chauffeur/` | `www.blacklanechauffeurs.com.au` | `bookscab532@gmail.com` |
| LuxElite | `luxelite_chauffeur/` | `luxelitechauffeur.com.au` | `info@luxelitechauffeur.com.au` |

## EmailJS Configuration

### Blacklane
- **Service ID:** `service_7h348ek`
- **Template ID:** `template_6bmemfb`
- **Public Key:** `mlywsDt9Mjrk166Dy`

### LuxElite
- **Service ID:** `service_c8lubhu`
- **Booking Template:** `template_4lxm1va`
- **Auto-Reply Template:** `template_le1j8xo`
- **Public Key:** `01JbLd_tWSGf61WvK`

## Quick Commands (justfile)

| Command | Description |
|---------|-------------|
| `just build-blacklane` | Build blacklane app |
| `just build-luxelite` | Build luxelite app |
| `just build-all` | Build both apps |
| `just deploy-blacklane` | Upload blacklane to FTP |
| `just deploy-luxelite` | Upload luxelite to FTP |
| `just ship-blacklane` | Build + deploy blacklane |
| `just ship-luxelite` | Build + deploy luxelite |
| `just dev-blacklane` | Dev server for blacklane |
| `just dev-luxelite` | Dev server for luxelite |
| `just install` | Install deps for both apps |

Credentials are stored in `.env` (gitignored).

## Build (Local)

```bash
cd blacklane_chauffeur   # or luxelite_chauffeur
npm install
npm run build
```

Output goes to `dist/`.

## Deploy

Pushing to `main` triggers GitHub Actions (`.github/workflows/deploy.yml`) which builds both projects and deploys to GitHub Pages with the appropriate CNAME.

### FTP Deploy (GoDaddy/cPanel)

Both sites are hosted on the same cPanel account. The folder structure on the server is:

```
public_html/              ← blacklanechauffeurs.com.au serves from here
├── index.html            ← blacklane files
├── assets/               ← blacklane files
├── Background.JPG        ← blacklane files
├── ...                   ← blacklane files
├── cgi-bin/              ← cPanel system folder (DO NOT DELETE)
├── .well-known/          ← cPanel system folder (DO NOT DELETE)
└── luxelitechauffeur.com.au/  ← luxelitechauffeur.com.au serves from here
    ├── index.html        ← luxelite files
    ├── assets/           ← luxelite files
    └── ...
```

**⚠️ Because both sites share the same `public_html/` root, deploy commands differ:**

| Site | Deploy strategy | Reason |
|------|----------------|--------|
| **blacklane** | `mirror -Rv --exclude` (no delete) | Cannot use `--delete` flag — would erase the `luxelitechauffeur.com.au/` folder and cPanel system folders (`cgi-bin/`, `.well-known/`). Only uploads changed files, excludes protected folders. |
| **luxelite** | `mirror -Rev` (with delete) | Safe to clean-sync — it deploys into its own isolated subdirectory `luxelitechauffeur.com.au/`. Stale files are removed automatically. |

#### GoDaddy cPanel Access
1. Sign in to GoDaddy → **My Products**
2. Under **Web Hosting**, click **Manage**
3. Click **cPanel Admin**
4. Manage FTP accounts under **FTP Accounts** section

> **Note:** cPanel is only available with a hosting plan, not with domain-only purchases.

- cPanel hosting plan has domain limit, if it support multiple, open existing cPanel and add domain
