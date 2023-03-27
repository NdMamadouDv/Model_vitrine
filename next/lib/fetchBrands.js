import { sanity } from "@/utils/sanityClient";
import { getBrands } from "@/lib/queries";

const sanityClient = sanity;
export async function getBrandsData() {
  const res = await sanityClient.fetch({
    query: getBrands,
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
