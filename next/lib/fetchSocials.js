import { sanity } from "@/utils/sanityClient";
import { getSocials } from "@/lib/queries";

const sanityClient = sanity;
export async function getSocialsData() {
  const res = await sanityClient.fetch({
    query: getSocials,
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
