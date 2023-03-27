import { sanity } from "@/utils/sanityClient";
import { getSection3 } from "@/lib/queries";

const sanityClient = sanity;
export async function getSection3Data() {
  const res = await sanityClient.fetch({
    query: getSection3,
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
