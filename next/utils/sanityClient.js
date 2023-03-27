import createImageUrlBuilder from "@sanity/image-url";
import SanityClient from "next-sanity-client";
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.NEXT_PUBLIC_SANITY_TOKEN;

export const config = {
  projectId,
  dataset,
  useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: "2022-01-12", // use current date (YYYY-MM-DD) to target the latest API version
  token, // Only if you want to update content with the client
};

export const sanity = new SanityClient(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);
