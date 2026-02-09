#!/bin/bash

# BLACKLANE Deployment Script
echo "🚀 Starting BLACKLANE deployment process..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js from https://nodejs.org"
    exit 1
fi

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not available. Please ensure Node.js is properly installed."
    exit 1
fi

echo "✅ Node.js and npm are available"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Build the project
echo "🔨 Building production bundle..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "✅ Build completed successfully!"
echo "📁 Production files are in the 'dist/' folder"
echo ""
echo "Next steps for deployment:"
echo "1. Upload the contents of 'dist/' folder to your web hosting"
echo "2. Configure your domain www.blacklanechauffeurs.com.au to point to the hosting"
echo "3. Test your live website"
echo ""
echo "🎉 BLACKLANE is ready for deployment!"