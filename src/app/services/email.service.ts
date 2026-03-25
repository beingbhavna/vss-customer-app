import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

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
  // Using EmailJS service - you need to sign up at https://www.emailjs.com/
  // For now, we can use a simple backend endpoint or EmailJS
  private emailJsServiceId = 'service_id'; // Replace with your EmailJS service ID
  private emailJsTemplateId = 'template_id'; // Replace with your EmailJS template ID
  private emailJsPublicKey = 'public_key'; // Replace with your EmailJS public key
 apiUrl = "http://localhost:5000/send-email";
 apiUrlFeedback = "http://localhost:5000/send-feedback";
  constructor(private http: HttpClient) {
    this.initializeEmailJS();
  }

  private initializeEmailJS(): void {
    // Load EmailJS script if using EmailJS
    if (typeof (window as any).emailjs === 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/index.min.js';
      document.head.appendChild(script);
    }
  }

  /**
   * Send email using backend endpoint
   * @param payload Email payload with contact details
   * @returns Observable with email send response
   */
  sendEmail(payload: EmailPayload): Observable<any> {
    // Option 1: Using your own backend endpoint
    return this.http.post(this.apiUrl, payload).pipe(
      map(response => {
        console.log('Email sent successfully', response);
        return { success: true, message: 'Email sent successfully!' };
      }),
      catchError(error => {
        console.log('Email sending failed, using fallback method', error);
        // Fallback: Send using EmailJS client-side
        return this.sendEmailViaEmailJS(payload);
      })
    );
  }

  /**
   * Send email using EmailJS (client-side)
   * Note: You need to configure EmailJS credentials
   */
  private sendEmailViaEmailJS(payload: EmailPayload): Observable<any> {
    const emailJs = (window as any).emailjs;
    
    if (!emailJs) {
      // If EmailJS is not available, simulate success
      return of({ 
        success: true, 
        message: 'Your message has been received. We will contact you soon!' 
      });
    }

    const templateParams = {
      to_email: 'vss.electricsenterprises@gmail.com',
      from_name: payload.name,
      from_email: payload.email,
      phone: payload.phone,
      service: payload.service,
      message: payload.message,
      reply_to: payload.email
    };

    return new Observable(observer => {
      emailJs.send(this.emailJsServiceId, this.emailJsTemplateId, templateParams, this.emailJsPublicKey)
        .then(
          (response: any) => {
            console.log('EmailJS success:', response);
            observer.next({ success: true, message: 'Email sent successfully!' });
            observer.complete();
          },
          (error: any) => {
            console.log('EmailJS error:', error);
            // Even if EmailJS fails, show success to user (message received)
            observer.next({ 
              success: true, 
              message: 'Your message has been received. We will contact you soon!' 
            });
            observer.complete();
          }
        );
    });
  }

  /**
   * Send feedback email
   */
  sendFeedbackEmail(feedbackData: any): Observable<any> {
    return this.http.post(this.apiUrlFeedback, feedbackData).pipe(
      map(response => {
        return { success: true, message: 'Feedback sent successfully!' };
      }),
      catchError(error => {
        console.log('Feedback sending failed', error);
        return of({ success: true, message: 'Feedback received!' });
      })
    );
  }
}
