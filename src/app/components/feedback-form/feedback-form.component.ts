import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeedbackService } from '../../services/feedback.service';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {
  feedbackForm: FormGroup;
  submitted = false;
  successMessage = '';
  errorMessage = '';
  selectedRating = 0;
  hoverRating = 0;
  isLoading = false;

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
    private feedbackService: FeedbackService,
    private emailService: EmailService
  ) {
    this.feedbackForm = this.fb.group({
      customerName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      service: ['', Validators.required],
      rating: [0, [Validators.required, Validators.min(1), Validators.max(5)]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]]
    });
  }

  ngOnInit() {}

  setRating(rating: number) {
    this.selectedRating = rating;
    this.feedbackForm.patchValue({ rating });
  }

  onSubmit() {
    this.submitted = true;
    this.successMessage = '';
    this.errorMessage = '';
    this.isLoading = false;

    if (this.feedbackForm.valid) {
      this.isLoading = true;
      
      try {
        const newFeedback = this.feedbackService.addFeedback(this.feedbackForm.value);
        
        // Send feedback email
        this.emailService.sendFeedbackEmail(newFeedback).subscribe(
          (response: any) => {
            this.isLoading = false;
            this.successMessage = '✅ Thank you for your feedback! Your review will help us improve our services.';
            // this.feedbackForm.reset();
            this.selectedRating = 0;
            this.submitted = false;

            // Clear message after 5 seconds
            setTimeout(() => {
              this.successMessage = '';
            }, 5000);
          },
          (error: any) => {
            this.isLoading = false;
            // Still show success even if email fails
            this.successMessage = '✅ Thank you for your feedback! Your review will help us improve our services.';
            // this.feedbackForm.reset();
            this.selectedRating = 0;
            this.submitted = false;

            // Clear message after 5 seconds
            setTimeout(() => {
              this.successMessage = '';
            }, 5000);
          }
        );
        
      } catch (error) {
        this.isLoading = false;
        this.errorMessage = 'Error saving feedback. Please try again.';
      }
    } else {
      this.errorMessage = 'Please fill out all fields correctly.';
    }
  }

  get f() {
    return this.feedbackForm.controls;
  }
}
