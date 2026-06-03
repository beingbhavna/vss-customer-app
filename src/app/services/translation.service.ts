import { Injectable } from '@angular/core';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FeedbackData {
  customerName: string;
  email: string;
  service: string;
  rating: number;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  private readonly hindiDictionary: Record<string, string> = {
    // Services
    'electrical installation': 'विद्युत स्थापना',
    'electrical maintenance': 'विद्युत रखरखाव',
    'repair & troubleshooting': 'मरम्मत और समस्या समाधान',
    'home automation': 'होम ऑटोमेशन',
    'industrial solutions': 'औद्योगिक समाधान',
    'electric & electronic contracting': 'विद्युत और इलेक्ट्रॉनिक ठेकेदारी',
    'power distribution systems': 'विद्युत वितरण प्रणाली',

    // Labels
    'name': 'नाम',
    'email': 'ईमेल',
    'phone': 'फोन',
    'service': 'सेवा',
    'message': 'संदेश',
    'rating': 'रेटिंग',
    'customer name': 'ग्राहक का नाम',
    'customer': 'ग्राहक',
    'feedback': 'फीडबैक',

    // Common phrases
    'thank you': 'धन्यवाद',
    'best regards': 'सादर',
    'new contact request': 'नया संपर्क अनुरोध',
    'new feedback': 'नई प्रतिक्रिया'
  };

  constructor() {}

  /**
   * Translate English text to Hindi
   */
  translateWord(text: string): string {
    if (!text?.trim()) {
      return '';
    }

    return this.hindiDictionary[text.trim().toLowerCase()] || text;
  }

  /**
   * Format contact message for admin
   */
  formatContactMessageForAdmin(formData: ContactFormData): string {
    return `
🔔 नया संपर्क अनुरोध!

नाम: ${formData.name}
ईमेल: ${formData.email}
फोन: ${formData.phone}
सेवा: ${this.translateWord(formData.service)}
संदेश: ${formData.message}

📍 VSSEnterprises
⏰ ${new Date().toLocaleString('hi-IN')}
    `.trim();
  }

  /**
   * Format feedback message for admin
   */
  formatFeedbackMessageForAdmin(feedbackData: FeedbackData): string {
    return `
⭐ नई प्रतिक्रिया!

ग्राहक का नाम: ${feedbackData.customerName}
ईमेल: ${feedbackData.email}
सेवा: ${this.translateWord(feedbackData.service)}
रेटिंग: ${'⭐'.repeat(feedbackData.rating)} (${feedbackData.rating}/5)
संदेश: ${feedbackData.message}

📍 VSSEnterprises
⏰ ${new Date().toLocaleString('hi-IN')}
    `.trim();
  }

  /**
   * WhatsApp Contact Message
   */
  formatWhatsAppMessageForAdmin(formData: ContactFormData): string {
    return `
🔔 *नया संपर्क अनुरोध!*

*नाम:* ${formData.name}
*फोन:* ${formData.phone}
*सेवा:* ${this.translateWord(formData.service)}
*संदेश:* ${formData.message}

📍 VSSEnterprises
    `.trim();
  }

  /**
   * WhatsApp Feedback Message
   */
  formatWhatsAppFeedbackForAdmin(feedbackData: FeedbackData): string {
    return `
⭐ *नई प्रतिक्रिया!*

*ग्राहक:* ${feedbackData.customerName}
*सेवा:* ${this.translateWord(feedbackData.service)}
*रेटिंग:* ${'⭐'.repeat(feedbackData.rating)} (${feedbackData.rating}/5)
*फीडबैक:* ${feedbackData.message}

📍 VSSEnterprises
    `.trim();
  }
}