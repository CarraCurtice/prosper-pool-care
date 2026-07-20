import { SITE } from "../lib/config";

export const dynamic = "force-static";

const PATHS = [
  "/",
  "/weekly-pool-service/",
  "/pool-repairs/",
  "/service-areas/",
  "/contact/",
];

export default function sitemap() {
  return PATHS.map((p) => ({
    url: `${SITE.domain}${p}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: p === "/" ? 1 : 0.8,
  }));
}
