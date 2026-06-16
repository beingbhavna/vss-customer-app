import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { DataService, BlogPost } from '../../services/data.service';
import { AnimationService } from '../../services/animation.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, OnDestroy {
  @ViewChild('blogSection') blogSection!: ElementRef;
  
  blogPosts: BlogPost[] = [];

  constructor(
    private dataService: DataService,
    private animationService: AnimationService,
    private seoService: SeoService
  ) {}

  ngOnInit() {
    // Set SEO tags for blog page
    this.seoService.updateSeoTags({
      title: 'Blog — Electrical Contracting Insights & Technical Guides',
      description: 'Technical articles from VSS Enterprises on electrical contracting, AMC benefits, LT/HT panels, IS standard compliance, earthing systems and more. Written for project managers and facility teams.',
      keywords: 'electrical contracting blog, AMC electrical maintenance, LT HT panels explained, IS 3043 earthing, electrical safety compliance, industrial electrical guide',
      image: 'https://www.VSSEnterprises.com/assets/images/logo.jpg',
      url: '/blog'
    });

    this.blogPosts = this.dataService.getBlogPosts();
    
    // Delay to ensure DOM is rendered
    setTimeout(() => {
      const blogCards = document.querySelectorAll('.blog-card');
      this.animationService.observeElements(Array.from(blogCards));
      this.animationService.staggerElements(Array.from(blogCards), 100);
    }, 100);
  }

  ngOnDestroy(): void {
    this.animationService.destroy();
  }
}
