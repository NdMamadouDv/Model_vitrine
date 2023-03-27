import { urlFor } from "@/utils/sanityClient";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Section2({ Section2Data }) {
  // console.log(Section2Data);
  return (
    <section className="layout">
      <div className="py-16 space-y-6">
        <div className="container m-auto space-y-8 ">
          <div>
            <h2 className="h2"> {Section2Data.h2} </h2>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 md:-mx-8 lg:grid-cols-3 px-8 justify-items-center justify-evenly auto-rows-max">
            <div className=" p-8 py-12 sm:p-12 rounded-3xl  border border-gray-100  bg-opacity-50 shadow-2xl shadow-gray-600/10 grid">
              <div className="space-y-16">
                <div
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-50 :bg-gray-700"
                >
                  <span className="font-bold text-pink-600 :text-pink-300">
                    1
                  </span>
                </div>
                <div className="space-y-4 flex flex-col items-center justify-center">
                  <h3 className="h3 text-gray-800 transition lg:text-center">
                    Un site internet qui convertit
                  </h3>
                  <p className="text-gray-600 :text-gray-300">
                    Nous sommes des experts quand il s&apos;agit de vous créer
                    une image de marque percutante. Une bonne image de marque
                    commence par une belle page web et une strategie.
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
            <div className="p-8 py-12 sm:p-12 rounded-3xl  border border-gray-100  bg-opacity-50 shadow-2xl shadow-gray-600/10 grid">
              <div className="space-y-16">
                <div
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-50 "
                >
                  <span className="font-bold text-pink-600 :text-pink-300">
                    2
                  </span>
                </div>
                <div className="space-y-4 flex flex-col items-center justify-center">
                  <h3 className="h3 text-gray-800 transition lg:text-center">
                    Votre site securisé à 100%.
                  </h3>
                  <p className="text-gray-600 :text-gray-300">
                    Nos technologies sont sécurisées. En effet, nous utilisons
                    les bonnes pratiques du W3C, permettant de limiter les
                    attaques telles que les injections SQL, les attaques
                    cross-site scripting XSS, et autre type d&apos;attaque. Nous
                    prenons ce sujet très au sérieux.
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
            <div className="p-8 py-12 sm:p-12 rounded-3xl  border border-gray-100 :shadow-none bg-opacity-50 shadow-2xl shadow-gray-600/10 grid">
              <div className="space-y-16">
                <div
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-50"
                >
                  <span className="font-bold text-purple-600 :text-purple-300">
                    3
                  </span>
                </div>
                <div className="space-y-4 flex flex-col items-center justify-center">
                  <h3 className="h3 text-gray-800 transition lg:text-center">
                    Site web extrêmement rapide.
                  </h3>
                  <p className="text-gray-600 ">
                    Nous savons qu&apos;un site lent fait fuir les visiteurs, à
                    vrai dire, nous sommes tous pareil sur ce point. Et
                    c&apos;est pour cette raison que nous avons choisi
                    spécifiquement des technologies nous permettant
                    d&apos;accélérer le temps de chargement.
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
