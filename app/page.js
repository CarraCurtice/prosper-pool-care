import Link from "next/link";
import { SITE } from "../lib/config";
import { Faq, LeadForm, PhoneCta } from "../components/parts";

export const metadata = {
  title: "Pool Cleaning in Prosper, TX | Weekly Service & Repairs",
  description:
    "Straightforward weekly pool service and repairs in Prosper, TX. Serving Windsong Ranch, Star Trail, Whitley Place, Lakes of La Cima and the rest of town. Call for a quote.",
  alternates: { canonical: "/" },
};

const faqItems = [
  {
    q: "What decides the price of weekly pool service?",
    a: "Four things: pool size, how much debris your lot produces, the state of your equipment, and whether chemicals are bundled. A covered pool on a bare lot in Star Trail costs less to keep clean than a pool under Whitley Place's mature oaks. You get one flat monthly number before we start.",
  },
  {
    q: "Is there a contract?",
    a: "No. Service is month to month. If you're not happy, you cancel. That's the whole policy.",
  },
  {
    q: "I live in Windsong Ranch, and the lagoon is maintained for us. Why do I need pool service?",
    a: "The Crystal Lagoon is community-run, but your backyard pool is entirely yours: chemistry, filtration, equipment, all of it. Most of our Windsong customers use the lagoon for the scene and their own pool daily, and it's the one that needs a weekly visit.",
  },
  {
    q: "What kind of filter do I have, and does it matter?",
    a: "Most Prosper builds since 2015 use cartridge filters; some custom pools run DE or sand. It matters because cleaning schedules and costs differ. Tell us your neighborhood and builder and we can usually guess before we arrive.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <h1>Pool Cleaning in Prosper, TX</h1>
          <p>
            Weekly service and repairs for backyard pools across Prosper. No
            contracts, no upsell scripts. Just a clean pool and a flat monthly
            price.
          </p>
          <PhoneCta line="Get a quote in one call:" />
          <ul className="hero-points">
            <li>Prosper-only route</li>
            <li>Month-to-month, cancel anytime</li>
            <li>Flat pricing quoted up front</li>
          </ul>
          <div className="hero-form">
            <p className="hero-form-title">Or request a call back:</p>
            <LeadForm compact />
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>Two Services. That&rsquo;s It.</h2>
          <ul className="svc-list">
            <li>
              <h3>
                <Link href="/weekly-pool-service/">Weekly Pool Service</Link>
              </h3>
              <p>
                Skim, brush, vacuum, baskets, chemistry, every week on the
                same day, with a report after each visit.
              </p>
            </li>
            <li>
              <h3>
                <Link href="/pool-repairs/">Repairs &amp; Filter Cleans</Link>
              </h3>
              <p>
                Pumps, filters, timers, and leaks at the pad. Filter deep-cleans
                on a schedule or on demand.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <h2>Built for Prosper Pools</h2>
          <p>
            Prosper&rsquo;s pool stock is young but working hard. Most were
            built alongside the home in the last decade, which means builder-
            grade equipment now aging out of warranty in Windsong Ranch and
            Star Trail, heavy bather loads all summer, and North Texas water
            hard enough to scale a tile line in two seasons. Down in Whitley
            Place and Gentle Creek, mature trees add a debris load the newer
            neighborhoods never see.
          </p>
          <p>
            We keep the route inside Prosper, so your service day holds and a
            July breakdown gets same-week attention.{" "}
            <Link href="/service-areas/">See every neighborhood we cover.</Link>
          </p>
          <div className="photo-strip">
            <img
              src="/images/pool-tech-service-visit.jpg"
              alt="Pool technician skimming a backyard pool with a robotic cleaner on the deck"
              width="1200"
              height="800"
              loading="lazy"
            />
            <img
              src="/images/pump-filter-equipment.jpg"
              alt="Cartridge filter element and brush on an equipment pad next to a pool pump"
              width="1200"
              height="800"
              loading="lazy"
            />
            <img
              src="/images/skimming-pool.jpg"
              alt="Skimmer net pulling leaves from clear blue pool water"
              width="1200"
              height="800"
              loading="lazy"
            />
            <img
              src="/images/green-algae-pool-before-cleaning.jpg"
              alt="Neglected backyard pool with cloudy green algae-filled water before a one-time cleanup"
              width="1600"
              height="1067"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Faq items={faqItems} />
        </div>
      </section>

      <section className="band">
        <div className="wrap cols-2">
          <div>
            <h2>Prefer to Type?</h2>
            <p>
              Send the form and we&rsquo;ll call you back the same business
              day. Or skip the form: <a href={`tel:${SITE.phoneTel}`}>{SITE.phone}</a>.
            </p>
            <LeadForm compact />
          </div>
          <iframe
            src={SITE.mapEmbedSrc}
            className="map-frame"
            title="Map of Prosper, TX"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
