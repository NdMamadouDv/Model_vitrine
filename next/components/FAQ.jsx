"use client";
import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import useTranslation from "next-translate/useTranslation";
// import { useParams } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";

export default function FAQ({ FAQs }) {
  const params = useSearchParams();
  const pathname = usePathname();
  console.log(pathname);
  console.log(params.has("locale"));
  console.log("params", params.get("lang"));
  const { t, lang } = useTranslation("home");

  console.log(FAQs.question1.en);
  return (
    <div className="flex flex-col items-center justify-center space-y-20 py-10">
      <h2 className="h2 capitalize"> {t("FAQH2")} </h2>
      <Accordion.Root
        className="AccordionRoot layout space-y-4"
        type="single"
        collapsible
      >
        <Accordion.Item className="AccordionItem " value="item-1">
          <AccordionTrigger>
            <p className="font-semibold text-sm md:text-lg">
              {/* {pathname == "/en"
                ? `${FAQs.question1.en}`
                : `${FAQs.question1.fr}`} */}
            </p>
          </AccordionTrigger>
          <AccordionContent></AccordionContent>
        </Accordion.Item>
        <Accordion.Item className="AccordionItem " value="item-2">
          <AccordionTrigger>
            <p className="font-semibold text-sm text-center md:text-left md:text-lg"></p>
          </AccordionTrigger>
          <AccordionContent></AccordionContent>
        </Accordion.Item>
        <Accordion.Item className="AccordionItem " value="item-3">
          <AccordionTrigger>
            <p className="font-semibold text-sm text-center md:text-left md:text-lg"></p>
          </AccordionTrigger>
          <AccordionContent>{FAQs.reponse3}</AccordionContent>
        </Accordion.Item>
        <Accordion.Item className="AccordionItem " value="item-4">
          <AccordionTrigger>
            <p className="font-semibold text-sm text-center md:text-left md:text-lg"></p>
          </AccordionTrigger>
          <AccordionContent></AccordionContent>
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
        <IoChevronDownCircleOutline className="AccordionChevron" aria-hidden />
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
