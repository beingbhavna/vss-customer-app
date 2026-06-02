import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { AnimationService } from '../../services/animation.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {
  @ViewChild('aboutSection') aboutSection!: ElementRef;

  constructor(
    private animationService: AnimationService,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    // Set SEO tags for about page
    this.seoService.updateSeoTags({
      title: 'About Us',
      description: 'Learn about VSSEnterprises - your trusted partner for professional electrical solutions. With years of expertise, we provide quality service to residential, commercial, and industrial clients.',
      keywords: 'about us, electrical company, professional services, trusted electrician, electrical expertise',
      image: 'https://www.VSSEnterprises.com/assets/images/logo.jpg',
      url: '/#/about'
    });

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
