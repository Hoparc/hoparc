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
      name: "story",
      title: "Story",
      type: "text",
      description: "Please provide your story.",
      validation: (Rule) => [Rule.required()],
    },
    {
      name: "purpose",
      title: "Purpose",
      type: "text",
      description: "Please provide your purpose on how you got started.",
      validation: (Rule) => [Rule.required()],
    },
  ],
};
