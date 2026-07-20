import { SITE } from "../../lib/config";
import { Faq, PhoneCta } from "../../components/parts";

export const metadata = {
  title: "Prosper, TX Pool Service Areas",
  description:
    "Pool service across Prosper, TX: Windsong Ranch, Star Trail, Whitley Place, Lakes of La Cima, Gentle Creek Estates, Whispering Farms, Legacy Gardens, and Brookhollow.",
  alternates: { canonical: "/service-areas/" },
};

const areas = [
  {
    name: "Windsong Ranch",
    note: "West Prosper, off US 380. Home of the 5-acre Crystal Lagoon — which the community maintains, while your backyard pool is on you. Mostly 2015+ builds with automation systems we work with daily.",
  },
  {
    name: "Star Trail",
    note: "Off Prosper Trail west of Preston Road. Newer luxury builds, big pools, equipment still young — our work here is mostly weekly service and warranty-aware tune-ups.",
  },
  {
    name: "Whitley Place",
    note: "Wooded lots along the Wilson Creek corridor, built 2008–2017. The mature canopy is beautiful and relentless — highest debris loads in town, and original equipment now hitting replacement age.",
  },
  {
    name: "Lakes of La Cima",
    note: "One of Prosper's established master-planned communities, east of Preston. Pools here are among the town's older stock — filter rebuilds and repair-vs-replace calls are routine.",
  },
  {
    name: "Gentle Creek Estates",
    note: "Larger custom lots around the golf course on the east side. Custom pools with varied equipment setups — DE filters, water features, in-floor cleaning — that reward a tech who reads the pad before touching it.",
  },
  {
    name: "Whispering Farms",
    note: "Acreage-style lots, custom homes, custom pools. Longer runs from pad to pool and bigger volumes than the production neighborhoods.",
  },
  {
    name: "Legacy Gardens & Brookhollow",
    note: "Growing west-side and south-side communities. New pools, new owners, and a lot of first-time pool chemistry questions — we're happy to teach while we service.",
  },
  {
    name: "Downtown Prosper & established streets",
    note: "The older blocks off Broadway Street have some of Prosper's longest-serving pools. Different era of construction, different maintenance needs — we know the difference.",
  },
];

const faqItems = [
  {
    q: "Is all of Prosper in your service area?",
    a: "Yes — town limits and the immediate surroundings. If your Prosper address isn't in a neighborhood listed here, you're still covered.",
  },
  {
    q: "What about just outside Prosper?",
    a: "The route stays tight so service days hold. For addresses right on the edge — the Celina side of Frontier Parkway, or west toward the tollway — call and we'll tell you straight whether it fits.",
  },
];

export default function ServiceAreas() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <h1>Neighborhoods We Serve in Prosper, TX</h1>
          <p>
            The whole route lives inside Prosper. Here&rsquo;s where, and what
            pools in each part of town actually need.
          </p>
          <PhoneCta />
        </div>
      </section>

      <section>
        <div className="wrap">
          <table className="area-table">
            <tbody>
              {areas.map((a) => (
                <tr key={a.name}>
                  <th scope="row">{a.name}</th>
                  <td>{a.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="band">
        <div className="wrap cols-2">
          <div>
            <h2>One Town, On Purpose</h2>
            <p>
              A tight route is the whole trick: service days that never slip,
              storm-week catch-ups inside 48 hours, and a tech who already
              knows whether your neighborhood runs cartridge or DE before the
              truck stops.
            </p>
          </div>
          <iframe
            src={SITE.mapEmbedSrc}
            className="map-frame"
            title="Map of Prosper, TX"
            loading="lazy"
          />
        </div>
      </section>

      <section>
        <div className="wrap">
          <Faq items={faqItems} heading="Coverage Questions" />
        </div>
      </section>
    </>
  );
}
