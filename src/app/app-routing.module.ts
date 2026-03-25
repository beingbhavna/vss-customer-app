import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroSliderComponent } from './components/hero-slider/hero-slider.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';
import { FeedbackDashboardComponent } from './components/feedback-dashboard/feedback-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HeroSliderComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'feedback-form', component: FeedbackFormComponent },
  { path: 'feedback-dashboard', component: FeedbackDashboardComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
