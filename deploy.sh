#!/bin/bash

echo "🚀 Deploying Portfolio Website..."
echo ""

# Build the project
echo "📦 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build successful!"
echo ""
echo "Choose deployment method:"
echo "1. Vercel (Recommended)"
echo "2. Netlify"
echo "3. GitHub Pages"
echo "4. Preview locally"
echo ""
read -p "Enter choice (1-4): " choice

case $choice in
    1)
        echo "🚀 Deploying to Vercel..."
        if command -v vercel &> /dev/null; then
            vercel --prod
        else
            echo "❌ Vercel CLI not found. Install with: npm install -g vercel"
            echo "   Then run: vercel login && vercel --prod"
        fi
        ;;
    2)
        echo "🚀 Deploying to Netlify..."
        if command -v netlify &> /dev/null; then
            netlify deploy --prod --dir=dist
        else
            echo "❌ Netlify CLI not found. Install with: npm install -g netlify-cli"
            echo "   Or use Netlify Drop: https://app.netlify.com/drop"
            echo "   Just drag and drop the 'dist' folder!"
        fi
        ;;
    3)
        echo "🚀 Deploying to GitHub Pages..."
        npm run deploy
        echo "✅ Deployed! Enable GitHub Pages in repository settings."
        ;;
    4)
        echo "🌐 Starting local preview server..."
        npm run preview
        ;;
    *)
        echo "❌ Invalid choice"
        exit 1
        ;;
esac

