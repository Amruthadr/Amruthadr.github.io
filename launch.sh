#!/bin/bash

echo "🚀 Launching Portfolio Website..."
echo ""

# Check if repository exists
echo "Checking GitHub repository..."
if git ls-remote --exit-code origin &> /dev/null; then
    echo "✅ Repository found!"
    echo ""
    echo "📤 Pushing code to GitHub..."
    git push -u origin main
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "🚀 Deploying to GitHub Pages..."
        npm run deploy
        
        if [ $? -eq 0 ]; then
            echo ""
            echo "✅ SUCCESS! Your website is launching!"
            echo ""
            echo "🌐 Your portfolio will be live at:"
            echo "   https://amruthadr.github.io"
            echo ""
            echo "⏳ It may take 1-2 minutes to go live."
            echo "   Check status at: https://github.com/Amruthadr/Amruthadr.github.io/settings/pages"
        else
            echo "❌ Deployment failed. Check the error above."
        fi
    else
        echo "❌ Push failed. Check the error above."
    fi
else
    echo "❌ Repository not found!"
    echo ""
    echo "📝 Please create the repository first:"
    echo "   1. Go to: https://github.com/new"
    echo "   2. Repository name: Amruthadr.github.io"
    echo "   3. Make it Public"
    echo "   4. Click 'Create repository'"
    echo ""
    echo "   Then run this script again: ./launch.sh"
    echo ""
    echo "💡 OR use Netlify Drop (no GitHub needed):"
    echo "   1. Go to: https://app.netlify.com/drop"
    echo "   2. Drag the 'dist' folder"
    echo "   3. Your site is live instantly!"
fi

