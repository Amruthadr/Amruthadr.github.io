# Deployment Guide

Your portfolio is ready to deploy! Here are the easiest ways to launch it:

## Option 1: Vercel (Recommended - Easiest & Free)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   cd /Users/ramegowda.amrutha/portfolio-website
   vercel --prod
   ```

   Follow the prompts. Your site will be live in seconds at a URL like: `https://portfolio-website-xxx.vercel.app`

## Option 2: Netlify (Very Easy - Free)

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Login**:
   ```bash
   netlify login
   ```

3. **Deploy**:
   ```bash
   cd /Users/ramegowda.amrutha/portfolio-website
   npm run build
   netlify deploy --prod --dir=dist
   ```

## Option 3: GitHub Pages (Free)

1. **Initialize Git** (if not done):
   ```bash
   cd /Users/ramegowda.amrutha/portfolio-website
   git init
   git add .
   git commit -m "Initial commit - Portfolio website"
   ```

2. **Create a GitHub repository**:
   - Go to https://github.com/new
   - Create a new repository (e.g., `portfolio-website`)
   - Don't initialize with README

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
   git branch -M main
   git push -u origin main
   ```

4. **Update vite.config.ts** for your repo name:
   ```typescript
   base: '/YOUR_REPO_NAME/',
   ```

5. **Deploy**:
   ```bash
   npm run deploy
   ```

6. **Enable GitHub Pages**:
   - Go to repository Settings > Pages
   - Source: `gh-pages` branch
   - Your site will be at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Option 4: Netlify Drop (No CLI needed)

1. Build the project:
   ```bash
   npm run build
   ```

2. Go to https://app.netlify.com/drop
3. Drag and drop the `dist` folder
4. Your site is live instantly!

## Quick Local Preview

To preview your site locally:
```bash
npm run build
npm run preview
```

Then open http://localhost:4173

---

**Recommended**: Use Vercel or Netlify Drop for the fastest deployment!

