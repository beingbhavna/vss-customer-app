import { Component, OnInit } from '@angular/core';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'VSSEnterprises';

  constructor(private seoService: SeoService) {}

  ngOnInit() {
    // Set default SEO tags for home page
    this.seoService.updateSeoTags({
      title: 'Home',
      description: 'VSSEnterprises provides professional electrical solutions for residential, commercial, and industrial clients. Expert installation, maintenance, and repair services available 24/7.',
      keywords: 'electrical services, electrical installation, electrical repair, home automation, solar panels, industrial solutions',
      image: 'https://www.VSSEnterprises.com/assets/images/logo.jpg',
      url: '/#/home'
    });

    // Add organization schema
    this.seoService.createSchema(this.seoService.getOrganizationSchema());
  }
}
