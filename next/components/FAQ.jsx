"use client";
import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { IoChevronDownCircleOutline } from "react-icons/io5";

export default function FAQ({ FAQs }) {
  //   console.log(FAQs);
  return (
    <div className="flex flex-col items-center justify-center space-y-20 py-10">
      <h2 className="h2 capitalize">Foire aux questions</h2>
      <Accordion.Root
        className="AccordionRoot layout space-y-4"
        type="single"
        collapsible
      >
        <Accordion.Item className="AccordionItem " value="item-1">
          <AccordionTrigger>
            <p className="font-semibold text-sm md:text-lg">
              {FAQs[0].question1}
            </p>
          </AccordionTrigger>
          <AccordionContent>{FAQs[0].reponse1}</AccordionContent>
        </Accordion.Item>
        <Accordion.Item className="AccordionItem " value="item-2">
          <AccordionTrigger>
            <p className="font-semibold text-sm text-center md:text-left md:text-lg">
              {FAQs[0].question2}
            </p>
          </AccordionTrigger>
          <AccordionContent>{FAQs[0].reponse2}</AccordionContent>
        </Accordion.Item>
        <Accordion.Item className="AccordionItem " value="item-3">
          <AccordionTrigger>
            <p className="font-semibold text-sm text-center md:text-left md:text-lg">
              {FAQs[0].question3}
            </p>
          </AccordionTrigger>
          <AccordionContent>{FAQs[0].reponse3}</AccordionContent>
        </Accordion.Item>
        <Accordion.Item className="AccordionItem " value="item-4">
          <AccordionTrigger>
            <p className="font-semibold text-sm text-center md:text-left md:text-lg">
              {FAQs[0].question4}
            </p>
          </AccordionTrigger>
          <AccordionContent>{FAQs[0].reponse4}</AccordionContent>
        </Accordion.Item>
      </Accordion.Root>
      <div className="flex flex-col items-center justify-center">
        <h3 className="h3">D&apos;autre question ?</h3>
        <p className="">Veuillez discuter avec notre équipe.</p>
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
