export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  problemStatement?: string;
  highlights: string[];
  technologies: string[];
  metrics?: { label: string; value: string; note?: string }[];
  isFlagship?: boolean;
  githubUrl?: string;
  caseStudyUrl?: string;
  accentColor: string;
}

export interface SkillCategory {
  name: string;
  badge: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
    context?: string;
  }[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  institution: string;
  degree: string;
  graduation: string;
  location: string;
  coursework: string[];
}

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  metric?: string;
  year?: string;
  category: 'Hackathon' | 'Competitive' | 'Academic' | 'Engineering';
  badge: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  verificationAvailable?: boolean;
}
