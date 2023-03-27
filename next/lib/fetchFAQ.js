import { sanity } from "@/utils/sanityClient";
import { getFAQ } from "@/lib/queries";

const sanityClient = sanity;
export async function getFAQData() {
  const res = await sanityClient.fetch({
    query: getFAQ,
    config: {
      next: { revalidate: 10 },
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
