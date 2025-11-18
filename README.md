# Professional Portfolio - Amrutha D Ramegowda

A modern, responsive portfolio website showcasing experience, skills, and projects as a Senior SDET.

## Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI**: Clean, professional design with smooth animations
- **Smooth Scrolling**: Seamless navigation between sections
- **Animated Statistics**: Engaging counter animations in the hero section
- **Timeline Experience**: Visual timeline showcasing work experience
- **Skills Showcase**: Organized display of technical skills and technologies
- **Project Gallery**: Featured projects with links to GitHub repositories
- **Contact Section**: Easy ways to get in touch

## Technologies Used

- React 19
- TypeScript
- Vite
- CSS3 (Custom properties, Flexbox, Grid)
- Modern ES6+ JavaScript

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the portfolio.

### Build for Production

Build the project for production:
```bash
npm run build
```

The built files will be in the `dist` directory, ready to be deployed.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Deployment

### GitHub Pages

1. Build the project: `npm run build`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add to `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```
4. Deploy: `npm run deploy`

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://app.netlify.com/drop)

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in the project directory

## Customization

### Update Personal Information

- **Hero Section**: Edit `src/components/Hero.tsx`
- **About Section**: Edit `src/components/About.tsx`
- **Experience**: Edit `src/components/Experience.tsx`
- **Education**: Edit `src/components/Education.tsx`
- **Skills**: Edit `src/components/Skills.tsx`
- **Projects**: Edit `src/components/Projects.tsx`
- **Contact**: Edit `src/components/Contact.tsx`

### Styling

- Global styles: `src/index.css`
- Component-specific styles: Each component has its own `.css` file
- Color scheme: Modify CSS variables in `src/index.css`

## Project Structure

```
portfolio-website/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.ts
```

## License

This project is open source and available for personal use.
