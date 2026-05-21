# Load .env into environment for all recipes
set dotenv-load
set shell := ["bash", "-c"]

# ── Variables (fallbacks if not in .env) ────────────────

APP_BLACKLANE       := env_var_or_default("APP_BLACKLANE",  "blacklane_chauffeur")
APP_LUXELITE        := env_var_or_default("APP_LUXELITE",   "luxelite_chauffeur")
FTP_HOST            := env_var_or_default("FTP_HOST",       "118.139.178.243")
FTP_USER            := env_var_or_default("FTP_USER",       "j6mw1ht00hj0")
FTP_PASS            := env_var_or_default("FTP_PASS",       "")
FTP_REMOTE_BLACKLANE := env_var_or_default("FTP_REMOTE_PATH_BLACKLANE", "public_html")
FTP_REMOTE_LUXELITE  := env_var_or_default("FTP_REMOTE_PATH_LUXELITE", "public_html/luxelitechauffeur.com.au")

# Default: list available recipes
default:
    @just --list

# ── Build ──────────────────────────────────────────────

# Build both apps
build-all: build-blacklane build-luxelite

# Build blacklanechauffeurs app
build-blacklane:
    cd {{APP_BLACKLANE}} && npm run build

# Build luxelitechauffeur app
build-luxelite:
    cd {{APP_LUXELITE}} && npm run build

# ── Deploy ─────────────────────────────────────────────

# Deploy both apps (upload only, no build)
deploy-all: deploy-blacklane deploy-luxelite

# Deploy blacklanechauffeurs (no --delete to protect luxelite + cPanel folders)
deploy-blacklane:
    @echo "↑ Deploying blacklanechauffeurs.com.au ..."
    lftp -u '{{FTP_USER}},{{FTP_PASS}}' ftp://{{FTP_HOST}} \
        -e 'set ftp:ssl-allow no; set ftp:passive-mode on; set mirror:use-preserve no; set mirror:overwrite yes; mirror -Rv --exclude luxelitechauffeur.com.au/ --exclude cgi-bin/ --exclude .well-known/ {{APP_BLACKLANE}}/dist {{FTP_REMOTE_BLACKLANE}}; quit'

# Deploy luxelitechauffeur (safe to --delete, own isolated folder)
deploy-luxelite:
    @echo "↑ Deploying luxelitechauffeur.com.au ..."
    lftp -u '{{FTP_USER}},{{FTP_PASS}}' ftp://{{FTP_HOST}} \
        -e 'set ftp:ssl-allow no; set ftp:passive-mode on; set mirror:use-preserve no; set mirror:overwrite yes; mirror -Rev {{APP_LUXELITE}}/dist {{FTP_REMOTE_LUXELITE}}; quit'

# ── Ship (build + deploy) ──────────────────────────────

# Build + deploy blacklanechauffeurs
ship-blacklane: build-blacklane deploy-blacklane

# Build + deploy luxelitechauffeur
ship-luxelite: build-luxelite deploy-luxelite

# ── Secrets ────────────────────────────────────────────

# Set FTP_PASS in .env interactively
set-ftp-pass:
    @bash -c 'read -s -p "Enter FTP password: " pass && echo && grep -q "^FTP_PASS=" .env 2>/dev/null && sed -i "" "s/^FTP_PASS=.*/FTP_PASS=$$pass/" .env || echo "FTP_PASS=$$pass" >> .env && echo "✓ FTP_PASS saved to .env"'

# ── Utilities ──────────────────────────────────────────

# Install deps for both apps
install:
    cd {{APP_BLACKLANE}} && npm install
    cd {{APP_LUXELITE}} && npm install

# List remote files for blacklanechauffeurs
ls-blacklane:
    @curl --ftp-pasv --insecure --user '{{FTP_USER}}:{{FTP_PASS}}' "ftp://{{FTP_HOST}}/{{FTP_REMOTE_BLACKLANE}}/"

# List remote files for luxelitechauffeur
ls-luxelite:
    @curl --ftp-pasv --insecure --user '{{FTP_USER}}:{{FTP_PASS}}' "ftp://{{FTP_HOST}}/{{FTP_REMOTE_LUXELITE}}/"

# Dev server for blacklanechauffeurs
dev-blacklane:
    cd {{APP_BLACKLANE}} && npm run dev

# Dev server for luxelitechauffeur
dev-luxelite:
    cd {{APP_LUXELITE}} && npm run dev
