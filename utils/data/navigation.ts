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
      { id: 2, name: "Physiotherapy", href: "/" },
      { id: 3, name: "Pelvic Health Physiotherapy", href: "/" },
      { id: 4, name: "Massage Therapy", href: "/" },
      { id: 5, name: "Thai Massage", href: "/" },
      { id: 6, name: "Chiropractor", href: "/" },
      { id: 7, name: "Acupuncture", href: "/" },
      { id: 8, name: "Hot Stone Physiotherapy", href: "/" },
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
