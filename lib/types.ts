export type ProjectStatus = "idea" | "building" | "completed" | "launched" | "paused";
export type IdeaStatus = "idea" | "researching" | "building" | "launched" | "paused";

export interface Project {
  slug: string;
  title: string;
  short: string;
  category: string;
  technologies: string[];
  status: ProjectStatus;
  featured: boolean;
  problem: string;
  ideaText: string;
  howItWorks: string;
  features: string[];
  challenges: string;
  learned: string;
  future: string;
  imageUrl?: string;
  github?: string;
  demo?: string;
}

export interface Idea {
  slug: string;
  title: string;
  what: string;
  why: string;
  problem: string;
  who: string;
  how: string;
  status: IdeaStatus;
  imageUrl?: string;
}

export interface ThinkingPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl?: string;
}

export interface Trip {
  slug: string;
  title: string;
  location: string;
  date: string;
  excerpt: string;
  imageUrl?: string;
}

export interface Goal {
  title: string;
  progress: number;
  category: string;
}
