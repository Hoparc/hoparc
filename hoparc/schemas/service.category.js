export default {
  name: "serviceCategory",
  title: "Service Category",
  description: "Service category",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Please provide a new Service category.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Unique URL",
      type: "slug",
      description:
        "Your unique url will be created from the name field above. Please click on the generate button.",
      options: {
        source: "name",
        maxLength: 90,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
