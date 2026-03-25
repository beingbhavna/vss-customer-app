import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {
  @ViewChild('aboutSection') aboutSection!: ElementRef;

  constructor(private animationService: AnimationService) {}

  ngOnInit(): void {
    // Delay to ensure DOM is rendered
    setTimeout(() => {
      const section = this.aboutSection?.nativeElement;
      if (section) {
        const animatableElements = section.querySelectorAll('[data-animate]');
        this.animationService.observeElements(Array.from(animatableElements));
        this.animationService.staggerElements(Array.from(animatableElements), 100);
      }
    }, 100);
  }

  ngOnDestroy(): void {
    this.animationService.destroy();
  }
}
