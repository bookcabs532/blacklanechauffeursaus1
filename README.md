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

## Build (Local)

```bash
cd blacklane_chauffeur   # or luxelite_chauffeur
pnpm install
pnpm build
```

Output goes to `dist/`.

## Deploy

Pushing to `main` triggers GitHub Actions (`.github/workflows/deploy.yml`) which builds both projects and deploys to GitHub Pages with the appropriate CNAME.

### Manual (GoDaddy/cPanel)

1. Build the project locally
2. Copy the contents of `dist/` to the GoDaddy hosting path via cPanel File Manager or FTP

#### GoDaddy cPanel Access
1. Sign in to GoDaddy → **My Products**
2. Under **Web Hosting**, click **Manage**
3. Click **cPanel Admin**
4. Manage FTP accounts under **FTP Accounts** section

> **Note:** cPanel is only available with a hosting plan, not with domain-only purchases.

- cPanel hosting plan has domain limit, if it support multiple, open existing cPanel and add domain
