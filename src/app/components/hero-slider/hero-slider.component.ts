import { Component, OnInit, OnDestroy } from '@angular/core';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  cta: string;
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
      title: 'Professional Electrical Solutions',
      subtitle: 'Powering Your Future with Excellence & Innovation',
      image: 'assets/images/slides/5.png',
      cta: 'Get Started Today'
    },
    {
      id: 2,
      title: 'Smart Home Automation',
      subtitle: 'Transform Your Home with Intelligent Electrical Systems',
      image: 'assets/images/slides/2.png',
      cta: 'Explore Features'
    },
    {
      id: 3,
      title: 'Industrial Excellence',
      subtitle: 'Reliable Solutions for Your Industrial Needs',
      image: 'assets/images/slides/3.png',
      cta: 'Learn More'
    },
    {
      id: 4,
      title: 'Solar Energy Solutions',
      subtitle: 'Sustainable Power for a Better Tomorrow',
      image: 'assets/images/slides/4.png',
      cta: 'Go Green Today'
    }
  ];

  currentSlide = 0;
  autoSlideInterval: any;

  ngOnInit() {
    this.autoSlideInterval = setInterval(() => {
      this.startAutoSlide();
    }, 2000); // Change slide every 2 seconds

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
    this.startAutoSlide();
  }
}
