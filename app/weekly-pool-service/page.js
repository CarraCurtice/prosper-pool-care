import { SITE } from "../../lib/config";
import { Faq, Photo, PhoneCta } from "../../components/parts";

export const metadata = {
  title: "Weekly Pool Service in Prosper, TX",
  description:
    "Weekly pool maintenance in Prosper, TX — same day every week, full chemistry, visit reports. Flat monthly pricing for Windsong Ranch, Star Trail, Whitley Place and all of Prosper.",
  alternates: { canonical: "/weekly-pool-service/" },
};

const faqItems = [
  {
    q: "What happens on each weekly visit?",
    a: "Surface skim, wall and step brushing, vacuuming as needed, skimmer and pump baskets emptied, full water test, chemicals balanced, and a visual equipment check. You get a report when we leave.",
  },
  {
    q: "Same tech every week?",
    a: "That's the goal and the norm. A tech who knows your pool spots changes — a pressure gauge creeping up, a pump getting louder — before they become repair calls.",
  },
  {
    q: "Do you service pools with automation systems?",
    a: "Yes. Many newer Prosper builds run app-controlled automation. We work with it, not around it — schedules, freeze protection, and cleaning cycles get set correctly rather than fought weekly.",
  },
  {
    q: "When does service start after I sign up?",
    a: "Usually within a week. First visit is longer: full chemistry workup, equipment inspection, and a baseline so every later visit has something to measure against.",
  },
];

export default function WeeklyService() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <h1>Weekly Pool Service in Prosper, TX</h1>
          <p>
            One flat monthly price. Same day every week. A report after every
            visit so you know what was done without walking out back.
          </p>
          <PhoneCta />
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>The Weekly Routine</h2>
          <ol>
            <li>Skim the surface and clear floating debris</li>
            <li>Brush walls, steps, and the tile line</li>
            <li>Vacuum the floor when conditions call for it</li>
            <li>Empty skimmer and pump baskets</li>
            <li>Test and balance sanitizer, pH, alkalinity</li>
            <li>Check the equipment pad — pressure, sound, leaks</li>
            <li>Send your visit report</li>
          </ol>
          <p>
            The equipment check matters more than it sounds. Prosper&rsquo;s
            housing boom means thousands of pools hit the 8–12 year mark at
            the same time — the age when builder-installed pumps and filters
            start failing. A weekly set of eyes catches most of it early, when
            the fix is a seal instead of a motor.
          </p>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <h2>Prosper Specifics We Plan Around</h2>
          <p>
            <strong>Hard fill water.</strong> Calcium creeps up all season;
            we track it and tell you before scale becomes a bead-blasting job.
          </p>
          <p>
            <strong>Tree load varies wildly by neighborhood.</strong> Whitley
            Place and Gentle Creek pools live under real canopy; Star Trail
            and newer Windsong phases barely see a leaf. Your quote reflects
            your actual lot, not a town-wide average.
          </p>
          <p>
            <strong>Summer bather load.</strong> When Prosper ISD lets out,
            chlorine demand roughly doubles in family pools. We adjust dosing
            in June rather than reacting to cloudy water in July.
          </p>
          <div className="photo-strip">
            <Photo note="Real photo: visit report on a phone screen next to the pool it describes." />
            <Photo note="Real photo: tech testing water poolside at a Prosper home." />
            <Photo note="Real photo: equipment pad check — hand on filter gauge." />
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Faq items={faqItems} />
          <PhoneCta line="Ready for a set-and-forget pool?" />
        </div>
      </section>
    </>
  );
}
