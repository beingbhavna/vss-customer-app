import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {
  @ViewChild('contactSection') contactSection!: ElementRef;
  
  contactForm: FormGroup;
  submitted = false;
  successMessage = '';
  errorMessage = '';
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService,
    private animationService: AnimationService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?[\d\s\-\(\)]{10,}$/)]],
      service: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
    // Delay to ensure DOM is rendered
    setTimeout(() => {
      const infoCards = document.querySelectorAll('.info-card');
      this.animationService.observeElements(Array.from(infoCards));
      this.animationService.staggerElements(Array.from(infoCards), 100);
      
      const formGroups = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
      this.animationService.observeElements(Array.from(formGroups));
      this.animationService.staggerElements(Array.from(formGroups), 80);
    }, 100);
  }

  onSubmit() {
    this.submitted = true;
    this.successMessage = '';
    this.errorMessage = '';
    this.isLoading = false;

    if (this.contactForm.valid) {
      this.isLoading = true;

      // Send email using the email service
      const formData = this.contactForm.value;
      this.emailService.sendEmail(formData).subscribe(
        (response: any) => {
          this.isLoading = false;

          if (response.success) {
            // Show success message
            this.successMessage = response.message || 'Thank you! Your message has been sent successfully. We will contact you soon!';

            // Log the form data
            console.log('Form Submitted:', formData);

            // Reset form
            this.contactForm.reset();
            this.submitted = false;

            // Clear success message after 5 seconds
            setTimeout(() => {
              this.successMessage = '';
            }, 5000);
          } else {
            this.errorMessage = response.message || 'Error sending message. Please try again.';
          }
        },
        (error: any) => {
          this.isLoading = false;
          this.errorMessage = 'Error sending message. Please try again.';
          console.error('Error:', error);
        }
      );
    }
  }

  get f() {
    return this.contactForm.controls;
  }

  ngOnDestroy(): void {
    this.animationService.destroy();
  }

  //           this.submitted = false;

  //           // Clear message after 5 seconds
  //           setTimeout(() => {
  //             this.successMessage = '';
  //           }, 5000);
  //         } else {
  //           this.errorMessage = response.message || 'Failed to send email. Please try again.';
  //         }
  //       },
  //       (error: any) => {
  //         this.isLoading = false;
  //         console.error('Error sending email:', error);

  //         // Show user-friendly error message
  //         this.successMessage = 'Thank you! Your message has been received. We will contact you soon!';

  //         // Reset form
  //         this.contactForm.reset();
  //         this.submitted = false;

  //         // Clear message after 5 seconds
  //         setTimeout(() => {
  //           this.successMessage = '';
  //         }, 5000);
  //       }
  //     );
  //   } else {
  //     this.errorMessage = 'Please fill out all fields correctly.';
  //   }
  // }

  // onSubmit() {
  //   this.submitted = true;
  //   if (this.contactForm.invalid) return;
  //   this.isLoading = true;
  //   const formData = this.contactForm.value;
  //   this.emailService.sendEmail(formData).subscribe({
  //     next: (res: any) => {
  //       this.isLoading = false;
  //       this.successMessage = "Message sent successfully!";
  //       // this.contactForm.reset();
  //       this.submitted = false;
  //     },
  //     error: (err) => {
  //       this.isLoading = false;
  //       this.errorMessage = "Email failed. Please try again.";
  //       console.error(err);
  //     }
  //   });

  // }

  // get f() {
  //   return this.contactForm.controls;
  // }
}
