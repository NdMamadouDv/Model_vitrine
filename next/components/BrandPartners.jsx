import { getBrandsData } from "@/lib/fetchBrands";
import { urlFor } from "@/utils/sanityClient";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React from "react";

export default async function BrandPartners() {
  const { t, lang } = useTranslation("home");

  const BrandData = await getBrandsData();

  return (
    <section>
      <div className=" items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="text-center">
          <h2 className="text-lg font-Exo leading-6 text-black uppercase within 500 fortune companies font-semibold">
            {t("BrandTitle")}
          </h2>
        </div>

        <div className="grid  gap-0.5 gap-y-7 grid-cols-4 pt-6">
          {BrandData.map((brand) => (
            <div
              className="flex justify-center col-span-1 px-2"
              key={brand._id}
            >
              <Image
                src={urlFor(brand.brandPic).url()}
                width={500}
                height={500}
                priority={true}
                alt={`logo ${brand.brandAlt}`}
                className=" max-h-12 h-auto w-20 md:w-24 hover:cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
