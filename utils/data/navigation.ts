export default [
  {
    id: 1,
    name: "Home",
    href: "/",
    current: true,
  },
  {
    id: 2,
    name: "About Us",
    href: "/about-us",
    current: "false",
  },
  {
    id: 3,
    name: "Services",
    href: "/services",
    current: "false",
    dropdownOptions: [
      { id: 2, name: "Physiotherapy", href: "/physiotherapy" },
      {
        id: 3,
        name: "Pelvic Health Physiotherapy",
        href: "/pelvic-health-physiotherapy",
      },
      { id: 4, name: "Massage Therapy", href: "/massage-therapy" },
      { id: 5, name: "Thai Massage", href: "/thai-massage" },
      { id: 6, name: "Chiropractor", href: "/chiropractor" },
      { id: 7, name: "Acupuncture", href: "/acupuncture" },
      {
        id: 8,
        name: "Hot Stone Physiotherapy",
        href: "/hot-stone-physiotherapy",
      },
    ],
  },
  {
    id: 4,
    name: "Product",
    href: "/product",
    current: "false",
  },
  {
    id: 5,
    name: "Blog",
    href: "/blog",
    current: "false",
  },
  {
    id: 5,
    name: "Contact",
    href: "/contact",
    current: "false",
  },
];
