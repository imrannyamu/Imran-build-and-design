
import React from 'react';
import { Layout, Compass, PenTool, ShieldCheck } from 'lucide-react';
import { Project, ExpertiseItem, TeamMember, Review, FAQItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'The Obsidian House',
    category: 'Residential',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    description: 'A minimalist sanctuary defined by dark textures and fluid lighting.'
  },
  {
    id: '2',
    title: 'Imran Pavilion',
    category: 'Commercial',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    description: 'Brutalist beauty meets contemporary luxury in this glass-clad office complex.'
  },
  {
    id: '3',
    title: 'Gilded Penthouse',
    category: 'Interior',
    imageUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200',
    description: 'High-altitude living with custom stone finishes and brushed gold accents.'
  },
  {
    id: '4',
    title: 'Lumina Center',
    category: 'Cultural',
    imageUrl: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&q=80&w=1200',
    description: 'A structural masterpiece pushing the limits of modern cantilevers.'
  },
  {
    id: '5',
    title: 'Stone Creek Villa',
    category: 'Residential',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    description: 'Integrating natural stone and native landscape into a seamless living space.'
  }
];

export const EXPERTISE: ExpertiseItem[] = [
  {
    id: 1,
    title: 'Architectural Design',
    description: 'Visionary concepts that balance aesthetic allure with functional precision.',
    icon: 'Compass'
  },
  {
    id: 2,
    title: 'Luxury Construction',
    description: 'Uncompromising craftsmanship executed with premium materials and white-glove service.',
    icon: 'Layout'
  },
  {
    id: 3,
    title: 'Interior Curation',
    description: 'Tailored interiors that reflect the soul of the inhabitants through curated textures.',
    icon: 'PenTool'
  },
  {
    id: 4,
    title: 'Sustainability',
    description: 'Eco-conscious engineering that prioritizes the planet without sacrificing grandeur.',
    icon: 'ShieldCheck'
  }
];

export const TEAM: TeamMember[] = [
  {
    name: 'Imran Nyamu',
    role: 'Founding Principal',
    story: 'A visionary leader with a deep passion for structural integrity and aesthetic harmony. Imran founded the firm with a commitment to redefining the architectural landscape through sustainable, luxury design that speaks to both local heritage and global trends.'
  },
  {
    name: 'Sadia Nyamu',
    role: 'Director of Design',
    story: 'With an intuitive eye for detail and spatial flow, Sadia leads the design department in creating immersive environments. Her work is characterized by a seamless blend of organic textures and modern minimalism, ensuring every space feels alive and intentional.'
  },
  {
    name: 'Elias Nyamu',
    role: 'Chief of Operations',
    story: 'The driving force behind the firm’s precision and construction excellence. Elias oversees all on-site operations, ensuring that the transition from architectural concept to built reality is executed with uncompromising quality and rigorous attention to detail.'
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Alamin Ahmed',
    projectType: 'The Obsidian House',
    rating: 5,
    content: 'Imran Build & Design transformed our vision into an architectural masterpiece. The attention to detail in the textures and lighting is beyond anything we imagined.'
  },
  {
    id: '2',
    author: 'Adam Abdi',
    projectType: 'Gilded Penthouse',
    rating: 5,
    content: 'A seamless experience from concept to completion. Their interior curation team has an uncanny ability to balance grandeur with a sense of home.'
  },
  {
    id: '3',
    author: 'Sarite Abdijaliloz',
    projectType: 'Commercial Pavilion',
    rating: 5,
    content: 'Uncompromising quality. The structural integrity and the aesthetic impact of our new pavilion have set a new standard in our corporate portfolio.'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: "What is the typical timeline for a high-end residential project?",
    answer: "Timelines vary depending on project complexity and scope. Generally, a bespoke residence takes between 12 to 24 months from initial conceptualization through architectural design, permitting, and final construction handover."
  },
  {
    id: 'faq-2',
    question: "Do you offer full turnkey solutions including interior design?",
    answer: "Yes, Imran Build & Design provides comprehensive turnkey services. We manage everything from the initial architectural blueprints and structural engineering to meticulous interior curation, landscaping, and final styling."
  },
  {
    id: 'faq-3',
    question: "How do you ensure sustainability in your luxury builds?",
    answer: "Sustainability is core to our philosophy. We integrate passive solar design, high-performance thermal insulation, and advanced water management systems. We also prioritize locally-sourced, low-impact materials that don't compromise on luxury aesthetics."
  },
  {
    id: 'faq-4',
    question: "Is your work limited to Nairobi CBD and Kenya?",
    answer: "While our studio is based in the Nairobi CBD, our vision is global. We are equipped to handle projects across the East African region and have the logistics capabilities to manage international design consultations and construction management."
  }
];
