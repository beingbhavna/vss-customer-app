import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TranslationService } from './translation.service';

export interface EmailPayload {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private readonly CONTACTS_STORAGE_KEY = 'contact_submissions';
  private readonly FEEDBACK_STORAGE_KEY = 'feedback_submissions';

  constructor(private translationService: TranslationService) {}

  /**
   * Send email - Static website version (stores in localStorage)
   * Stores both English and Hindi versions
   * @param payload Email payload with contact details
   * @returns Observable with email send response
   */
  sendEmail(payload: EmailPayload): Observable<any> {
    this.storeContactSubmission(payload);
    
    console.log('Contact form stored locally:', payload);
    
    return of({
      success: true,
      message: 'Thank you! Your message has been received. We will contact you soon!'
    });
  }

  /**
   * Send feedback email - Static website version (stores in localStorage)
   */
  sendFeedbackEmail(feedbackData: any): Observable<any> {
    this.storeFeedbackSubmission(feedbackData);
    
    console.log('Feedback stored locally:', feedbackData);
    
    return of({
      success: true,
      message: 'Thank you for your feedback!'
    });
  }

  /**
   * Store contact form submission in browser's localStorage
   * Includes Hindi translation for admin
   */
  private storeContactSubmission(payload: EmailPayload): void {
    const submissions = this.getContactSubmissions();
    
    // Generate Hindi version for admin (synchronous)
    const hindiMessage = this.translationService.formatContactMessageForAdmin(payload);
    
    submissions.push({
      ...payload,
      submittedAt: new Date().toISOString(),
      hindiMessageForAdmin: hindiMessage
    });
    localStorage.setItem(this.CONTACTS_STORAGE_KEY, JSON.stringify(submissions));
    
    console.log('Contact submission stored with Hindi translation:', hindiMessage);
  }

  /**
   * Store feedback submission in browser's localStorage
   * Includes Hindi translation for admin
   */
  private storeFeedbackSubmission(feedbackData: any): void {
    const submissions = this.getFeedbackSubmissions();
    
    // Generate Hindi version for admin (synchronous)
    const hindiMessage = this.translationService.formatFeedbackMessageForAdmin(feedbackData);
    
    submissions.push({
      ...feedbackData,
      submittedAt: new Date().toISOString(),
      hindiMessageForAdmin: hindiMessage
    });
    localStorage.setItem(this.FEEDBACK_STORAGE_KEY, JSON.stringify(submissions));
    
    console.log('Feedback submission stored with Hindi translation:', hindiMessage);
  }

  /**
   * Get all contact submissions from localStorage
   */
  getContactSubmissions(): any[] {
    try {
      const data = localStorage.getItem(this.CONTACTS_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error retrieving contact submissions:', error);
      return [];
    }
  }

  /**
   * Get all feedback submissions from localStorage
   */
  getFeedbackSubmissions(): any[] {
    try {
      const data = localStorage.getItem(this.FEEDBACK_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error retrieving feedback submissions:', error);
      return [];
    }
  }

  /**
   * Clear all contact submissions
   */
  clearContactSubmissions(): void {
    localStorage.removeItem(this.CONTACTS_STORAGE_KEY);
  }

  /**
   * Clear all feedback submissions
   */
  clearFeedbackSubmissions(): void {
    localStorage.removeItem(this.FEEDBACK_STORAGE_KEY);
  }

  /**
   * Export submissions as JSON (for download/backup)
   */
  exportSubmissions(): string {
    return JSON.stringify({
      contacts: this.getContactSubmissions(),
      feedback: this.getFeedbackSubmissions(),
      exportedAt: new Date().toISOString()
    }, null, 2);
  }
}
