import { Injectable } from '@angular/core';

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

  constructor() {
    this.loadFeedbacks();
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
      return true;
    }
    return false;
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
