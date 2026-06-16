import { Component, OnInit, OnDestroy } from '@angular/core';
import { SeoService } from '../../services/seo.service';

interface Slide {
  id: number;
  badge: string;
  title: string;
  highlight: string;
  subtitle: string;
  cta: string;
  image: string;
}

@Component({
  selector: 'app-hero-slider',
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.css']
})
export class HeroSliderComponent implements OnInit, OnDestroy {
  slides: Slide[] = [
    {
      id: 1,
      badge: '⚡ Registered Electrical Contractor',
      title: 'Turnkey Electrical',
      highlight: 'Contracting',
      subtitle: 'End-to-end electrical project execution for government, industrial & commercial clients — from drawings and installation to testing and handover.',
      cta: 'Explore Services',
      image: 'assets/images/slides/5.png'
    },
    {
      id: 2,
      badge: '🏭 Industrial & Commercial Experts',
      title: 'Industrial Electrical',
      highlight: 'Solutions',
      subtitle: 'Factory wiring, 3-phase systems, motor connections, LT/HT panels and power distribution — engineered for heavy-load industrial environments.',
      cta: 'Get Free Quote',
      image: 'assets/images/slides/4.png'
    },
    {
      id: 3,
      badge: '🛡️ IS / IEC Certified Work',
      title: 'Safe Wiring &',
      highlight: 'Installation',
      subtitle: 'Residential, commercial and office electrical installations by certified electricians — fully compliant with Indian electrical standards.',
      cta: 'View Our Services',
      image: 'assets/images/slides/1.png'
    },
    {
      id: 4,
      badge: '📋 AMC & Long-Term Support',
      title: 'Annual Maintenance',
      highlight: 'Contracts',
      subtitle: 'Protect your electrical infrastructure with our AMC plans — monthly inspections, emergency breakdown support and priority response, all year round.',
      cta: 'Contact Us Today',
      image: 'assets/images/slides/3.png'
    }
  ];

  currentSlide = 0;
  autoSlideInterval: any;

  constructor(private seoService: SeoService) {}

  ngOnInit() {
    // Set SEO tags for home page
    this.seoService.updateSeoTags({
      title: 'Turnkey Electrical Contractors — VSS Enterprises',
      description: 'VSS Enterprises — registered electrical & electronic contractors for government, industrial and commercial projects. Wiring, panels, cable laying, earthing, CCTV, AMC and more.',
      keywords: 'electrical contractor, turnkey electrical project, industrial wiring, LT HT panel installation, cable laying, earthing, CCTV installation, AMC electrical, VSS Enterprises',
      image: 'https://www.VSSEnterprises.com/assets/images/slides/5.png',
      url: '/home'
    });

    // Start auto slide
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 4000); // Change slide every 4 seconds
  }

  ngOnDestroy() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  startAutoSlide() {
    this.nextSlide();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  onMouseEnter() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  onMouseLeave() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }
}

