import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeedbackService } from '../../services/feedback.service';

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

  constructor(
    private fb: FormBuilder,
    private feedbackService: FeedbackService
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
      try {
        this.feedbackService.addFeedback(this.testimonialForm.value);
        this.isLoading = false;
        this.successMessage = 'Thank you! Your testimonial has been submitted and will appear on our Testimonials page.';
        this.testimonialForm.reset();
        this.submitted = false;
        this.selectedRating = 0;
        this.hoverRating = 0;
        setTimeout(() => { this.successMessage = ''; }, 6000);
      } catch (error) {
        this.isLoading = false;
        this.errorMessage = 'Something went wrong. Please try again.';
      }
    } else {
      this.errorMessage = 'Please fill out all fields correctly.';
    }
  }

  closeSuccess() {
    this.successMessage = '';
  }
}
