export type UiCategory =
  | "lp-animation"
  | "micro-interaction"
  | "form-ui"
  | "navigation"
  | "three-d"
  | "page-transition"
  | "clone-ui"
  | "dashboard"
  | "experimental";

export type EmotionTag =
  | "気持ちいい"
  | "かっこいい"
  | "高級感"
  | "近未来"
  | "ぬるっと動く"
  | "サクサク"
  | "没入感"
  | "制作会社っぽい"
  | "LP向き"
  | "ポートフォリオ向き"
  | "実務向き";

export type Technology =
  | "Next.js"
  | "React"
  | "TypeScript"
  | "Tailwind CSS"
  | "Framer Motion"
  | "GSAP"
  | "Three.js"
  | "React Three Fiber"
  | "Drei"
  | "Radix UI"
  | "Zustand"
  | "TanStack Query"
  | "MSW"
  | "React Hook Form"
  | "Zod";

export type ReferenceUrl = {
  label: string;
  url: string;
  type: "service" | "website" | "article" | "video" | "other";
};

export type UiItem = {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  category: UiCategory;
  tags: string[];
  emotionTags: EmotionTag[];
  technologies: Technology[];
  difficulty: 1 | 2 | 3 | 4 | 5;
  thumbnailUrl: string;
  demoType: "component" | "section" | "page" | "three" | "animation";
  status: "published" | "draft" | "wip";
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
  sourceUrl?: string;
  githubUrl?: string;
  referenceUrls?: ReferenceUrl[];
  implementationNotes: string[];
  learningPoints: string[];
  improvementIdeas: string[];
};
