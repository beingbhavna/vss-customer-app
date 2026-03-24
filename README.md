# PowerElectric - Angular 18 Project

A modern, professional website for PowerElectric - a leading electrical services company. Built with Angular 18, featuring attractive image slides, SEO optimization, and responsive design.

## Features

✨ **Modern Design**
- Attractive image carousel with animated transitions
- Gradient color scheme matching electrical theme
- Fully responsive design for all devices
- Smooth scroll behavior

🎯 **SEO Optimized**
- Meta tags for search engine optimization
- Semantic HTML structure
- Open Graph tags for social sharing
- Proper heading hierarchy
- Schema-friendly data structure

🔧 **Full Functionality**
- Interactive service cards with expandable details
- Testimonial carousel with ratings
- Contact form with validation
- Blog section with article previews
- Navigation with smooth scrolling
- Mobile-friendly hamburger menu

📱 **Responsive & Accessible**
- Mobile-first design approach
- Touch-friendly interface
- ARIA labels for accessibility
- Keyboard navigation support

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/
│   │   ├── hero-slider/
│   │   ├── services/
│   │   ├── about/
│   │   ├── testimonials/
│   │   ├── blog/
│   │   ├── contact/
│   │   └── footer/
│   ├── services/
│   │   └── data.service.ts
│   ├── app.module.ts
│   ├── app.component.ts
│   ├── app.component.html
│   └── app.component.css
├── assets/
│   └── images/
│       └── slides/
├── index.html
├── main.ts
└── styles.css
```

## Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Angular CLI 18

### Steps

1. **Navigate to project directory**
```bash
cd vssEnterprises
```

2. **Install dependencies**
```bash
npm install
```

3. **Add slide images**
Place your images in `src/assets/images/slides/`:
- electrical-hero-1.jpg
- smart-home-2.jpg
- industrial-3.jpg
- solar-4.jpg

4. **Start development server**
```bash
ng serve
```
or
```bash
npm start
```

The application will run at `http://localhost:4200/`

## Building for Production

```bash
ng build --prod
```

Output will be in the `dist/power-electric/` directory.

## Components

### Navigation (navbar)
- Logo and company branding
- Responsive menu with hamburger for mobile
- Smooth navigation to all sections
- Sticky positioning

### Hero Slider
- Auto-rotating image carousel (5-second intervals)
- Manual navigation with arrow buttons
- Dot indicators for current slide
- Overlay text with call-to-action button
- Pause on hover

### Services
- 6 expandable service cards
- Icons and descriptions
- Detailed information on click
- Price ranges
- Hover effects and animations

### About
- Company mission and values
- Features checklist
- Statistics cards (projects, team size, satisfaction rate)
- Grid layout responsive design

### Testimonials
- Client reviews with star ratings
- Author information
- Gradient background
- Smooth hover animations

### Blog
- Blog post previews
- Publication dates
- Read more links
- Icon representations of topics

### Contact
- Contact information cards
- Functional contact form with validation
- Form fields: name, email, phone, service selection, message
- Success/error message display
- Email and phone links

### Footer
- Company information
- Quick navigation links
- Social media links
- Copyright notice

## SEO Configuration

The project includes comprehensive SEO optimization:

1. **Meta Tags** (in index.html and app.component.ts)
   - Title tags for all pages
   - Meta descriptions
   - Keywords
   - Open Graph tags
   - Author information

2. **Structured Data**
   - Semantic HTML elements
   - Proper heading hierarchy (H1, H2, H3)
   - Image alt attributes ready
   - Accessible navigation

3. **Performance**
   - Code splitting with lazy loading ready
   - Optimized bundle sizes
   - Minified CSS and JavaScript
   - Image optimization recommendations

## Image Integration

### Adding Images

1. **Slide Images**: Place in `src/assets/images/slides/`
   - Recommended size: 1920x1080 or higher
   - Format: JPG, PNG, WebP
   - Optimize for web (compress before uploading)

2. **Service Icons**: Currently using FontAwesome icons (no images needed)

3. **Blog Images**: Can be added by updating blog component

### Image Optimization Tips
- Use modern formats (WebP)
- Compress images (use TinyPNG or similar)
- Provide appropriate alt text
- Use lazy loading for images

## Customization

### Colors
Update the gradient colors in component CSS files:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Content
Edit `src/app/services/data.service.ts` to update:
- Services information
- Testimonials
- Blog posts

### Contact Information
Update in `src/app/components/contact/contact.component.html`:
- Phone numbers
- Email addresses
- Address
- Working hours

### Social Media Links
Update in `src/app/components/footer/footer.component.html`

## Form Validation

The contact form includes validation for:
- Name (required, min 2 characters)
- Email (required, valid email format)
- Phone (required, valid phone number)
- Service selection (required)
- Message (required, min 10 characters)

Error messages display inline for better UX.

## Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Metrics

The application is optimized for:
- Page load speed
- Core Web Vitals
- Mobile performance
- SEO ranking

## Deployment

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase init
firebase deploy
```

### Netlify
```bash
npm run build
# Drag and drop dist/power-electric to Netlify
```

### Traditional Hosting
```bash
npm run build
# Upload dist/power-electric contents to your server
```

## Environment Configuration

Create `src/environments/environment.ts` for development:
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000'
};
```

## Google Analytics Setup

Replace `G-XXXXXXXXXX` in `src/index.html` with your Google Analytics ID.

## Troubleshooting

### Images not loading
- Ensure images are in `src/assets/images/slides/`
- Check file names match exactly in hero-slider component
- Verify image paths are correct

### Form not working
- Check browser console for JavaScript errors
- Verify FormModule is imported in app.module.ts
- Test validation rules in contact.component.ts

### Styles not applying
- Clear browser cache (Ctrl+F5)
- Rebuild project (`ng build`)
- Check CSS file imports

## Contributing

For improvements and additions:
1. Create a feature branch
2. Make changes
3. Test thoroughly
4. Submit a pull request

## License

Copyright © 2026 PowerElectric. All rights reserved.

## Support

For support and inquiries:
- Email: info@powerelectric.com
- Phone: +91 98765 43210
- Website: www.powerelectric.com

## Future Enhancements

- [ ] Dynamic blog system with backend integration
- [ ] Online booking system
- [ ] Customer portal
- [ ] Payment integration
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Advanced analytics
- [ ] Email newsletter subscription

---

**Project Created**: March 14, 2026  
**Angular Version**: 18.0.0  
**TypeScript**: 5.5.0+
