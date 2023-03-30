"use client";
import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import useTranslation from "next-translate/useTranslation";
import { useSearchParams } from "next/navigation";

// async function getData() {
//   const res = await getFAQData();
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.
//   console.log("fetching");
//   return res;
// }
// const dataPromise = getData();

export default function FAQ({ FAQs }) {
  // const FAQs = use(dataPromise);

  const params = useSearchParams();
  const locale = params.get("lang");
  const { t, lang } = useTranslation("home");

  return (
    <div className="layout flex flex-col items-center justify-center space-y-20 py-10">
      <h2 className="h2 capitalize"> {t("FAQH2")} </h2>
      <Accordion.Root
        className="AccordionRoot layout space-y-4"
        type="single"
        collapsible
      >
        <Accordion.Item className="AccordionItem " value="item-1">
          <AccordionTrigger>
            <span className="font-semibold text-sm md:text-lg text-left">
              {locale === "en"
                ? `${FAQs.question1.en}`
                : `${FAQs.question1.fr}`}
            </span>
          </AccordionTrigger>
          <AccordionContent>
            {locale === "en" ? `${FAQs.reponse1.en}` : `${FAQs.reponse1.fr}`}
          </AccordionContent>
        </Accordion.Item>
        <Accordion.Item className="AccordionItem " value="item-2">
          <AccordionTrigger>
            <span className="font-semibold text-sm md:text-lg text-left">
              {locale === "en"
                ? `${FAQs.question2.en}`
                : `${FAQs.question2.fr}`}
            </span>
          </AccordionTrigger>
          <AccordionContent>
            {locale === "en" ? `${FAQs.reponse2.en}` : `${FAQs.reponse2.fr}`}
          </AccordionContent>
        </Accordion.Item>
        <Accordion.Item className="AccordionItem " value="item-3">
          <AccordionTrigger>
            <span className="font-semibold text-sm md:text-lg text-left">
              {locale === "en"
                ? `${FAQs.question3.en}`
                : `${FAQs.question3.fr}`}
            </span>
          </AccordionTrigger>
          <AccordionContent>
            {" "}
            {locale === "en" ? `${FAQs.reponse3.en}` : `${FAQs.reponse3.fr}`}
          </AccordionContent>
        </Accordion.Item>
        <Accordion.Item className="AccordionItem " value="item-4">
          <AccordionTrigger>
            <span className="font-semibold text-sm md:text-lg text-left">
              {locale === "en"
                ? `${FAQs.question4.en}`
                : `${FAQs.question4.fr}`}
            </span>
          </AccordionTrigger>
          <AccordionContent>
            {locale === "en" ? `${FAQs.reponse4.en}` : `${FAQs.reponse4.fr}`}
          </AccordionContent>
        </Accordion.Item>
      </Accordion.Root>
      <div className="flex flex-col items-center justify-center">
        <h3 className="h3">{t("FAQH3")}</h3>
        <p className="">{t("FAQDiscuss")}</p>
      </div>
    </div>
  );
}
const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className="AccordionTrigger"
        {...props}
        ref={forwardedRef}
      >
        {children}
        <IoChevronDownCircleOutline
          className="AccordionChevron chevron"
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

AccordionTrigger.displayName = "AccordionTrigger";
const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className="AccordionContent"
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  )
);

AccordionContent.displayName = "AccordionContent";
