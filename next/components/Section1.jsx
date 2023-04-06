import { urlFor } from "@/utils/sanityClient";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiComputerLine } from "react-icons/ri";
import { BsPencil } from "react-icons/bs";
import { SlSpeedometer } from "react-icons/sl";
import { TbPigMoney } from "react-icons/tb";
import { getSection1Data } from "@/lib/fetchSection1";
import useTranslation from "next-translate/useTranslation";

export default async function Section() {
  const Section1Data = await getSection1Data();
  const { t, lang } = useTranslation("home");

  return (
    <section className="layout ">
      <div className="container  py-10 mx-auto ">
        <h2 className="h2 ">{t("serviceH2")}</h2>

        <div className="mt-2">
          <span className="inline-block w-40 h-1 bg-primary rounded-full"></span>
          <span className="inline-block w-3 h-1 ml-1 bg-primary rounded-full"></span>
          <span className="inline-block w-1 h-1 ml-1 bg-primary rounded-full"></span>
        </div>

        <div className="mt-8 xl:mt-12 lg:flex lg:items-center lg:justify-center">
          <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
            <div className="space-y-3">
              <span className="inline-block p-3 text-primary bg-blue-100 rounded-xl ">
                <RiComputerLine className="" />
              </span>

              <h3 className="text-xl font-semibold text-gray-700  ">
                {t("feature1Title")}
              </h3>

              <p className="">{t("feature1Description")}</p>
            </div>

            <div className="space-y-3">
              <span className="inline-block p-3 text-primary bg-blue-100 rounded-xl ">
                <BsPencil />
              </span>

              <h3 className="text-xl font-semibold text-gray-700  ">
                {t("feature2Title")}
              </h3>

              <p className="text-gray-500 ">{t("feature2Description")}</p>
            </div>

            <div className="space-y-3">
              <span className="inline-block p-3 text-primary bg-blue-100 rounded-xl ">
                <SlSpeedometer />
              </span>

              <h3 className="text-xl font-semibold text-gray-700  ">
                {t("feature3Title")}
              </h3>

              <p className="text-gray-500 ">{t("feature3Description")}</p>
            </div>

            <div className="space-y-3">
              <span className="inline-block p-3 text-primary bg-blue-100 rounded-xl ">
                <TbPigMoney className="" />
              </span>

              <h3 className="text-xl font-semibold text-gray-700  e">
                {t("feature4Title")}
              </h3>

              <p className="text-gray-500 ">{t("feature4Description")}</p>
            </div>
            <Link
              target="_blank"
              href={Section1Data.CTA.link}
              className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-primary border-2 border-primary rounded-full nline-flex hover:bg-transparent hover:border-primary hover:text-primary focus:outline-none lg:w-auto focus-visible:outline-primary text-sm focus-visible:ring-primary"
            >
              {Section1Data.CTA.textCTA}
            </Link>
          </div>

          <div className="hidden lg:flex lg:w-1/3 lg:justify-center ml-10 ">
            <Image
              src={urlFor(Section1Data.section1image)?.url()}
              width={800}
              height={800}
              priority={true}
              alt="femme qui mord son crayon"
              className="h-[20rem] w-[20rem] xl:w-[32rem] xl:h-[24rem]  flex-shrink-0 object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
