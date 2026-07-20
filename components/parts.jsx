import { SITE } from "../lib/config";

/** FAQ list + mirrored FAQPage JSON-LD. */
export function Faq({ items, heading = "Common Questions" }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
  return (
    <div className="faq">
      <h2>{heading}</h2>
      <dl>
        {items.map((i) => (
          <div className="faq-row" key={i.q}>
            <dt>{i.q}</dt>
            <dd>{i.a}</dd>
          </div>
        ))}
      </dl>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  );
}

/** Loud placeholder block — swap for a real local photo before launch. */
export function Photo({ note }) {
  return (
    <div className="photo-slot" role="img" aria-label={`Photo placeholder: ${note}`}>
      <strong>PHOTO PLACEHOLDER</strong>
      <span>{note}</span>
    </div>
  );
}

/** Short lead form — posts to SITE.formEndpoint (wire before launch). */
export function LeadForm({ compact = false }) {
  return (
    <form action={SITE.formEndpoint} method="POST" className="lead-form">
      <div className={compact ? "lead-row" : ""}>
        <label>
          Name
          <input type="text" name="name" required autoComplete="name" />
        </label>
        <label>
          Phone
          <input type="tel" name="phone" required autoComplete="tel" />
        </label>
      </div>
      <label>
        What does your pool need?
        <textarea
          name="message"
          rows={compact ? 2 : 4}
          placeholder="e.g. weekly service quote for a pool in Star Trail"
        />
      </label>
      <button type="submit" className="button">
        Request a Call Back
      </button>
    </form>
  );
}

export function PhoneCta({ line = "Fastest answer: call us." }) {
  return (
    <p className="phone-cta">
      {line}{" "}
      <a href={`tel:${SITE.phoneTel}`} className="phone-link">
        {SITE.phone}
      </a>
    </p>
  );
}
