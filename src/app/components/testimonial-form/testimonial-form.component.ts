import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeedbackService } from '../../services/feedback.service';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-testimonial-form',
  templateUrl: './testimonial-form.component.html',
  styleUrls: ['./testimonial-form.component.css']
})
export class TestimonialFormComponent {
  testimonialForm: FormGroup;
  submitted = false;
  isLoading = false;
  successMessage = '';
  errorMessage = '';
  selectedRating = 0;
  hoverRating = 0;

  services = [
    'Electrical Installation',
    'Electrical Maintenance',
    'Repair & Troubleshooting',
    'Home Automation',
    'Industrial Solutions',
    'Electric & Electronic Contracting'
  ];
  ratings = [
    {
      value: 1,
      emoji: '😡',
      label: 'Worst'
    },
    {
      value: 2,
      emoji: '😞',
      label: 'Poor'
    },
    {
      value: 3,
      emoji: '😐',
      label: 'Average'
    },
    {
      value: 4,
      emoji: '😊',
      label: 'Good'
    },
    {
      value: 5,
      emoji: '🤩',
      label: 'Excellent'
    }
  ];

  getEmoji(rating: number): string {

    switch (rating) {

      case 1:
        return '😡';

      case 2:
        return '😞';

      case 3:
        return '😐';

      case 4:
        return '😊';

      case 5:
        return '🤩';

      default:
        return '';
    }
  }

  getRatingText(rating: number): string {

    switch (rating) {

      case 1:
        return 'Worst';

      case 2:
        return 'Poor';

      case 3:
        return 'Average';

      case 4:
        return 'Good';

      case 5:
        return 'Excellent';

      default:
        return '';
    }
  }

  constructor(
    private fb: FormBuilder,
    private feedbackService: FeedbackService,
    private translationService: TranslationService
  ) {
    this.testimonialForm = this.fb.group({
      customerName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      service: ['', Validators.required],
      rating: [0, [Validators.required, Validators.min(1), Validators.max(5)]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]]
    });
  }

  get f() {
    return this.testimonialForm.controls;
  }

  setRating(rating: number) {
    this.selectedRating = rating;
    this.testimonialForm.patchValue({ rating });
  }

  onSubmit() {
    this.submitted = true;
    this.successMessage = '';
    this.errorMessage = '';

    if (this.testimonialForm.valid) {
      this.isLoading = true;
      const feedbackData = this.testimonialForm.value;

      this.feedbackService.submitTestimonial(feedbackData).subscribe({
        next: (response: any) => {
          this.isLoading = false;
          this.successMessage = response.message || 'Thank you! Your testimonial is now visible to all customers on our Testimonials page.';

          // Send WhatsApp notification to admin in Hindi
          this.sendWhatsAppNotification(feedbackData);

          this.testimonialForm.reset();
          this.submitted = false;
          this.selectedRating = 0;
          this.hoverRating = 0;
          setTimeout(() => { this.successMessage = ''; }, 6000);
        },
        error: () => {
          this.isLoading = false;
          this.errorMessage = 'Something went wrong. Please try again.';
        }
      });
    } else {
      this.errorMessage = 'Please fill out all fields correctly.';
    }
  }

  private sendWhatsAppNotification(feedbackData: any): void {
    // Get Hindi formatted message for admin
    const hindiMessage = this.translationService.formatWhatsAppFeedbackForAdmin(feedbackData);
    const encoded = encodeURIComponent(hindiMessage);

    // Open WhatsApp in a new window (non-blocking)
    window.open(`https://wa.me/919454445071?text=${encoded}`, '_blank', 'noopener,noreferrer');
  }

  closeSuccess() {
    this.successMessage = '';
  }
}
