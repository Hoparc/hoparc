export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      description: "Please upload an image of your product.",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Please provide the name of this product.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
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
      name: "category",
      title: "Category",
      type: "array",
      description:
        "Please provide the category for this product or provide a new category below.",
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: "reference",
          to: [{ type: "productCategory" }],
        },
      ],
    },
    {
      name: "details",
      title: "Details",
      type: "array",
      description: "Please provide some details about the product.",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
