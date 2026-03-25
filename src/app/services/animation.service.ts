import { Injectable, NgZone } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  private intersectionObserver!: IntersectionObserver;

  constructor(private ngZone: NgZone) {}

  /**
   * Observe elements for scroll-triggered animations
   * Adds 'animate' class when element enters viewport
   */
  observeElements(elements: Element[], options?: IntersectionObserverInit): void {
    const defaultOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options
    };

    this.ngZone.runOutsideAngular(() => {
      this.intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.ngZone.run(() => {
              entry.target.classList.add('animate');
            });
            // Unobserve after animation is triggered (optional)
            this.intersectionObserver.unobserve(entry.target);
          }
        });
      }, defaultOptions);

      elements.forEach((element) => this.intersectionObserver.observe(element));
    });
  }

  /**
   * Observe a single element
   */
  observeElement(element: Element, options?: IntersectionObserverInit): void {
    this.observeElements([element], options);
  }

  /**
   * Stop observing elements
   */
  unobserveElements(elements: Element[]): void {
    elements.forEach((element) => this.intersectionObserver?.unobserve(element));
  }

  /**
   * Destroy observer
   */
  destroy(): void {
    this.intersectionObserver?.disconnect();
  }

  /**
   * Stagger animation helper - applies animation delay to multiple elements
   */
  staggerElements(elements: Element[], delayMs: number = 100): void {
    elements.forEach((element, index) => {
      (element as HTMLElement).style.animationDelay = `${index * delayMs}ms`;
    });
  }

  /**
   * Trigger animation on element programmatically
   */
  triggerAnimation(element: Element): void {
    element.classList.add('animate');
  }

  /**
   * Remove animation from element
   */
  removeAnimation(element: Element): void {
    element.classList.remove('animate');
  }
}
