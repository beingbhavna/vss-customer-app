import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { DataService, Testimonial } from '../../services/data.service';
import { FeedbackService, Feedback } from '../../services/feedback.service';
import { AnimationService } from '../../services/animation.service';

interface CombinedTestimonial extends Testimonial {
  isFeedback?: boolean;
}

interface CombinedFeedback extends Feedback {
  avatar?: string;
  isFeedback?: boolean;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  @ViewChild('testimonialsSection') testimonialsSection!: ElementRef;
  
  allTestimonials: (Testimonial | Feedback)[] = [];
  currentSlide = 0;
  autoSlideInterval: any;

  constructor(
    private dataService: DataService,
    private feedbackService: FeedbackService,
    private animationService: AnimationService
  ) { }

  ngOnInit() {
    // Combine testimonials and recent feedbacks
    const testimonials = this.dataService.getTestimonials();
    const feedbacks = this.feedbackService.getAllFeedbacks();

    this.allTestimonials = [...testimonials, ...feedbacks];

    // If no testimonials, use feedbacks only
    if (this.allTestimonials.length === 0) {
      this.allTestimonials = testimonials;
    }
    this.autoSlideInterval = setInterval(() => {
      this.startAutoSlide();
    }, 2000); // Change slide every 2 seconds

    // Animate stats on scroll
    setTimeout(() => {
      const statBoxes = document.querySelectorAll('.stat-box');
      this.animationService.observeElements(Array.from(statBoxes));
      this.animationService.staggerElements(Array.from(statBoxes), 150);
    }, 100);
  }

  ngOnDestroy() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
    this.animationService.destroy();
  }

  startAutoSlide() {
    this.nextSlide();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.allTestimonials.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.allTestimonials.length) % this.allTestimonials.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  getStarArray(rating: number): number[] {
    return Array(rating).fill(0).map((x, i) => i);
  }

  isFeedback(item: any): item is Feedback {
    return 'message' in item && 'customerName' in item;
  }

  onMouseEnter() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  onMouseLeave() {
    this.startAutoSlide();
  }
}
