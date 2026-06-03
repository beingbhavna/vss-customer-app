import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService, Testimonial } from '../../services/data.service';
import { FeedbackService, Feedback } from '../../services/feedback.service';
import { AnimationService } from '../../services/animation.service';
import { SeoService } from '../../services/seo.service';

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
  private feedbackSubscription!: Subscription;

  constructor(
    private dataService: DataService,
    private feedbackService: FeedbackService,
    private animationService: AnimationService,
    private seoService: SeoService
  ) { }

  ngOnInit() {
    // Set SEO tags for testimonials page
    this.seoService.updateSeoTags({
      title: 'Testimonials & Reviews',
      description: 'Read what our satisfied clients say about VSSEnterprises services. Discover real testimonials from residential, commercial, and industrial customers.',
      keywords: 'testimonials, reviews, client feedback, customer reviews, electrical services reviews',
      image: 'https://www.VSSEnterprises.com/assets/images/logo.jpg',
      url: '/#/testimonials'
    });

    // Subscribe to real-time feedback updates
    this.feedbackSubscription = this.feedbackService.feedbacks$.subscribe((feedbacks: Feedback[]) => {
      this.updateTestimonials(feedbacks);
    });

    // Also load initial testimonials
    const testimonials = this.dataService.getTestimonials();
    const feedbacks = this.feedbackService.getAllFeedbacks();
    this.allTestimonials = feedbacks.length > 0
      ? [...feedbacks, ...testimonials]
      : [...testimonials];

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

  // Update testimonials when feedback changes (real-time refresh)
  private updateTestimonials(feedbacks: Feedback[]): void {
    const testimonials = this.dataService.getTestimonials();
    this.allTestimonials = feedbacks.length > 0
      ? [...feedbacks, ...testimonials]
      : [...testimonials];
    // Reset to first slide to show new testimonial
    if (feedbacks.length > 0) {
      this.currentSlide = 0;
    }
  }

  ngOnDestroy() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
    if (this.feedbackSubscription) {
      this.feedbackSubscription.unsubscribe();
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
