#!/bin/bash

echo "🚀 Deploying Portfolio to GitHub Pages..."
echo ""

# Check if repository exists
echo "Checking if repository exists..."
if git ls-remote https://github.com/Amruthadr/Amruthadr.github.io.git &> /dev/null; then
    echo "✅ Repository found!"
    echo ""
    
    # Push code
    echo "📤 Pushing code to GitHub..."
    git push -u origin main
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ Code pushed successfully!"
        echo ""
        echo "🚀 Deploying to GitHub Pages..."
        npm run deploy
        
        if [ $? -eq 0 ]; then
            echo ""
            echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
            echo "✅ SUCCESS! Your website is deploying!"
            echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
            echo ""
            echo "🌐 Your portfolio will be live at:"
            echo "   👉 https://amruthadr.github.io"
            echo ""
            echo "⏳ It may take 1-2 minutes to go live."
            echo ""
            echo "📊 Check deployment status:"
            echo "   https://github.com/Amruthadr/Amruthadr.github.io/settings/pages"
            echo ""
            echo "💡 Make sure 'gh-pages' branch is selected as source!"
        else
            echo ""
            echo "❌ Deployment failed. Check the error above."
            echo ""
            echo "💡 Try manually: npm run deploy"
        fi
    else
        echo ""
        echo "❌ Push failed. Check the error above."
        echo ""
        echo "💡 Make sure:"
        echo "   1. Repository exists at: https://github.com/Amruthadr/Amruthadr.github.io"
        echo "   2. Repository is Public"
        echo "   3. You have push access"
    fi
else
    echo "❌ Repository not found!"
    echo ""
    echo "📝 Please create the repository first:"
    echo ""
    echo "   1. Go to: https://github.com/new"
    echo "   2. Repository name: Amruthadr.github.io"
    echo "   3. Make it Public ✅"
    echo "   4. DO NOT check any boxes"
    echo "   5. Click 'Create repository'"
    echo ""
    echo "   Then run this script again: ./deploy-to-github.sh"
    echo ""
    echo "   Or I can open it for you..."
    read -p "   Open GitHub now? (y/n): " answer
    if [ "$answer" = "y" ] || [ "$answer" = "Y" ]; then
        open https://github.com/new
        echo ""
        echo "   After creating the repo, run: ./deploy-to-github.sh"
    fi
fi

