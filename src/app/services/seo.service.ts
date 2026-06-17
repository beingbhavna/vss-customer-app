import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoData {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private baseUrl = 'https://vss-customer-app.pages.dev';
  private defaultImage = 'https://vss-customer-app.pages.dev/assets/images/logo.jpg';

  constructor(
    private metaService: Meta,
    private titleService: Title
  ) {}

  /**
   * Update all SEO tags for a page
   */
  updateSeoTags(data: SeoData): void {
    // Title
    const fullTitle = `${data.title} | VSSEnterprises`;
    this.titleService.setTitle(fullTitle);

    // Meta Tags
    this.updateMetaTag('description', data.description);
    if (data.keywords) {
      this.updateMetaTag('keywords', data.keywords);
    }
    this.updateMetaTag('author', data.author || 'VSSEnterprises');

    // Canonical URL — always use clean path (no hash)
    const cleanPath = data.url ? data.url.replace(/^#/, '') : '';
    const canonicalUrl = cleanPath ? `${this.baseUrl}${cleanPath}` : this.baseUrl;
    this.updateCanonicalURL(canonicalUrl);

    // Open Graph Tags
    this.updateOpenGraphTags({
      title: data.title,
      description: data.description,
      image: data.image || this.defaultImage,
      url: canonicalUrl,
      type: data.type || 'website'
    });

    // Twitter Card Tags
    this.updateTwitterCardTags({
      title: data.title,
      description: data.description,
      image: data.image || this.defaultImage
    });
  }

  /**
   * Update meta tag
   */
  private updateMetaTag(name: string, content: string): void {
    const tag = this.metaService.getTag(`name='${name}'`);
    if (tag) {
      this.metaService.updateTag({ name, content });
    } else {
      this.metaService.addTag({ name, content });
    }
  }

  /**
   * Update canonical URL
   */
  private updateCanonicalURL(url: string): void {
    const link = document.querySelector('link[rel="canonical"]');
    if (link) {
      link.setAttribute('href', url);
    } else {
      const newLink = document.createElement('link');
      newLink.setAttribute('rel', 'canonical');
      newLink.setAttribute('href', url);
      document.head.appendChild(newLink);
    }
  }

  /**
   * Update Open Graph tags for social sharing
   */
  private updateOpenGraphTags(data: any): void {
    this.updatePropertyTag('og:title', data.title);
    this.updatePropertyTag('og:description', data.description);
    this.updatePropertyTag('og:image', data.image);
    this.updatePropertyTag('og:url', data.url);
    this.updatePropertyTag('og:type', data.type);
  }

  private updatePropertyTag(property: string, content: string): void {
    const tag = this.metaService.getTag(`property='${property}'`);
    if (tag) {
      this.metaService.updateTag({ property, content });
    } else {
      this.metaService.addTag({ property, content });
    }
  }

  /**
   * Update Twitter Card tags
   */
  private updateTwitterCardTags(data: any): void {
    const twitterTag = this.metaService.getTag("name='twitter:card'");
    if (!twitterTag) {
      this.metaService.addTag({ name: 'twitter:card', content: 'summary_large_image' });
    } else {
      this.updateMetaTag('twitter:card', 'summary_large_image');
    }
    this.updateMetaTag('twitter:title', data.title);
    this.updateMetaTag('twitter:description', data.description);
    this.updateMetaTag('twitter:image', data.image);
  }

  /**
   * Create and inject Schema.org JSON-LD structured data.
   * Marks the script with data-managed="true" so removeSchemas() can clean it up
   * on navigation without removing the static schemas in index.html.
   */
  createSchema(schema: any): void {
    const schemaScript = document.createElement('script');
    schemaScript.setAttribute('type', 'application/ld+json');
    schemaScript.setAttribute('data-managed', 'true');
    schemaScript.textContent = JSON.stringify(schema);
    document.head.appendChild(schemaScript);
  }

  /**
   * Get schema for Organization
   */
  getOrganizationSchema(): any {
    return {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      'name': 'VSSEnterprises',
      'description': 'Professional electrical services for residential, commercial, and industrial clients',
      'url': this.baseUrl,
      'logo': this.defaultImage,
      'image': this.defaultImage,
      'telephone': '+91-9454445071',
      'email': 'vss.electricsenterprises@gmail.com',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Your Street Address',
        'addressLocality': 'Your City',
        'addressRegion': 'Your State',
        'postalCode': 'Your Postal Code',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '0.0',
        'longitude': '0.0'
      },
      'sameAs': [
        'https://www.facebook.com/VSSEnterprises',
        'https://twitter.com/VSSEnterprises',
        'https://www.linkedin.com/company/VSSEnterprises',
        'https://wa.me/919454445071'
      ],
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        'opens': '09:00',
        'closes': '18:00'
      }
    };
  }

  /**
   * Get schema for Service
   */
  getServiceSchema(serviceName: string, description: string): any {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': serviceName,
      'description': description,
      'provider': {
        '@type': 'LocalBusiness',
        'name': 'VSSEnterprises',
        'url': this.baseUrl
      },
      'areaServed': {
        '@type': 'City',
        'name': 'Your Service Area'
      }
    };
  }

  /**
   * Get schema for BreadcrumbList
   */
  getBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>): any {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'name': crumb.name,
        'item': crumb.url
      }))
    };
  }

  /**
   * Get schema for Article/Blog Post
   */
  getArticleSchema(article: {
    headline: string;
    description: string;
    datePublished: string;
    dateModified?: string;
    author?: string;
    image?: string;
  }): any {
    return {
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      'headline': article.headline,
      'description': article.description,
      'image': article.image || this.defaultImage,
      'datePublished': article.datePublished,
      'dateModified': article.dateModified || article.datePublished,
      'author': {
        '@type': 'Person',
        'name': article.author || 'VSSEnterprises Team'
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'VSSEnterprises',
        'logo': this.defaultImage
      }
    };
  }

  /**
   * Get schema for FAQPage
   */
  getFaqSchema(faqs: Array<{ question: string; answer: string }>): any {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faqs.map(faq => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    };
  }

  /**
   * Remove all injected schemas
   */
  removeSchemas(): void {
    const schemas = document.querySelectorAll('script[type="application/ld+json"]');
    schemas.forEach(schema => {
      if (schema.getAttribute('data-managed') === 'true') {
        schema.remove();
      }
    });
  }
}
