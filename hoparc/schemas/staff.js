export default {
  name: "staff",
  title: "Staff",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      description: "Please upload an image of your staff member.",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Please provide the name of the staff member.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "position",
      title: "Position",
      type: "string",
      description: "Please provide the position of the staff member.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      description: "Please provide a short description of the staff member.",
      validation: (Rule) => [
        Rule.required(),
        Rule.max(50).warning("Short descriptions are usually better!"),
      ],
    },
  ],
};