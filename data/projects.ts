export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  mediaType?: 'image' | 'video';
  mediaSrc?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'ORCHESTRIX',
    category: 'Personal Project / Full Stack',
    description: 'An AI-powered Next.js application that translated natural language inputs into structured JSON specifications and RESTful APIs, reducing backend setup time by 60%.',
    mediaType: 'image',
    mediaSrc: '/projects/Orchestrix.png',
  },
  {
    id: 2,
    title: 'HOSPIBOT',
    category: 'Personal Project / Full Stack',
    description: 'ERP module for hospital staff management with role-based access control, resource allocation, and performance tracking aligned with operational requirements.',
    mediaType: 'image',
    mediaSrc: '/projects/Hospibot.png',
  },
  {
    id: 3,
    title: 'SOSHABLE',
    category: 'Personal Project / Full Stack',
    description: 'Real-time community engagement platform enabling users to create, manage, and participate in events with seamless real-time interaction and secure authentication.',
    mediaType: 'image',
    mediaSrc: '/projects/Soshable.png',
  },
  {
    id: 4,
    title: 'PORTFOLIO',
    category: 'Personal Project / Design',
    description: 'A modern portfolio website built with React, showcasing technical work and design sensibility.',
    mediaType: 'image',
    mediaSrc: '/projects/Portfolio.png',
  },
];
