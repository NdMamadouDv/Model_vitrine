import { getSection2Data } from "@/lib/fetchSection2";
import { urlFor } from "@/utils/sanityClient";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React from "react";

export default async function Section2() {
  const Section2Data = await getSection2Data();
  const { t, lang } = useTranslation("home");

  // console.log(Section2Data);
  return (
    <section className=" layout">
      <div className="py-16 space-y-6 ">
        <div className="container m-auto space-y-8 ">
          <div>
            <h2 className="h2"> {t("service2H2")} </h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2  lg:grid-cols-3  justify-items-center justify-evenly auto-rows-max">
            <div className=" p-8 py-12 sm:p-12 rounded-3xl  border border-gray-100  bg-opacity-50 shadow-2xl shadow-gray-600/40 grid">
              <div className="space-y-8">
                <div
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 :bg-gray-700"
                >
                  <span className="font-bold text-pink-600 :text-pink-300">
                    1
                  </span>
                </div>
                <div className="space-y-4 flex flex-col items-center justify-center">
                  <h3 className="h3 text-gray-800 transition text-center">
                    {t("feature-2-1Title")}
                  </h3>
                  <p className="text-gray-600 :text-gray-300">
                    {t("feature-2-1Description")}
                  </p>
                </div>
              </div>
              <Image
                src={urlFor(Section2Data.section2image).url()}
                className="w-30 h-auto mx-auto rounded-xl mt-4 self-end"
                width={800}
                height={800}
                alt="website illustration"
              />
            </div>
            <div className="p-8 py-12 sm:p-12 rounded-3xl  border border-gray-100  bg-opacity-50 shadow-2xl shadow-gray-600/40 grid">
              <div className="space-y-8">
                <div
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 "
                >
                  <span className="font-bold text-pink-600 ">2</span>
                </div>
                <div className="space-y-4 flex flex-col items-center justify-center">
                  <h3 className="h3 text-gray-800 transition text-center">
                    {t("feature-2-2Title")}
                  </h3>
                  <p className="text-gray-600 :text-gray-300">
                    {t("feature-2-2Description")}
                  </p>
                </div>
              </div>
              <Image
                src={urlFor(Section2Data.section2image2).url()}
                className="w-30 h-auto mx-auto rounded-xl mt-4 self-end"
                width={800}
                height={800}
                alt="security illustration"
              />
            </div>
            <div className="p-8 py-12 sm:p-12 rounded-3xl  border border-gray-100 :shadow-none bg-opacity-50 shadow-2xl shadow-gray-600/40 grid">
              <div className="space-y-8">
                <div
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100"
                >
                  <span className="font-bold text-purple-600 ">3</span>
                </div>
                <div className="space-y-4 flex flex-col items-center justify-center">
                  <h3 className="h3 text-gray-800 transition text-center">
                    {t("feature-2-3Title")}
                  </h3>
                  <p className="text-gray-600 ">
                    {t("feature-2-3Description")}
                  </p>
                </div>
              </div>
              <Image
                src={urlFor(Section2Data.section2image3).url()}
                className="w-30 h-auto mt-4 rounded-xl self-end justify-self-end"
                width={800}
                height={800}
                alt="speed of a website"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
