import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen = false;

  constructor(private router: Router) { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateTo(path: string) {
    this.isMenuOpen = false;
    this.router.navigate([path]);
  }

  // Keep this for backward compatibility if needed
  scrollToSection(sectionId: string) {
    this.isMenuOpen = false;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // navigateTo(section: string){
  //   this.isMenuOpen = false;

  //   document.getElementById(section)?.scrollIntoView({behavior:'smooth'});
  // }
}
