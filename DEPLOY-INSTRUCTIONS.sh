#!/bin/bash

# Po utworzeniu GitHub repo, uruchom te komendy:

cd /Users/maciejkownacki/live-css-editor-react

# Dodaj wszystkie pliki
git add .
git commit -m "Initial commit - Live CSS Editor"

# Zastąp TWOJ_USERNAME swoim username GitHub
git remote add origin https://github.com/TWOJ_USERNAME/live-css-editor.git

# Push do GitHub
git push -u origin main

# Włącz GitHub Pages w ustawieniach repo:
# Settings → Pages → Source: Deploy from branch → Branch: main → /dist-standalone → Save

echo "✅ Uploaded to GitHub!"
echo "🌐 CDN URL będzie dostępny pod:"
echo "https://cdn.jsdelivr.net/gh/TWOJ_USERNAME/live-css-editor@main/dist-standalone/live-css-editor.standalone.js"
echo "https://cdn.jsdelivr.net/gh/TWOJ_USERNAME/live-css-editor@main/dist-standalone/style.css"
