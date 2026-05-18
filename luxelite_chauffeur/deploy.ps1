# BLACKLANE Deployment Script (PowerShell)
Write-Host "🚀 Starting BLACKLANE deployment process..." -ForegroundColor Green

# Check if Node.js is installed
try {
    $nodeVersion = node --version 2>$null
    Write-Host "✅ Node.js version: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js is not installed. Please install Node.js from https://nodejs.org" -ForegroundColor Red
    exit 1
}

# Check if npm is available
try {
    $npmVersion = npm --version 2>$null
    Write-Host "✅ npm version: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ npm is not available. Please ensure Node.js is properly installed." -ForegroundColor Red
    exit 1
}

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
npm install

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to install dependencies" -ForegroundColor Red
    exit 1
}

# Build the project
Write-Host "🔨 Building production bundle..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build completed successfully!" -ForegroundColor Green
Write-Host "📁 Production files are in the 'dist/' folder" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps for deployment:" -ForegroundColor Yellow
Write-Host "1. Upload the contents of 'dist/' folder to your web hosting" -ForegroundColor White
Write-Host "2. Configure your domain www.blacklanechauffeurs.com.au to point to the hosting" -ForegroundColor White
Write-Host "3. Test your live website" -ForegroundColor White
Write-Host ""
Write-Host "🎉 BLACKLANE is ready for deployment!" -ForegroundColor Green