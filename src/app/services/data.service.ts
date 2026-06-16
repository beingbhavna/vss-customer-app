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
        "icon": "fas fa-hard-hat",
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
        "icon": "fas fa-cogs",
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
        "icon": "fas fa-th-large",
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
        "icon": "fas fa-ethernet",
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
        "icon": "fas fa-charging-station",
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
        "icon": "fas fa-camera",
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
        "icon": "fas fa-handshake",
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
        text: 'VSSEnterprises fixed our electrical issues within hours. Their emergency response team is amazing. We trust them completely!',
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
        title: 'Why Every Industrial Facility Needs an Annual Electrical Maintenance Contract',
        date: 'June 10, 2026',
        excerpt: 'Unplanned electrical breakdowns cost industrial facilities far more than a scheduled AMC. Learn how a structured maintenance contract prevents downtime, extends equipment life, and keeps your facility IS-compliant.',
        icon: 'fas fa-file-contract',
        content: `Unplanned electrical failures are among the most expensive disruptions an industrial facility can face — lost production, damaged machinery, and potential safety incidents. Yet the majority of these failures are entirely preventable with a structured Annual Maintenance Contract (AMC).

What Does an Electrical AMC Cover?
A well-structured AMC includes monthly preventive inspections, load balancing checks, panel and wiring health assessments, thermographic scanning for hot spots, and emergency breakdown response with priority turnaround. At VSS Enterprises, our AMC clients receive a dedicated service engineer, detailed inspection reports after every visit, and 24/7 emergency call support.

The Real Cost of Skipping Maintenance
Studies consistently show that reactive maintenance (fixing things after they break) costs 3–5× more than planned preventive maintenance. A single unexpected motor burnout or panel failure can halt production for days. Add in the cost of replacing damaged equipment and you are looking at losses that dwarf an entire year's AMC fee.

IS Standards Compliance
Under the Indian Electricity Rules and IE Act 2003, electrical installations in commercial and industrial premises must be maintained in safe working condition. Regular AMC visits ensure your facility stays compliant and avoids penalties or licence issues during government inspections.

Who Should Consider an AMC?
Factories and manufacturing units, commercial office complexes, hospitals and healthcare facilities, educational institutions, and any building with a high-voltage or 3-phase electrical system will benefit significantly from a structured contract.

Contact VSS Enterprises to discuss a customised AMC plan for your facility. We serve industrial, commercial and government clients across the region.`
      },
      {
        id: 2,
        title: 'LT vs HT Electrical Panels: What Contractors and Project Managers Need to Know',
        date: 'June 5, 2026',
        excerpt: 'Choosing between LT and HT panels is a critical project decision. This guide explains the key differences, applicable IS standards, and when each type is the right choice for your project.',
        icon: 'fas fa-th-large',
        content: `For project managers overseeing construction or infrastructure projects, understanding the difference between Low Tension (LT) and High Tension (HT) electrical panels is essential for accurate tendering, compliance, and safe commissioning.

Low Tension (LT) Panels
LT panels operate at voltages up to 1,000V (typically 415V in 3-phase systems in India). They are used in most commercial buildings, factories and residential complexes for distribution of power from the transformer to individual loads — lighting, motors, HVAC, sockets and machinery. LT panels must conform to IS 8623 and are tested for short-circuit withstand capacity, insulation resistance and earth fault protection.

High Tension (HT) Panels
HT panels operate above 1,000V — typically 11kV or 33kV in Indian industrial applications. They are installed between the utility supply point and the step-down transformer on large industrial sites, substations and campuses. HT equipment must comply with IS 3427 and requires licensed HT contractors for installation and commissioning under the IE Rules.

Key Differences at a Glance
Voltage range, protection type, maintenance requirements, and the qualifications needed for installation all differ significantly. HT work requires a licensed HT contractor and a competent person holding an HT licence under the Indian Electricity Rules.

What VSS Enterprises Provides
We handle complete LT panel supply, installation, testing and commissioning — including motor control centres (MCC), power control centres (PCC) and distribution boards. For HT projects, we work in coordination with licensed HT contractors to ensure full compliance. All panel work comes with test certificates and as-built documentation.

Planning a panel installation or upgrade? Get in touch with VSS Enterprises for a detailed site assessment and quotation.`
      },
      {
        id: 3,
        title: 'Earthing Systems Explained: IS 3043 Compliance for Commercial & Industrial Projects',
        date: 'May 28, 2026',
        excerpt: 'A properly designed earthing system is the foundation of electrical safety. Understand the types of earthing, IS 3043 requirements, and why cutting corners on earthing puts lives and equipment at risk.',
        icon: 'fas fa-shield-alt',
        content: `Earthing (or grounding) is arguably the single most important safety measure in any electrical installation. Yet it is also one of the most frequently under-specified items in construction projects — until something goes wrong.

What Is Electrical Earthing?
Earthing provides a low-resistance path for fault current to flow safely to the ground, preventing dangerous voltages from appearing on equipment enclosures, cable sheaths and structures. A properly earthed system protects human life from electric shock and protects equipment from damage during faults.

Types of Earthing Used in India
Plate earthing — a copper or GI plate buried vertically — is the most common method for residential and commercial installations. Pipe earthing uses a GI pipe driven vertically into the ground and is widely used in industrial settings. Chemical earthing uses a conductive compound to maintain low earth resistance even in rocky or low-moisture soil conditions. For lightning protection, a dedicated air termination network connected to earth electrodes via down conductors is required under IS 2309.

IS 3043: The Standard You Must Follow
IS 3043 is the Indian Standard code of practice for earthing. It specifies maximum permissible earth resistance values (generally ≤1Ω for HT systems, ≤5Ω for LT systems), electrode types, spacing requirements, and testing procedures. All electrical contractors in India are required to follow IS 3043 — and inspecting authorities will check earthing test certificates before issuing completion certificates.

Consequences of Poor Earthing
Inadequate earthing leads to electric shock risk, equipment damage from fault currents, false tripping of protective devices, and failure to pass mandatory electrical safety inspections.

VSS Enterprises designs and installs compliant earthing systems for residential buildings, commercial complexes, industrial facilities and telecom infrastructure. Every installation is tested with a calibrated earth resistance tester and a test certificate is provided with the completion package.`
      }
    ];
  }
}
