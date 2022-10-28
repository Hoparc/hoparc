export default {
  name: "service",
  title: "Service",
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
      description: "Please provide the name of this service.",
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
    {
      title: "Description",
      name: "description",
      type: "text",
      description:
        "Please provide a short description of your service. (This will be shown on the landing page).",
    },
    {
      name: "details",
      title: "Details",
      type: "array",
      description:
        "Please provide the details of the service here. (This will be shown on the page for the service itself).",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
