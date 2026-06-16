import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService, BlogPost } from '../../services/data.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit, OnDestroy {

  post: BlogPost | undefined;
  relatedPosts: BlogPost[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      const allPosts = this.dataService.getBlogPosts();
      this.post = allPosts.find(p => p.id === id);

      if (!this.post) {
        this.router.navigate(['/blog']);
        return;
      }

      this.relatedPosts = allPosts.filter(p => p.id !== id).slice(0, 2);

      this.seoService.updateSeoTags({
        title: this.post.title,
        description: this.post.excerpt,
        keywords: 'electrical blog, ' + this.post.title,
        image: 'https://www.VSSEnterprises.com/assets/images/logo.jpg',
        url: '/blog/' + id
      });
    });
  }

  goBack(): void {
    this.router.navigate(['/blog']);
  }

  goToContact(): void {
    this.router.navigate(['/contact']);
  }

  navigateToPost(id: number): void {
    this.router.navigate(['/blog', id]);
  }

  ngOnDestroy(): void {}
}
