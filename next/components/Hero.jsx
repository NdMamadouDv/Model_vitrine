import React from "react";
import { urlFor } from "@/utils/sanityClient";
import Image from "next/image";
import Link from "next/link";

export default function Hero({ HeroData }) {
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
                    {HeroData?.h1}
                  </h1>
                  <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                    Nous sommes une équipe de professionnels de la création de
                    sites internet, passionnés par notre métier et toujours à la
                    pointe des dernières tendances du web. Nous avons une
                    expérience solide dans la création de sites internet pour
                    les petites et moyennes entreprises, les organisations à but
                    non lucratif, les institutions publiques, les particuliers,
                    etc.
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
                    En savoir plus
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
                  <p className="mt-5 text-lg font-medium leading-6 text-black">
                    Des applications personnalisables
                  </p>
                </div>
                <div className="mt-2 text-base text-gray-500">
                  Nous travaillons avec vous pour comprendre vos besoins, vos
                  objectifs et votre public cible, afin de concevoir un site
                  internet sur mesure qui reflète votre image de marque et
                  répond à vos besoins spécifiques. Nous sommes à l&apos;écoute
                  de vos idées et suggestions tout au long du processus de
                  création, pour vous offrir un site internet qui vous convient
                  parfaitement.
                </div>
              </div>
              <div>
                <div>
                  <p className="mt-5 text-lg font-medium leading-6 text-black">
                    Travail sur le référencement Google
                  </p>
                </div>
                <div className="mt-2 text-base text-gray-500">
                  Nous sommes spécialisés dans la création de sites internet
                  responsives, modernes et fonctionnels, avec une attention
                  particulière portée à l&apos;expérience utilisateur et à
                  l&apos;optimisation pour les moteurs de recherche.
                </div>
              </div>
              <div>
                <div>
                  <p className="mt-5 text-lg font-medium leading-6 text-black">
                    Un contrat sans engagement et un service 24/7.
                  </p>
                </div>
                <div className="mt-2 text-base text-gray-500">
                  Nous travaillons uniquement sous contrat avec nos clients.
                  Nous nous engageons à régler les bugs, faire de petites
                  modifications et le référencement de manière régulière.
                  Résiliez quand vous voulez.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-4">
            <p className="h2">
              Contactez-nous dès maintenant pour discuter de votre projet et
              obtenir un devis gratuit !
            </p>
            {/* <Link
              href="#contact"
              className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-primary border-2 border-primary rounded-full nline-flex hover:bg-transparent hover:border-primary hover:text-primary focus:outline-none lg:w-auto focus-visible:outline-primary text-sm focus-visible:ring-primary sm:mt-6 mt-4"
            >
              {HeroData.CTA.textCTA}
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}
