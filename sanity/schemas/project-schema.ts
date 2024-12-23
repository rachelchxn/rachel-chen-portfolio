const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "headline",
      title: "Headline",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
    },
    {
      name: "image",
      title: "image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "primarycolour",
      title: "Primary Colour",
      type: "string",
    },
    {
      name: "secondarycolour",
      title: "Secondary Colour",
      type: "string",
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "timeline",
      title: "Timeline",
      type: "string",
    },
    {
      name: "roles",
      title: "Roles",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "team",
      title: "Team",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "projecttype",
      title: "Project Type",
      type: "string",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "overview",
      title: "Overview",
      type: "string",
    },
    {
      name: "links",
      title: "Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "text",
              title: "Text",
              type: "string",
            },
            {
              name: "url",
              title: "URL",
              type: "url",
            },
          ],
        },
      ],
    },
    {
      name: "intro",
      title: "Intro",
      type: "array",
      marks: {
        annotations: [
          {
            name: "link",
            type: "object",
            title: "link",
            fields: [
              {
                name: "url",
                type: "url",
              },
            ],
          },
        ],
      },

      of: [
        { type: "block" },
        {
          type: "image",
        },
      ],
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      marks: {
        annotations: [
          {
            name: "link",
            type: "object",
            title: "link",
            fields: [
              {
                name: "url",
                type: "url",
              },
            ],
          },
        ],
      },

      of: [
        { type: "block" },
        {
          type: "image",
        },
      ],
    },
  ],
  orderings: [
    {
      title: "Featured",
      name: "featured",
      by: [{ field: "order", direction: "desc" }],
    },
  ],
};

export default project;
