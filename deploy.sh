#!/bin/bash

# Deployment script for preyal branch
echo "🚀 Deploying from preyal branch..."

# Check if we're on the preyal branch
current_branch=$(git branch --show-current)
if [ "$current_branch" != "preyal" ]; then
    echo "❌ Error: You must be on the 'preyal' branch to deploy"
    echo "Current branch: $current_branch"
    echo "Please run: git checkout preyal"
    exit 1
fi

# Build the project
echo "📦 Building project..."
yarn generate

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Commit and push changes
    echo "📤 Pushing to preyal branch..."
    git add .
    git commit -m "Deploy: $(date)"
    git push origin preyal
    
    echo "🎉 Deployment triggered!"
    echo "Your site will be updated in a few minutes."
    echo ""
    echo "📋 Next steps:"
    echo "1. Check your Netlify dashboard for deployment status"
    echo "2. Your site will be available at your Netlify URL"
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi
