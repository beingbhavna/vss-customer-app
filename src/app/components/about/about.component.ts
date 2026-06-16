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
      title: 'About Us — Registered Electrical Contractor',
      description: 'VSS Enterprises is a registered electrical & electronic contracting firm delivering turnkey projects for government, industrial and commercial clients. IS/IEC certified, 445+ projects completed.',
      keywords: 'about VSS Enterprises, registered electrical contractor, turnkey electrical projects, IS IEC certified electricians, government electrical contractor',
      image: 'https://www.VSSEnterprises.com/assets/images/logo.jpg',
      url: '/about'
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
