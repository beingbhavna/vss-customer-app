import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface Feedback {
  id: number;
  customerName: string;
  service: string;
  rating: number;
  message: string;
  date: Date;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private feedbacks: Feedback[] = [];
  private feedbackCounter = 0;
  private feedbacksKey = 'powerelectric_feedbacks';
  private feedbacksSubject = new BehaviorSubject<Feedback[]>([]);
  public feedbacks$: Observable<Feedback[]> = this.feedbacksSubject.asObservable();

  private apiUrl = environment.apiUrl;

  constructor(private ngZone: NgZone, private http: HttpClient) {
    this.loadFeedbacks();
    this.feedbacksSubject.next([...this.feedbacks]); // Emit initial state
    this.setupStorageListener();
  }

  // Listen for storage changes from other tabs/windows
  private setupStorageListener(): void {
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('storage', (event: StorageEvent) => {
        if (event.key === this.feedbacksKey) {
          this.ngZone.run(() => {
            this.loadFeedbacks();
            this.feedbacksSubject.next([...this.feedbacks]);
          });
        }
      });
    });
  }

  // Load feedbacks from localStorage
  private loadFeedbacks(): void {
    const stored = localStorage.getItem(this.feedbacksKey);
    if (stored) {
      try {
        this.feedbacks = JSON.parse(stored);
        if (this.feedbacks.length > 0) {
          this.feedbackCounter = Math.max(...this.feedbacks.map(f => f.id)) + 1;
        }
      } catch (e) {
        console.log('Error loading feedbacks');
        this.feedbacks = [];
      }
    }
  }

  // Save feedbacks to localStorage
  private saveFeedbacks(): void {
    localStorage.setItem(this.feedbacksKey, JSON.stringify(this.feedbacks));
  }

  // Add new feedback
  addFeedback(feedback: Omit<Feedback, 'id' | 'date'>): Feedback {
    const newFeedback: Feedback = {
      id: this.feedbackCounter++,
      ...feedback,
      date: new Date()
    };
    this.feedbacks.unshift(newFeedback); // Add to beginning of array
    this.saveFeedbacks();
    this.feedbacksSubject.next([...this.feedbacks]); // Emit update
    return newFeedback;
  }

  // Get all feedbacks
  getAllFeedbacks(): Feedback[] {
    return [...this.feedbacks];
  }

  // Get recent feedbacks for carousel
  getRecentFeedbacks(limit: number = 3): Feedback[] {
    return this.feedbacks.slice(0, limit);
  }

  // Get feedbacks by service
  getFeedbacksByService(service: string): Feedback[] {
    return this.feedbacks.filter(f => f.service === service);
  }

  // Get average rating
  getAverageRating(): number {
    if (this.feedbacks.length === 0) return 0;
    const sum = this.feedbacks.reduce((acc, f) => acc + f.rating, 0);
    return Math.round((sum / this.feedbacks.length) * 10) / 10;
  }

  // Get total feedback count
  getFeedbackCount(): number {
    return this.feedbacks.length;
  }

  // Delete feedback (admin only)
  deleteFeedback(id: number): boolean {
    const index = this.feedbacks.findIndex(f => f.id === id);
    if (index > -1) {
      this.feedbacks.splice(index, 1);
      this.saveFeedbacks();
      this.feedbacksSubject.next([...this.feedbacks]); // Emit update
      return true;
    }
    return false;
  }

  // Submit testimonial to backend API + save locally + emit refresh
  submitTestimonial(feedback: Omit<Feedback, 'id' | 'date'>): Observable<any> {
    return new Observable(observer => {
      this.http.post(`${this.apiUrl}/api/testimonial`, feedback).pipe(
        catchError(err => {
          console.warn('Backend unavailable, saving locally only:', err.message);
          return of({ success: true, local: true });
        })
      ).subscribe(() => {
        // Save locally AND emit BehaviorSubject so TestimonialsComponent refreshes instantly
        this.addFeedback(feedback);
        observer.next({
          success: true,
          message: 'Thank you! Your testimonial is now visible to all customers on our Testimonials page.'
        });
        observer.complete();
      });
    });
  }

  // Fetch all testimonials from backend (shared across all users/browsers)
  getTestimonialsFromApi(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/testimonials`).pipe(
      catchError(err => {
        console.warn('API unavailable, using local data:', err.message);
        return of({ success: true, data: this.getAllFeedbacks() });
      })
    );
  }

  // Get rating distribution
  getRatingDistribution(): { rating: number; count: number }[] {
    const distribution: { [key: number]: number } = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    this.feedbacks.forEach(f => {
      distribution[f.rating]++;
    });
    return Object.entries(distribution).map(([rating, count]) => ({
      rating: parseInt(rating),
      count
    }));
  }
}
