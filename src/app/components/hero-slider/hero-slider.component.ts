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
      badge: '⚡ Trusted Since 2010',
      title: 'Smart Electrical',
      highlight: 'Solutions',
      subtitle: 'Powering homes, offices & industries with intelligent electrical systems built for the future.',
      cta: 'Explore Services',
      image: 'assets/images/slides/5.png'
    },
    {
      id: 2,
      badge: '🔬 Advanced Engineering',
      title: 'Innovative Electrical',
      highlight: 'Engineering',
      subtitle: 'Cutting-edge design, precision installation and modern automation for every project.',
      cta: 'Get Free Quote',
      image: 'assets/images/slides/4.png'
    },
    {
      id: 3,
      badge: '🛡️ Safe & Certified',
      title: 'Expert Wiring &',
      highlight: 'Installation',
      subtitle: 'High-quality wiring and cabling delivered safely, on time and within your budget.',
      cta: 'View Our Work',
      image: 'assets/images/slides/1.png'
    },
    {
      id: 4,
      badge: '🏗️ End-to-End Projects',
      title: 'Complete Electrical',
      highlight: 'Contracting',
      subtitle: 'From residential wiring to large-scale industrial projects — we handle it all.',
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
      title: 'Home - Professional Electrical Solutions',
      description: 'Welcome to VSSEnterprises - Your trusted partner for professional electrical solutions. Powering your future with excellence and innovation.',
      keywords: 'electrical services, electrical installation, professional electrical solutions, home automation, industrial solutions',
      image: 'https://www.VSSEnterprises.com/assets/images/slides/5.png',
      url: '/#/home'
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

