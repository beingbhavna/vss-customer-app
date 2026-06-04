import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroSliderComponent } from './components/hero-slider/hero-slider.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';
import { FeedbackDashboardComponent } from './components/feedback-dashboard/feedback-dashboard.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { TestimonialFormComponent } from './components/testimonial-form/testimonial-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroSliderComponent,
    ServicesComponent,
    AboutComponent,
    TestimonialsComponent,
    BlogComponent,
    ContactComponent,
    FooterComponent,
    FeedbackFormComponent,
    FeedbackDashboardComponent,
    BlogDetailComponent,
    TestimonialFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
