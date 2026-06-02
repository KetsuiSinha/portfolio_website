export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    name: 'FRONTEND',
    skills: ['TypeScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'HTML', 'CSS'],
  },
  {
    name: 'BACKEND',
    skills: ['TypeScript', 'Node.js', 'Express.js', 'Python', 'FastAPI', 'SQL', 'C++'],
  },
  {
    name: 'TOOLS',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'MongoDB', 'Firebase', 'Supabase'],
  },
];
