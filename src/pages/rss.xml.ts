import rss from "@astrojs/rss";
import { SITE_CONFIG } from "@/config";

export async function GET() {
  return rss({
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.desc,
    site: SITE_CONFIG.website,
    items: [],
  });
}
