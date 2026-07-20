import "./globals.css";
import { Header, Footer } from "../components/SiteChrome";
import { SITE } from "../lib/config";

export const metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: `${SITE.name} — Pool Service in Prosper, TX`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Weekly pool service, repairs, and filter cleans for Prosper, TX homes — Windsong Ranch, Star Trail, Whitley Place, Lakes of La Cima, and beyond.",
  openGraph: { siteName: SITE.name, locale: "en_US", type: "website" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  description: "Residential pool service and repair for Prosper, Texas.",
  url: SITE.domain,
  telephone: SITE.phoneTel, // TODO: TWILIO TRACKING NUMBER (set in lib/config.js)
  areaServed: {
    "@type": "City",
    name: "Prosper",
    containedInPlace: { "@type": "State", name: "Texas" },
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.lat,
    longitude: SITE.geo.lng,
  },
  openingHours: "Mo-Fr 08:00-17:30",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
