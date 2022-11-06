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
      { id: 2, name: "Physiotherapy", href: "/service/physiotherapy" },
      {
        id: 3,
        name: "Pelvic Health Physiotherapy",
        href: "/service/pelvic-health-physiotherapy",
      },
      { id: 4, name: "Massage Therapy", href: "/service/massage-therapy" },
      { id: 5, name: "Thai Massage", href: "/service/thai-massage" },
      { id: 6, name: "Chiropractor", href: "/service/chiropractor" },
      { id: 7, name: "Acupuncture", href: "/service/acupuncture" },
      {
        id: 8,
        name: "Hot Stone Physiotherapy",
        href: "/service/hot-stone-physiotherapy",
      },
    ],
  },
  {
    id: 4,
    name: "Products",
    href: "/products",
    current: "false",
  },
  {
    id: 5,
    name: "Blogs",
    href: "/blogs",
    current: "false",
  },
  {
    id: 6,
    name: "Contact",
    href: "/contact",
    current: "false",
  },
  {
    id: 7,
    name: "Request Appointment",
    href: "/request-appointment",
    current: "false",
  },
];
