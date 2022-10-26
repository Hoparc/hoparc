export default {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      description: "Please upload an image.",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Please provide full name.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "testimonial",
      title: "Testimonial",
      type: "text",
      description: "Please provide a testimonial.",
      validation: (Rule) => Rule.required(),
    },
  ],
};
