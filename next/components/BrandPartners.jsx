import { urlFor } from "@/utils/sanityClient";
import Image from "next/image";
import React from "react";

export default function BrandPartners({ BrandData }) {
  // console.log(BrandData);
  return (
    <section>
      <div className=" items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="text-center">
          <h2 className="text-lg font-medium leading-6 text-black uppercase within 500 fortune companies">
            A la pointe des dernières technologies du web.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-0.5 gap-y-7 md:grid-cols-4 pt-6">
          {BrandData.map((brand) => (
            <div
              className="flex justify-center col-span-1 px-2"
              key={brand._id}
            >
              <Image
                src={urlFor(brand.brandPic).url()}
                width={200}
                height={200}
                priority={true}
                alt={`logo ${brand.brandAlt}`}
                className=" max-h-12 h-auto w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
