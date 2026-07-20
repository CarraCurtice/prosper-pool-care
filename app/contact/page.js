import { SITE } from "../../lib/config";
import { Faq, LeadForm } from "../../components/parts";

export const metadata = {
  title: "Contact Prosper Pool Care",
  description:
    "Call or message Prosper Pool Care for a pool service quote in Prosper, TX. Same-business-day response, Monday through Friday.",
  alternates: { canonical: "/contact/" },
};

const faqItems = [
  {
    q: "What's the fastest way to get a quote?",
    a: "Call during business hours. Weekly service quotes usually take one conversation; repair quotes are fastest with a photo of the equipment pad texted after the call.",
  },
  {
    q: "Do you quote from photos?",
    a: "Often, yes. A clear photo of the pool and one of the equipment pad answers most of what we need for cleanups and common repairs.",
  },
];

export default function Contact() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <h1>Contact Prosper Pool Care</h1>
          <p>
            <a href={`tel:${SITE.phoneTel}`} className="phone-link">
              {SITE.phone}
            </a>
            <br />
            {SITE.hours}
          </p>
        </div>
      </section>

      <section>
        <div className="wrap cols-2">
          <div>
            <h2>Request a Call Back</h2>
            <LeadForm />
          </div>
          <div>
            <h2>Service Area</h2>
            <p>
              Prosper, TX — Windsong Ranch, Star Trail, Whitley Place, Lakes of
              La Cima, Gentle Creek Estates, Whispering Farms, Legacy Gardens,
              Brookhollow, and the established streets around downtown.
            </p>
            <iframe
              src={SITE.mapEmbedSrc}
              className="map-frame"
              title="Map of Prosper, TX service area"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <Faq items={faqItems} heading="Before You Reach Out" />
        </div>
      </section>
    </>
  );
}
