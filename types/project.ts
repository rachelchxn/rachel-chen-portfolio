export type Project = {
  heading: string;
  title: string;
  tag: string;
  image: string;
  gif: string;
  slug: string;
  role: string;
  timeline: string;
  team: string[];
  skills: string[];
};

export type ProjectsData = {
  projects: Project[];
};
