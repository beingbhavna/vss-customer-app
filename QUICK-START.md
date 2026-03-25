# Quick Start Guide - PowerElectric Angular 18

## 🚀 Getting Started in 5 Minutes

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Add Your Images
Place your slide images in:
```
src/assets/images/slides/
- electrical-hero-1.jpg
- smart-home-2.jpg
- industrial-3.jpg  
- solar-4.jpg
```

### Step 3: Update Content
Edit `src/app/services/data.service.ts` to add your:
- Services information
- Testimonials
- Blog posts

### Step 4: Update Contact Info
Edit `src/app/components/contact/contact.component.html` with your:
- Phone numbers
- Email addresses
- Office address
- Business hours

### Step 5: Start Development Server
```bash
npm start
```
Visit `http://localhost:4200/` in your browser.

---

## 📋 Checklist Before Launching

- [ ] All images added to `src/assets/images/slides/`
- [ ] Company information updated
- [ ] Contact form working (test submission)
- [ ] All links updated (social media, contact)
- [ ] Meta tags updated with your company info
- [ ] Google Analytics ID added to `src/index.html`
- [ ] Favicon added to `src/favicon.ico`
- [ ] Mobile responsiveness tested on different devices
- [ ] Contact email configured (optional: add backend)
- [ ] Domain name configured

---

## 🎨 Customization Tips

### Change Color Scheme
Find and replace the gradient colors throughout:
- `#667eea` (Primary purple)
- `#764ba2` (Secondary purple)

Search in all CSS files and change to your brand colors.

### Update Company Name
1. `src/index.html` - Update title
2. `src/app/components/navbar/navbar.component.html` - Logo text
3. `src/app/components/footer/footer.component.html` - Footer branding
4. All component files - Update references

### Add More Sections
Copy an existing component folder and modify:
1. Copy `src/app/components/services/` 
2. Rename to your new component
3. Update template, styles, and component class
4. Add to `src/app/app.module.ts` declarations
5. Add to `src/app/app.component.html`

---

## 📱 Mobile Testing

Test on actual devices or use Chrome DevTools:
1. Right-click → Inspect
2. Click device toggle (mobile icon)
3. Test on different screen sizes

---

## 🔍 SEO Optimization

Before launching, verify:

1. **Title Tags**: Unique for each page
2. **Meta Descriptions**: Under 160 characters
3. **Keywords**: Relevant to your business
4. **URLs**: Clean and descriptive
5. **Headers**: Proper H1/H2/H3 hierarchy
6. **Images**: Have alt text
7. **Mobile**: Fully responsive
8. **Speed**: Tests on PageSpeed Insights

---

## 🌐 Deployment

### Deploy to Firebase Hosting
```bash
npm install -g firebase-tools
firebase init
firebase deploy
```

### Deploy to Netlify
```bash
npm run build
# Drag dist/power-electric folder to Netlify
```

### Deploy to Traditional Hosting
```bash
npm run build
# Upload dist/power-electric contents via FTP/SFTP
```

---

## 🐛 Troubleshooting

**Images not showing?**
- Check file names in hero-slider.component.ts
- Ensure images are in `src/assets/images/slides/`
- Try hard refresh (Ctrl+F5)

**Form not working?**
- Open DevTools Console (F12)
- Check for error messages
- Verify FormModule is imported in app.module.ts

**Styles looking weird?**
- Clear browser cache
- Restart development server
- Check that styles.css is properly imported

---

## 📞 Support & Further Customization

Need more features?
- Add backend API integration
- Add email notifications
- Add booking system
- Add payment processing
- Add multiple languages
- Add offline functionality

---

## ✅ Quality Checklist

Before going live:
- [ ] All content proofread
- [ ] Links tested and working
- [ ] Forms tested and functional
- [ ] Images optimized and loaded
- [ ] Mobile fully responsive
- [ ] SEO tags configured
- [ ] Analytics setup
- [ ] Error pages customized
- [ ] Performance tested
- [ ] Security headers configured

---

**Ready to launch?** Go ahead and deploy your PowerElectric website! 🎉
