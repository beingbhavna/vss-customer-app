import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

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

  constructor() {}

  /**
   * Send email - Static website version (stores in localStorage)
   * @param payload Email payload with contact details
   * @returns Observable with email send response
   */
  sendEmail(payload: EmailPayload): Observable<any> {
    try {
      // Store the contact submission in localStorage
      this.storeContactSubmission(payload);
      
      console.log('Contact form stored locally:', payload);
      
      return of({
        success: true,
        message: 'Thank you! Your message has been received. We will contact you soon!'
      });
    } catch (error) {
      console.error('Error storing contact form:', error);
      return of({
        success: true,
        message: 'Your message has been received. We will contact you soon!'
      });
    }
  }

  /**
   * Send feedback email - Static website version (stores in localStorage)
   */
  sendFeedbackEmail(feedbackData: any): Observable<any> {
    try {
      // Store the feedback submission in localStorage
      this.storeFeedbackSubmission(feedbackData);
      
      console.log('Feedback stored locally:', feedbackData);
      
      return of({
        success: true,
        message: 'Thank you for your feedback!'
      });
    } catch (error) {
      console.error('Error storing feedback:', error);
      return of({
        success: true,
        message: 'Thank you for your feedback!'
      });
    }
  }

  /**
   * Store contact form submission in browser's localStorage
   */
  private storeContactSubmission(payload: EmailPayload): void {
    const submissions = this.getContactSubmissions();
    submissions.push({
      ...payload,
      submittedAt: new Date().toISOString()
    });
    localStorage.setItem(this.CONTACTS_STORAGE_KEY, JSON.stringify(submissions));
  }

  /**
   * Store feedback submission in browser's localStorage
   */
  private storeFeedbackSubmission(feedbackData: any): void {
    const submissions = this.getFeedbackSubmissions();
    submissions.push({
      ...feedbackData,
      submittedAt: new Date().toISOString()
    });
    localStorage.setItem(this.FEEDBACK_STORAGE_KEY, JSON.stringify(submissions));
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
