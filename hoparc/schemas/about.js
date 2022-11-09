export default {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      description: "Please upload a landscape image for your about page.",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "purpose",
      title: "Purpose",
      type: "text",
      description: "Please provide text for your purpose.",
      validation: (Rule) => [Rule.required()],
    },
  ],
};
