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
      { id: 2, name: "Physiotherapy", href: "/services/" },
      {
        id: 3,
        name: "Pelvic Health Physiotherapy",
        href: "/pelvic-health-physiotherapy",
      },
      { id: 4, name: "Massage Therapy", href: "/services/" },
      { id: 5, name: "Thai Massage", href: "/services/" },
      { id: 6, name: "Chiropractor", href: "/services/" },
      { id: 7, name: "Acupuncture", href: "/services/" },
      {
        id: 8,
        name: "Hot Stone Physiotherapy",
        href: "/services/hot-stone-physiotherapy",
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
    href: "/blogs",
    current: "false",
  },
  {
    id: 5,
    name: "Contact",
    href: "/contact",
    current: "false",
  },
];
