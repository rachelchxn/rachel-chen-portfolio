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
};

export default project;
