export type ContentElement = {
  type:
    | "h2"
    | "h4"
    | "p"
    | "image"
    | "bullet-list"
    | "divider"
    | "video"
    | "quote"
    | "demo";
  content: string | string[];
  caption?: string;
};

export type Section = {
  id: string;
  title: string;
  content: ContentElement[];
};
