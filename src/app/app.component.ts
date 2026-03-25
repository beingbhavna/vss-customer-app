import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'VSS-Enterprise';

  constructor(
    private metaService: Meta,
    private titleService: Title
  ) {}

  ngOnInit() {
    // Set page title
    this.titleService.setTitle('VSS-Enterprise');

    // Set meta tags for SEO
    this.metaService.updateTag({ name: 'description', content: 'PowerElectric provides professional electrical solutions for residential, commercial, and industrial clients. Expert installation, maintenance, and repair services.' });
    this.metaService.updateTag({ name: 'keywords', content: 'electrical services, electrical installation, electrical repair, home automation, solar panels, industrial solutions' });
    this.metaService.updateTag({ name: 'author', content: 'PowerElectric' });
    this.metaService.updateTag({ name: 'viewport', content: 'width=device-width, initial-scale=1.0' });
    
    // Open Graph meta tags
    this.metaService.updateTag({ property: 'og:title', content: 'VSS-Enterprise' });
    this.metaService.updateTag({ property: 'og:description', content: 'Expert electrical services for all your needs' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
  }
}
