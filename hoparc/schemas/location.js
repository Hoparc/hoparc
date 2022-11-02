export default {
  name: "location",
  title: "Location",
  description: "Location",
  type: "document",
  fields: [
    {
      name: "address",
      title: "Address",
      type: "string",
      description:
        "Please provide the address of your location. (i.e. 338 Copper Creek Dr)",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "addresslinen",
      title: "Address Line N",
      type: "string",
      description:
        "Please provide the city, state, zip code, and country of your location. (i.e. Markham, ON L6B 1N8, Canada)",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
      description: "Please provide the phone number for this location.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "fax",
      title: "Fax",
      type: "string",
      description: "Please provide the fax for this location.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      description: "Please provide the email address for this location.",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Sunday",
      name: "sunday",
      type: "string",
      description: "Please provide the hours for Sunday.",
    },
    {
      title: "Monday",
      name: "monday",
      type: "string",
      description: "Please provide the hours for Monday.",
    },
    {
      title: "Tuesday",
      name: "tuesday",
      type: "string",
      description: "Please provide the hours for Tuesday.",
    },
    {
      title: "Wednesday",
      name: "wednesday",
      type: "string",
      description: "Please provide the hours for Wednesday.",
    },
    {
      title: "Thursday",
      name: "thursday",
      type: "string",
      description: "Please provide the hours for Thursday.",
    },
    {
      title: "Friday",
      name: "friday",
      type: "string",
      description: "Please provide the hours for Friday.",
    },
    {
      title: "Saturday",
      name: "saturday",
      type: "string",
      description: "Please provide the hours for Saturday.",
    },
  ],
};