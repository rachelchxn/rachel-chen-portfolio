export type ContentElement = {
  type: "h2" | "p" | "image";
  content: string;
  caption?: string;
};

export type Section = {
  id: string;
  title: string;
  content: ContentElement[];
};
