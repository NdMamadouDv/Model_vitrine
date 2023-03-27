import { sanity } from "@/utils/sanityClient";
import { getHero } from "@/lib/queries";

const sanityClient = sanity;
export async function getHeroData() {
  const res = await sanityClient.fetch({
    query: getHero,
    config: {
      next: { revalidate: 60 },
    },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  // Recommendation: handle errors
  if (!res) {
    console.log("error");
  }
  return res;
}
