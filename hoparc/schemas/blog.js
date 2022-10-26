export default {
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      description: "Please upload an image.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Please provide the title of the blog.",
    },
    {
      name: "slug",
      title: "Unique URL",
      type: "slug",
      description:
        "Your unique url will be created from the name field above. Please click on the generate button.",
      options: {
        source: "title",
        maxLength: 90,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "date",
      title: "Date",
      type: "date",
      description: "Please provide the date this blog was written.",
      options: {
        dateFormat: "MM/DD/YYYY",
        calendarTodayLabel: "Today",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "array",
      description:
        "Please provide the category for this blog or provide a new category below.",
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: "reference",
          to: [{ type: "blogCategory" }],
        },
      ],
    },
    {
      name: "text",
      title: "Text",
      type: "array",
      description: "Please provide your blog here.",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
