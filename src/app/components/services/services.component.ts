import { Component, OnInit, OnDestroy, ViewChild, ElementRef, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, Service } from '../../services/data.service';
import { AnimationService } from '../../services/animation.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit, OnDestroy {
  @ViewChild('servicesSection') servicesSection!: ElementRef;
  @Input() limit: number | null = null;
  @Input() showSeeMore = false;

  services: Service[] = [];
  displayedServices: Service[] = [];
  expandedService: number | null = null;
  selectedService: any = null;
  isClosingModal = false;

  constructor(
    private dataService: DataService,
    private animationService: AnimationService,
    private seoService: SeoService,
    private router: Router
  ) {}

  ngOnInit() {
    // Set SEO tags for services page
    this.seoService.updateSeoTags({
      title: 'Our Services',
      description: 'Explore VSSEnterprises comprehensive electrical services including installation, maintenance, repairs, home automation, and solar solutions for residential and commercial needs.',
      keywords: 'electrical services, installation, maintenance, repairs, home automation, solar panels, commercial electrical, industrial solutions',
      image: 'https://www.VSSEnterprises.com/assets/images/logo.jpg',
      url: '/#/services'
    });

    this.services = this.dataService.getServices();
    this.displayedServices = this.limit ? this.services.slice(0, this.limit) : this.services;
    
    // Delay to ensure DOM is rendered
    setTimeout(() => {
      const cards = document.querySelectorAll('.service-card');
      this.animationService.observeElements(Array.from(cards));
      this.animationService.staggerElements(Array.from(cards), 100);
    }, 100);
  }

  goToServicesPage() {
    this.router.navigate(['/services']);
  }

  toggleService(serviceId: number) {
    this.expandedService = this.expandedService === serviceId ? null : serviceId;
  }

  openModal(service: any){
    this.selectedService = service;
    this.isClosingModal = false;
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = window.innerWidth - document.documentElement.clientWidth + 'px';
  }

  closeModal(){
    this.isClosingModal = true;
    
    // Wait for animation to complete before removing from DOM
    setTimeout(() => {
      this.selectedService = null;
      this.isClosingModal = false;
      // Re-enable body scroll when modal is closed
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0';
      
      // Ensure blur is removed from background
      const serviceSection = document.querySelector('.services-section');
      if (serviceSection) {
        (serviceSection as HTMLElement).style.filter = 'none';
      }
    }, 300);
  }

  // Close modal when pressing ESC key
  @HostListener('document:keydown.escape')
  onEscapeKey() {
    if (this.selectedService && !this.isClosingModal) {
      this.closeModal();
    }
  }

  // Close modal when clicking outside the modal box
  onModalOverlayClick(event: MouseEvent) {
    if (event.target === event.currentTarget && !this.isClosingModal) {
      this.closeModal();
    }
  }

  ngOnDestroy(): void {
    this.animationService.destroy();
    // Re-enable body scroll when component is destroyed
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '0';
  }
}

