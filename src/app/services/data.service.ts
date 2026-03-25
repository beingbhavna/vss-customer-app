import { Injectable } from '@angular/core';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  details: {
    title: string;
    items: string[];
    priceRange: string;
  };
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  icon: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getServices(): Service[] {
    return [
      {
        "id": 1,
        "title": "Electric & Electronic Contracting",
        "description": "Complete electrical and electronic works on contract basis for all types of projects",
        "icon": "fas fa-bolt",
        "details": {
          "title": "Service Details",
          "items": [
            "Turnkey electrical project execution",
            "Government and private project handling",
            "Electrical drawing and load calculation",
            "Electrical + electronic system integration",
            "Complete site supervision and execution"
          ],
          "priceRange": "Project based quotation"
        }
      },
      {
        "id": 2,
        "title": "Electrical Installation",
        "description": "Professional installation of wiring, panels and electrical systems",
        "icon": "fas fa-plug",
        "details": {
          "title": "Service Details",
          "items": [
            "House and building wiring installation",
            "Lighting system setup (indoor & outdoor)",
            "Socket, switch and DB installation",
            "New construction electrical setup",
            "Commercial and office wiring solutions"
          ],
          "priceRange": "₹50,000 - ₹5,00,000"
        }
      },
      {
        "id": 3,
        "title": "Electrical Maintenance",
        "description": "Regular electrical maintenance to ensure safe and efficient operation",
        "icon": "fas fa-tools",
        "details": {
          "title": "Service Details",
          "items": [
            "Scheduled preventive maintenance",
            "Electrical system health check",
            "Load balancing and inspection",
            "Panel and wiring maintenance",
            "Breakdown prevention services"
          ],
          "priceRange": "₹5,000 - ₹50,000/month"
        }
      },
      {
        "id": 4,
        "title": "Electrical Repair & Troubleshooting",
        "description": "Fast diagnosis and repair of electrical faults",
        "icon": "fas fa-wrench",
        "details": {
          "title": "Service Details",
          "items": [
            "Short circuit fault detection",
            "Power supply issue fixing",
            "MCB, fuse and wiring repair",
            "Electrical breakdown emergency support",
            "Fault finding using advanced tools"
          ],
          "priceRange": "₹1,000 - ₹10,000 per visit"
        }
      },
      {
        "id": 5,
        "title": "Home Automation Systems",
        "description": "Smart electrical automation for modern homes",
        "icon": "fas fa-home",
        "details": {
          "title": "Service Details",
          "items": [
            "Smart switch and lighting control",
            "Mobile app based home control",
            "Voice automation (Alexa/Google)",
            "Energy saving automation setup",
            "Security integration with automation"
          ],
          "priceRange": "₹1,00,000 - ₹10,00,000"
        }
      },
      {
        "id": 6,
        "title": "Industrial Electrical Solutions",
        "description": "Advanced electrical solutions for industries and factories",
        "icon": "fas fa-industry",
        "details": {
          "title": "Service Details",
          "items": [
            "Factory electrical setup",
            "Heavy load wiring and installation",
            "Motor and machine connections",
            "3-phase electrical systems",
            "Industrial safety compliance setup"
          ],
          "priceRange": "Custom quote required"
        }
      },
      {
        "id": 7,
        "title": "Power Distribution Systems",
        "description": "Reliable electrical power distribution design and setup",
        "icon": "fas fa-network-wired",
        "details": {
          "title": "Service Details",
          "items": [
            "Load distribution planning",
            "Transformer and feeder connections",
            "Substation wiring support",
            "Industrial power distribution setup",
            "High load system balancing"
          ],
          "priceRange": "Custom quote required"
        }
      },
      {
        "id": 8,
        "title": "Electrical Panels & Control Panels",
        "description": "Installation of LT panels, DB boards and control panels",
        "icon": "fas fa-server",
        "details": {
          "title": "Service Details",
          "items": [
            "LT and HT panel installation",
            "Control panel wiring",
            "Motor control panel setup",
            "Panel testing and commissioning",
            "Panel repair and servicing"
          ],
          "priceRange": "Custom quote required"
        }
      },
      {
        "id": 9,
        "title": "Cable Laying & Termination",
        "description": "Underground and overhead electrical cable installation",
        "icon": "fas fa-project-diagram",
        "details": {
          "title": "Service Details",
          "items": [
            "Underground cable laying",
            "Cable tray and trench work",
            "HT/LT cable termination",
            "Industrial cable routing",
            "Cable fault detection and repair"
          ],
          "priceRange": "Custom quote required"
        }
      },
      {
        "id": 10,
        "title": "Generator & Power Backup Systems",
        "description": "Installation and maintenance of DG sets and power backup",
        "icon": "fas fa-car-battery",
        "details": {
          "title": "Service Details",
          "items": [
            "DG set installation",
            "Generator wiring and setup",
            "UPS and inverter systems",
            "Automatic changeover systems",
            "Backup system maintenance"
          ],
          "priceRange": "Custom quote required"
        }
      },
      {
        "id": 11,
        "title": "Earthing & Electrical Safety",
        "description": "Complete earthing systems and electrical safety solutions",
        "icon": "fas fa-shield-alt",
        "details": {
          "title": "Service Details",
          "items": [
            "Chemical and plate earthing",
            "Lightning protection system",
            "Electrical safety audit",
            "Grounding system installation",
            "Shock protection solutions"
          ],
          "priceRange": "Custom quote required"
        }
      },
      {
        "id": 12,
        "title": "CCTV & Electronic Systems",
        "description": "Installation of CCTV surveillance and electronic security systems",
        "icon": "fas fa-video",
        "details": {
          "title": "Service Details",
          "items": [
            "CCTV camera installation",
            "DVR/NVR setup",
            "Office and factory surveillance",
            "Remote mobile monitoring",
            "Security system maintenance"
          ],
          "priceRange": "Custom quote required"
        }
      },
      {
        "id": 13,
        "title": "Electrical Testing & Commissioning",
        "description": "Testing and commissioning of electrical systems",
        "icon": "fas fa-clipboard-check",
        "details": {
          "title": "Service Details",
          "items": [
            "Pre-commissioning testing",
            "Load and performance testing",
            "Electrical safety testing",
            "System verification and approval",
            "Final handover inspection"
          ],
          "priceRange": "Custom quote required"
        }
      },
      {
        "id": 14,
        "title": "Annual Maintenance Contract (AMC)",
        "description": "Long term electrical maintenance for buildings and industries",
        "icon": "fas fa-calendar-check",
        "details": {
          "title": "Service Details",
          "items": [
            "Yearly maintenance contracts",
            "Monthly inspection visits",
            "Emergency breakdown support",
            "Electrical system monitoring",
            "Priority service for AMC clients"
          ],
          "priceRange": "Custom quote required"
        }
      }
    ]
  }

  getTestimonials(): Testimonial[] {
    return [
      {
        id: 1,
        text: 'Excellent service! The team was professional, punctual, and completed the entire electrical installation for our new office. Highly recommended!',
        author: 'Rajesh Kumar',
        role: 'Business Owner',
        avatar: 'RK',
        rating: 5
      },
      {
        id: 2,
        text: 'PowerElectric fixed our electrical issues within hours. Their emergency response team is amazing. We trust them completely!',
        author: 'Priya Mishra',
        role: 'Homeowner',
        avatar: 'PM',
        rating: 5
      },
      {
        id: 3,
        text: 'The home automation system they installed is fantastic! Everything works smoothly and the support team is always helpful.',
        author: 'Arun Singh',
        role: 'Tech Enthusiast',
        avatar: 'AS',
        rating: 5
      }
    ];
  }

  getBlogPosts(): BlogPost[] {
    return [
      {
        id: 1,
        title: 'Energy Saving Tips for Your Home',
        date: 'March 10, 2026',
        excerpt: 'Discover practical ways to reduce your electricity consumption and save money on your monthly bills with simple adjustments.',
        icon: 'fas fa-lightbulb',
        content: 'Discover practical ways to reduce your electricity consumption and save money on your monthly bills with simple adjustments. Learn about energy-efficient lighting, proper appliance usage, and smart power management techniques.'
      },
      {
        id: 2,
        title: 'Benefits of Solar Panel Installation',
        date: 'March 8, 2026',
        excerpt: 'Learn about the advantages of switching to solar energy, including cost savings, environmental benefits, and government incentives.',
        icon: 'fas fa-solar-panel',
        content: 'Solar energy is a renewable and clean source of power. This blog covers the long-term savings, environmental impact, available government subsidies, and how solar installations can increase property value.'
      },
      {
        id: 3,
        title: 'Electrical Safety: What Every Home Should Know',
        date: 'March 5, 2026',
        excerpt: 'Essential electrical safety tips to protect your family and property. Learn about common hazards and how to prevent them.',
        icon: 'fas fa-hammer',
        content: 'Safety is paramount when dealing with electricity. This guide covers fire prevention, safe handling of appliances, circuit breaker maintenance, and when to call a professional electrician.'
      }
    ];
  }
}
