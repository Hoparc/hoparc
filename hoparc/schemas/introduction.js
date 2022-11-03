export default {
  name: "introduction",
  title: "Introduction",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      description: "Please upload a landscape image for your introduction.",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "callToAction",
      title: "Call to Action",
      type: "string",
      description: "Please provide a new call to action.",
      validation: (Rule) => Rule.required(),
    },
  ],
};
