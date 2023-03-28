import React from "react";
import { urlFor } from "@/utils/sanityClient";
import Image from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { getHeroData } from "@/lib/fetchHero";

export default async function Hero() {
  const { t, lang } = useTranslation("home");
  const HeroData = await getHeroData();
  // console.log(HeroData);

  return (
    <section className="layout pt-20">
      <div className="relative items-center w-full  mx-auto md:px-12 ">
        <div className="relative flex-col items-start m-auto align-middle">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
            <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
              <div className="max-w-xl text-center lg:text-left">
                <div>
                  <h1 className="text-2xl font-semibold tracking-tight text-black sm:text-4xl">
                    {t("heroH1")}
                  </h1>
                  <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                    {t("heroDescription")}
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
                  <Link
                    href={HeroData.CTA.link}
                    className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-primary border-2 border-primary rounded-full nline-flex hover:bg-transparent hover:border-primary hover:text-primary focus:outline-none lg:w-auto focus-visible:outline-primary text-sm focus-visible:ring-primary"
                  >
                    {HeroData.CTA.textCTA}
                  </Link>
                  <Link
                    href="#features"
                    scroll={false}
                    className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                  >
                    {t("enSavoirPlus")}
                    <span aria-hidden="true" className="ml-2">
                      {" "}
                      →{" "}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="order-first block w-full mt-12 aspect-square lg:mt-0 ">
              <Image
                src={urlFor(HeroData.heroImage)?.url()}
                width={800}
                height={800}
                priority={true}
                alt={HeroData.heroImageAlt}
                className=" rounded-tr-[9rem] rounded-bl-[9rem] h-auto w-auto"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="py-6 mx-auto lg:max-w-7xl">
            <div className="grid grid-cols-1 gap-6 space-y-0 text-center lg:gap-24 lg:grid-cols-3 lg:text-left items-stretch justify-items-stretch">
              <div>
                <div>
                  <h2 className="mt-5 text-lg font-medium leading-6 text-black">
                    {t("heroH2-1")}
                  </h2>
                </div>
                <div className="mt-2 text-base text-gray-500">
                  {t("heroH2-1Description")}
                </div>
              </div>
              <div>
                <div>
                  <h2 className="mt-5 text-lg font-medium leading-6 text-black">
                    {t("heroH2-2")}
                  </h2>
                </div>
                <div className="mt-2 text-base text-gray-500">
                  {t("heroH2-2Description")}
                </div>
              </div>
              <div>
                <div>
                  <h2 className="mt-5 text-lg font-medium leading-6 text-black">
                    {t("heroH2-3")}{" "}
                  </h2>
                </div>
                <div className="mt-2 text-base text-gray-500">
                  {t("heroH2-3Description")}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-4">
            <p className="h2 text-center">{t("heroContact")}</p>
            <Link
              href="#contact"
              className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-primary border-2 border-primary rounded-full nline-flex hover:bg-transparent hover:border-primary hover:text-primary focus:outline-none lg:w-auto focus-visible:outline-primary text-sm focus-visible:ring-primary sm:mt-6 mt-4"
            >
              {HeroData.CTA.textCTA}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
