import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

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

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  /**
   * Send contact form email via backend (Nodemailer)
   */
  sendEmail(payload: EmailPayload): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/contact`, payload).pipe(
      catchError(err => {
        console.error('Contact email error:', err);
        return of({ success: false, message: 'Error sending message. Please try again.' });
      })
    );
  }

  /**
   * Send feedback email via backend (Nodemailer)
   */
  sendFeedbackEmail(feedbackData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/feedback`, feedbackData).pipe(
      catchError(err => {
        console.error('Feedback email error:', err);
        return of({ success: false, message: 'Error sending feedback. Please try again.' });
      })
    );
  }
}
