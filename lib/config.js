// Central site config.

export const SITE = {
  name: "Prosper Pool Care",
  legalLine:
    "Prosper Pool Care is a locally operated pool service business serving Prosper, TX.",
  domain: "https://prosperpoolcare.com", // suggested exact-match domain
  city: "Prosper",
  state: "TX",

  // Twilio tracking number
  phone: "(972) 787-1056",
  phoneTel: "+19727871056",

  // ============================================================
  // TODO: FORM ENDPOINT — paste Formspree (or similar) POST URL.
  // ============================================================
  formEndpoint: "https://formspree.io/f/REPLACE_ME",

  hours: "Monday – Friday, 8:00 AM – 5:30 PM · Saturday by appointment",
  geo: { lat: 33.2362, lng: -96.8011 }, // Prosper, TX
  mapEmbedSrc: "https://www.google.com/maps?q=Prosper,+TX&output=embed",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/weekly-pool-service/", label: "Weekly Service" },
  { href: "/pool-repairs/", label: "Repairs & Filter Cleans" },
  { href: "/service-areas/", label: "Areas We Serve" },
  { href: "/contact/", label: "Contact" },
];
