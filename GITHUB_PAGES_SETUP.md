# 🚀 Deploy to GitHub Pages as Personal Website

Your portfolio is configured to deploy as your personal GitHub website!

## Step-by-Step Deployment

### 1. Create the Repository on GitHub

1. Go to: https://github.com/new
2. **Repository name MUST be**: `Amruthadr.github.io` (exactly this name for personal website)
3. **Description**: "Professional Portfolio Website"
4. **Visibility**: Public (required for GitHub Pages)
5. **DO NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

### 2. Connect and Push Your Code

Run these commands in your terminal:

```bash
cd /Users/ramegowda.amrutha/portfolio-website

# Add your GitHub repository as remote
git remote add origin https://github.com/Amruthadr/Amruthadr.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Deploy to GitHub Pages

After pushing, run:

```bash
npm run deploy
```

This will:
- Build your site
- Deploy to the `gh-pages` branch
- Make it live at: **https://amruthadr.github.io**

### 4. Enable GitHub Pages (if needed)

1. Go to: https://github.com/Amruthadr/Amruthadr.github.io/settings/pages
2. Under "Source", select: **`gh-pages` branch**
3. Click "Save"

### 5. Your Site is Live! 🎉

Your portfolio will be available at:
**https://amruthadr.github.io**

---

## Quick Commands Summary

```bash
# Navigate to project
cd /Users/ramegowda.amrutha/portfolio-website

# Add remote (if not done)
git remote add origin https://github.com/Amruthadr/Amruthadr.github.io.git

# Push code
git push -u origin main

# Deploy
npm run deploy
```

---

## Future Updates

Whenever you make changes:

```bash
git add .
git commit -m "Update portfolio"
git push
npm run deploy
```

Your site will automatically update!

