import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { DataService, BlogPost } from '../../services/data.service';
import { AnimationService } from '../../services/animation.service';

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
    private animationService: AnimationService
  ) {}

  ngOnInit() {
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
