# 🚀 Free Deployment Guide

This guide will help you deploy your portfolio website for free using Netlify.

## Prerequisites
- A GitHub account
- Your project pushed to a GitHub repository

## Branch Configuration
This project is configured to deploy only from the `preyal` branch:
- **Netlify**: Will only deploy from `preyal` branch
- **GitHub Actions**: Will only trigger on `preyal` branch
- **Vercel**: Can be configured to deploy from `preyal` branch

## Option 1: Deploy to Netlify (Recommended)

### Step 1: Push to GitHub
```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit"
git branch -M preyal
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin preyal
```

### Step 2: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click "New site from Git"
3. Choose GitHub and authorize Netlify
4. Select your repository
5. **Important**: Set the branch to deploy to `preyal`
6. Configure the build settings:
   - **Build command**: `yarn generate`
   - **Publish directory**: `dist`
7. Click "Deploy site"

### Step 3: Custom Domain (Optional)
1. In your Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Follow the instructions to configure your domain

## Option 2: Deploy to Vercel

### Step 1: Install Vercel CLI
```bash
npm i -g vercel
```

### Step 2: Deploy
```bash
vercel
```

## Option 3: Deploy to GitHub Pages

### Step 1: Create GitHub Actions workflow
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: yarn install --ignore-engines
      
    - name: Build
      run: yarn generate
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### Step 2: Enable GitHub Pages
1. Go to your repository settings
2. Navigate to "Pages"
3. Select "GitHub Actions" as source
4. **Note**: Only the `preyal` branch will trigger deployments

## Build Commands

### Local Testing
```bash
# Install dependencies
yarn install --ignore-engines

# Build for production
yarn generate

# Test locally
npx serve dist
```

### Quick Deployment
```bash
# Make sure you're on the preyal branch
git checkout preyal

# Run the deployment script
./deploy.sh
```

### Environment Variables
If you have any environment variables, add them in your hosting platform's dashboard.

## Troubleshooting

### Common Issues:
1. **Build fails**: Make sure you're using Node.js 18+ and run `yarn install --ignore-engines`
2. **404 errors**: The `netlify.toml` file handles SPA routing
3. **Images not loading**: Check that all image paths are correct

### Performance Tips:
- The build includes modern and legacy JavaScript bundles
- Consider optimizing images for web
- Enable compression in your hosting platform

## Free Hosting Limits

### Netlify Free Tier:
- 100GB bandwidth/month
- Unlimited builds
- Custom domains with SSL
- Form submissions: 100/month

### Vercel Free Tier:
- 100GB bandwidth/month
- Unlimited builds
- Custom domains with SSL
- Serverless functions: 100GB-hours/month

### GitHub Pages:
- Unlimited bandwidth
- 1GB storage
- Custom domains with SSL
- No build limits

---

🎉 Your portfolio is now live! Share your URL with the world!
