# PowerElectric - Installation & Run Instructions

## 🚀 Start Here!

Follow these simple steps to get your Angular 18 website running.

---

## ✅ Prerequisites

Make sure you have the following installed:

- **Node.js** (v18 or later) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- A code editor like **VS Code** - [Download](https://code.visualstudio.com/)

### Check Installation

Open Terminal/Command Prompt and run:
```bash
node --version
npm --version
```

You should see version numbers like:
```
v18.x.x
9.x.x
```

---

## 📥 Installation Steps

### Step 1: Navigate to Project
```bash
cd c:\Users\Himashi\Desktop\vssEnterprises
```

### Step 2: Install Dependencies

**Option A - Manual Install**
```bash
npm install
```

**Option B - Using Setup Script (Recommended)**

Windows:
```bash
setup.bat
```

Linux/Mac:
```bash
bash setup.sh
```

The installation may take 2-5 minutes. Wait for it to complete.

### Step 3: Verify Installation

Check if node_modules folder was created:
```bash
# Windows
dir node_modules

# Linux/Mac
ls node_modules
```

---

## 🎨 Add Your Images

**IMPORTANT:** Before running the project, add your slide images.

1. Navigate to: `src/assets/images/slides/`
2. Add these 4 images:
   - `electrical-hero-1.jpg`
   - `smart-home-2.jpg`
   - `industrial-3.jpg`
   - `solar-4.jpg`

**Image Requirements:**
- Minimum size: 1920x1080 pixels
- Format: JPG, PNG, or WebP
- File size: Under 500KB each
- Aspect ratio: 16:9

**Where to get free images:**
- [Unsplash](https://unsplash.com/) - Free high-resolution images
- [Pexels](https://pexels.com/) - Royalty-free photos
- [Pixabay](https://pixabay.com/) - Free images and videos

---

## 🏃 Running the Project

### Start Development Server

```bash
npm start
```

Or if the above doesn't work:

```bash
ng serve
```

### What to Expect

You'll see output like:
```
✔ Compiled successfully.
✔ Compiled successfully.
Local:   http://localhost:4200
```

**Note:** It may take 30-60 seconds to compile initially.

### View in Browser

Open your web browser and go to:
```
http://localhost:4200/
```

You should see your PowerElectric website!

---

## 📝 Customizing Your Site

### 1. Update Company Information

Edit: `src/app/components/contact/contact.component.html`

Replace:
```
+91 98765 43210
info@powerelectric.com
123 Electric Avenue, New Delhi, India
```

With your actual contact details.

### 2. Update Services, Testimonials & Blog

Edit: `src/app/services/data.service.ts`

This file contains arrays for:
- Services (6 items)
- Testimonials (3 items)
- Blog Posts (3 items)

Update the content as needed.

### 3. Change Brand Colors

Search and replace in all CSS files:
- `#667eea` → Your primary color
- `#764ba2` → Your secondary color

**Quick way:**
1. Press `Ctrl+Shift+H` (Find & Replace in VS Code)
2. Find: `#667eea`
3. Replace: `#yourcolor`

### 4. Update Navigation & Footer Links

Edit these files:
- `src/app/components/navbar/navbar.component.html`
- `src/app/components/footer/footer.component.html`

Update social media links and quick links.

---

## 🛑 Stopping the Server

Press `Ctrl+C` in your terminal to stop the development server.

---

## 🐛 Troubleshooting

### Issue: "npm not found"
**Solution:** Reinstall Node.js from [nodejs.org](https://nodejs.org/)

### Issue: Port 4200 already in use
**Solution:** 
```bash
ng serve --port 4300
```

### Issue: Images not showing
**Solution:** 
- Check image file names exactly match the code
- Verify images are in `src/assets/images/slides/`
- Restart the server (Stop with Ctrl+C, then `npm start` again)
- Hard refresh browser (Ctrl+F5)

### Issue: "Cannot find module"
**Solution:**
```bash
rm -rf node_modules
npm install
```

### Issue: Compilation errors
**Solution:**
- Check browser console (F12) for error details
- Make sure you're in the correct project directory
- Verify all semicolons and syntax in edited files

---

## 📦 Building for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized version in the `dist/` folder.

The build process:
1. Minifies CSS and JavaScript
2. Optimizes bundle size
3. Creates production-ready files
4. Takes 2-5 minutes

---

## 🌐 Deployment

After building, you can deploy to:

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase init
firebase deploy
```

### Netlify
```bash
# Build first
npm run build

# Then drag dist/power-electric folder to Netlify
```

### Traditional Web Hosting
```bash
npm run build
# Upload contents of dist/power-electric to your server via FTP
```

---

## 📚 Documentation Files

Read these for more information:

| File | Purpose |
|------|---------|
| README.md | Complete documentation |
| QUICK-START.md | 5-minute quick start |
| PROJECT-SUMMARY.md | Project overview |
| FILES-CREATED.md | List of all files |
| DEPLOYMENT-CHECKLIST.md | Pre-deployment verification |

---

## 🎯 Common Tasks

### To add a new section:
1. Create new component folder in `src/app/components/`
2. Copy an existing component as template
3. Modify template, styles, and logic
4. Add to `src/app/app.module.ts` declarations
5. Add to `src/app/app.component.html`

### To update a color:
Find and replace `#667eea` or `#764ba2` in CSS files

### To change navigation links:
Edit `src/app/components/navbar/navbar.component.html`

### To add more services:
Add to the array in `src/app/services/data.service.ts`

---

## ⌨️ Keyboard Shortcuts (VS Code)

| Action | Shortcut |
|--------|----------|
| Find | Ctrl+F |
| Find & Replace | Ctrl+H |
| Save | Ctrl+S |
| Save All | Ctrl+K, Ctrl+S |
| Go to Line | Ctrl+G |
| Terminal | Ctrl+` |
| Preview | Alt+P |

---

## 📞 Get Help

If you encounter issues:

1. **Check the documentation** - README.md, QUICK-START.md
2. **Check browser console** - F12 → Console tab
3. **Check terminal output** - Error messages are helpful
4. **Search the error message** - Often has solutions online
5. **Restart the server** - `Ctrl+C` then `npm start`

---

## ✨ Next Steps After Setup

1. ✅ Install dependencies
2. ✅ Add your images
3. ✅ Customize company info
4. ✅ Update services content
5. ✅ Test all functionality
6. ✅ Build for production
7. ✅ Deploy to hosting

---

## 🚀 You're Ready!

Your PowerElectric Angular 18 website is ready to go!

### Quick Command Reference

```bash
# Install dependencies
npm install

# Start development (port 4200)
npm start

# Build for production
npm run build

# Run tests
npm test

# Check code quality
ng lint
```

---

**Happy coding! 🎉**

For detailed information, see README.md or QUICK-START.md
