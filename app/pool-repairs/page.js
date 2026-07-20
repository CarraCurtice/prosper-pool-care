import { SITE } from "../../lib/config";
import { Faq, Photo, PhoneCta } from "../../components/parts";

export const metadata = {
  title: "Pool Repairs & Filter Cleaning in Prosper, TX",
  description:
    "Pool equipment repair and filter deep-cleans in Prosper, TX — pumps, cartridge filters, timers, freeze protection, and pad leaks. Honest repair-vs-replace advice.",
  alternates: { canonical: "/pool-repairs/" },
};

const faqItems = [
  {
    q: "How often does a cartridge filter need a deep clean?",
    a: "In Prosper, every 4–6 months for most pools — sooner for heavy-debris lots. If your filter pressure runs 8–10 PSI over its clean baseline, or your pool cleaner has lost suction, it's due.",
  },
  {
    q: "My builder-installed pump died. Repair or replace?",
    a: "If it's a single-speed pump out of warranty, replacement with a variable-speed unit usually wins on math alone — Texas summers run pumps long hours and variable-speed cuts that electric cost dramatically. If it's newer or under warranty, we'll say so and point you at the warranty path first.",
  },
  {
    q: "Do you handle freeze protection?",
    a: "Yes, and in North Texas you want it verified every fall. A hard freeze with a mis-set freeze guard is how Prosper pools crack pipes. We check settings as part of any repair visit in the fall months.",
  },
  {
    q: "Can you fix a leak at the equipment pad?",
    a: "Pad plumbing — unions, valves, pump seals, filter tank o-rings — yes, that's core work for us. In-ground shell or underground line leaks need a specialty leak-detection outfit, and we'll tell you honestly when that's what you're looking at.",
  },
];

export default function Repairs() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <h1>Pool Repairs &amp; Filter Cleans in Prosper, TX</h1>
          <p>
            Pumps, filters, timers, freeze guards, and pad leaks — diagnosed in
            plain English, priced before work starts.
          </p>
          <PhoneCta />
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>What We Work On</h2>
          <ul>
            <li>Pool pumps: seals, bearings, impellers, priming failures</li>
            <li>Variable-speed pump upgrades (with the energy math shown)</li>
            <li>Cartridge filter deep-cleans, element replacement, tank o-rings</li>
            <li>Timers, automation schedules, and freeze-protection settings</li>
            <li>Equipment-pad plumbing: valves, unions, visible leaks</li>
          </ul>
          <p>
            Prosper&rsquo;s pools were mostly built in the last 10–15 years, in
            waves that match the neighborhoods: Lakes of La Cima and Whitley
            Place pools are old enough that original equipment is wearing out;
            Windsong Ranch and Star Trail are just entering that window. If
            your pool came with the house and the house was built before 2016,
            budget for the pad — and call us before it picks its own moment in
            August.
          </p>
          <div className="photo-strip">
            <Photo note="Real photo: dirty vs. cleaned cartridge filter elements, side by side." />
            <Photo note="Real photo: new variable-speed pump installed at a Prosper pad." />
            <Photo note="Real photo: tech setting a freeze-protection controller in fall." />
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <Faq items={faqItems} />
          <PhoneCta line="Describe the symptom — we'll tell you what it probably is:" />
        </div>
      </section>
    </>
  );
}
