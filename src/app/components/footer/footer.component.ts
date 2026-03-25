import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {
  @ViewChild('footer') footer!: ElementRef;
  
  currentYear = new Date().getFullYear();

  constructor(private animationService: AnimationService) {}

  ngOnInit(): void {
    // Delay to ensure DOM is rendered
    setTimeout(() => {
      const footerSections = document.querySelectorAll('.footer-section');
      this.animationService.observeElements(Array.from(footerSections));
      this.animationService.staggerElements(Array.from(footerSections), 100);
      
      const socialLinks = document.querySelectorAll('.social-links a');
      this.animationService.observeElements(Array.from(socialLinks));
      this.animationService.staggerElements(Array.from(socialLinks), 80);
    }, 100);
  }

  ngOnDestroy(): void {
    this.animationService.destroy();
  }
}
