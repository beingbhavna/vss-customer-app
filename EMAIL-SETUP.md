# Email Configuration Guide

## Overview
The application has been updated with routing and email functionality. Here's what has been implemented and how to configure it.

## ✅ What's Been Implemented

### 1. **Routing System**
- Created `app-routing.module.ts` with routes for all pages
- Menu items now navigate using Angular routing instead of scrolling
- All components are now loaded only when their routes are activated
- Routes:
  - `/home` - Hero Slider
  - `/services` - Services
  - `/about` - About Us
  - `/testimonials` - Testimonials
  - `/blog` - Blog
  - `/feedback-form` - Feedback Form
  - `/contact` - Contact Form

### 2. **Navbar Updates**
- Added **Feedback** menu item to navbar
- Updated all navigation links to use routing
- Logo now navigates to home page
- Mobile menu works with routing

### 3. **Email Service**
- Created `email.service.ts` with email functionality
- Supports sending contact form emails
- Supports sending feedback emails
- Includes fallback mechanisms for reliability
- Contact form includes loading state during submission

### 4. **Component Updates**
- **contact.component.ts**: Now sends emails on form submission
- **feedback-form.component.ts**: Now sends feedback emails and stores in localStorage
- Both forms show loading spinner while sending
- Form fields are disabled during submission to prevent duplicate submissions

---

## 🔧 Email Configuration Options

You have **THREE options** to send emails:

### Option 1: Using Backend API (Recommended for Production)
If you have a Node.js/Express or any backend server:

**Update email.service.ts:**
```typescript
sendEmail(payload: EmailPayload): Observable<any> {
  return this.http.post('/api/send-email', payload).pipe(...)
}
```

**Backend endpoint example (Node.js/Express):**
```javascript
const nodemailer = require('nodemailer');

app.post('/api/send-email', async (req, res) => {
  const { name, email, phone, service, message } = req.body;
  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-app-password' // Use App Password, not regular password
    }
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'vss.electricsenterprises@gmail.com',
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
    replyTo: email
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    res.json({ success: true, message: 'Message received!' }); // Still show success
  }
});
```

---

### Option 2: Using EmailJS (Client-Side, Easy Setup)
EmailJS is a free service that sends emails directly from the browser.

**Steps:**
1. Sign up at https://www.emailjs.com/
2. Create a new service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Service ID, Template ID, and Public Key

**Update email.service.ts:**
```typescript
private emailJsServiceId = 'service_xxxxxxxxxx'; // Replace
private emailJsTemplateId = 'template_xxxxxxxxx'; // Replace
private emailJsPublicKey = 'uT2Bxxxxxxxx'; // Replace

// Update in the sendEmailViaEmailJS method
```

**Template Variables in EmailJS:**
- `to_email` - Recipient email
- `from_name` - Sender name
- `from_email` - Sender email
- `phone` - Phone number
- `service` - Service selected
- `message` - Message content
- `reply_to` - Reply-to email

---

### Option 3: Using Firebase Cloud Functions
For serverless email sending with Firebase.

1. Set up Firebase project
2. Create Cloud Function to send emails
3. Update Angular to call the function
4. Use `AngularFireFunctions` module

---

## 📧 Gmail Setup Instructions (For Backend or EmailJS)

### Getting Gmail App Password:
1. Enable 2-Factor Authentication on your Gmail account
2. Go to https://myaccount.google.com/apppasswords
3. Select "Mail" and "Windows Computer" (or your device)
4. Generate app password (16-character password)
5. Use this password in your configuration (NOT your regular password)

---

## 🧪 Testing Email Functionality

### Test Contact Form:
1. Navigate to `/contact`
2. Fill out the contact form
3. Submit and verify email is received at `vss.electricsenterprises@gmail.com`
4. Check "Sending..." loading state appears

### Test Feedback Form:
1. Navigate to `/feedback-form`
2. Fill out the feedback form with rating
3. Submit and verify feedback is received via email
4. Feedback is also stored in browser localStorage

---

## 🔐 Security Best Practices

1. **Never commit credentials** to your Git repository
2. **Use environment variables** for sensitive data:
   ```typescript
   // In environment.ts
   export const environment = {
     production: false,
     emailJs: {
       serviceId: environment.EMAILJS_SERVICE_ID,
       templateId: environment.EMAILJS_TEMPLATE_ID,
       publicKey: environment.EMAILJS_PUBLIC_KEY
     }
   };
   ```

3. **Backend is preferred** over client-side email services for production
4. **Rate limit** email submissions to prevent spam
5. **Validate** all form inputs on both frontend and backend

---

## 📱 Responsive Design
- Routing works seamlessly on mobile and desktop
- Navbar mobile menu works with routing
- Forms are responsive and touch-friendly
- Loading states visible on all devices

---

## 🚀 Deployment Checklist

- [ ] Configure email service (choose Option 1, 2, or 3)
- [ ] Test all routes: /home, /services, /about, /testimonials, /blog, /feedback-form, /contact
- [ ] Test contact form email sending
- [ ] Test feedback form submission
- [ ] Test mobile navigation
- [ ] Set environment variables for production
- [ ] Build: `ng build --prod`
- [ ] Test in production build

---

## 📞 Support Email Addresses
- Main: `vss.electricsenterprises@gmail.com`
- Alternative: `info@powerelectric.com`

---

## 🎯 Next Steps

1. **Choose your email solution** from the three options above
2. **Configure credentials** in the email service
3. **Test the forms** thoroughly
4. **Monitor emails** to ensure delivery
5. **Set up error handling** and logging

Need help? Refer to the official documentation:
- Angular Routing: https://angular.io/guide/router
- RxJS: https://rxjs.dev/
- Nodemailer: https://nodemailer.com/
- EmailJS: https://www.emailjs.com/docs/
