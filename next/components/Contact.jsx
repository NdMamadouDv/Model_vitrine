"use client";
import React, { useState } from "react";
import { IoCall, IoLocationSharp, IoMail } from "react-icons/io5";
import { SocialIcon } from "react-social-icons";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { getSocialsData } from "@/lib/fetchSocials";

const ContactSchema = Yup.object().shape({
  firstName: Yup.string().required("Champs requis !"),
  lastName: Yup.string().required("Champs requis !"),
  email: Yup.string()
    .email("Invalid email")
    .required("Veuillez entrer un email valide"),
  message: Yup.string()
    .min(10)
    .max(500)
    .required("Laissez nous donc votre message"),
});

export default function Contact({ SocialData }) {
  // console.log(SocialData);
  const [formValue, setFormValue] = useState({});
  const serviceID = process.env.NEXT_PUBLIC_SERVICEID;
  const templateID = process.env.NEXT_PUBLIC_TEMPLATEID;
  const publicKey = process.env.NEXT_PUBLIC_MAIL_PUBLIC_KEY;

  const handleSubmit = (formValue) => {
    console.log(formValue);
    emailjs.send(serviceID, templateID, formValue, publicKey);
  };
  return (
    <section
      className="min-h-screen bg-gradient-to-r  from-gray-700 via-gray-800 to-gray-900 text-center md:text-left mb-12 "
      id="contact"
    >
      <div className="container flex flex-col min-h-screen px-6 py-12 mx-auto">
        <h2 className="h2 text-center text-white">Contact</h2>
        <div className="flex-1 lg:flex lg:items-center  layout">
          <div className="text-white lg:w-1/2 lg:mx-6">
            <p className="max-w-xl mt-6 text-white text-lg lg:text-xl font-semibold">
              N&apos;hésitez pas à nous envoyer un message{" "}
            </p>

            <div className="mt-6 space-y-8 md:mt-8 text-white">
              <p className="flex items-center justify-center md:justify-start">
                <IoLocationSharp className="text-white" />
                <span className="mx-2 text-white truncate ">
                  Under the bright sun 🌞
                </span>
              </p>

              <p className="flex items-center justify-center md:justify-start">
                <IoCall className="text-white" />
                <span className="mx-2 text-white truncate hover:underline hover:text-primary hover:cursor-pointer">
                  +33 6 16 32 72 83
                </span>
              </p>

              <p className="flex items-center justify-center md:justify-start ">
                <IoMail className="text-white" />
                <span className="mx-2 text-white truncate hover:underline hover:text-primary hover:cursor-pointer">
                  Heyvoila.com@gmail.com
                </span>
              </p>
            </div>

            <div className="mt-6 md:mt-8">
              <h3 className="text-gray-300 h3 text-center ">Suivez nous </h3>

              <div className="flex mt-4 -mx-1.5 items-center justify-center ">
                {SocialData.map((social) => (
                  <SocialIcon
                    url={social.url}
                    key={social._id}
                    fgColor="white"
                    bgColor="transparent "
                    className="w-4 sm:w-7 h-auto hover:cursor-pointer hover:text-primary"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 lg:w-1/2 lg:mx-6">
            <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl :bg-gray-900 lg:max-w-xl">
              <h3 className="h3 text-center text-gray-700 mb-6">
                Formulaire de contact
              </h3>

              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  message: "",
                }}
                validationSchema={ContactSchema}
                onSubmit={(values) => {
                  // same shape as initial values
                  setFormValue(values);
                  handleSubmit(values);
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="grid sm:grid-cols-2 sm:space-x-4  w-full space-y-4 sm:space-y-0 ">
                      <label className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm ">
                        <Field
                          name="firstName"
                          placeholder="Johnny "
                          className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        />
                        <span className="absolute left-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                          Prenom
                        </span>
                        {errors.firstName && touched.firstName ? (
                          <div className="text-xs text-red-600">
                            {errors.firstName}
                          </div>
                        ) : null}
                      </label>
                      <label className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm ">
                        <Field
                          name="lastName"
                          placeholder="Wilkinson"
                          className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        />

                        <span className="absolute left-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                          Nom
                        </span>
                        {errors.lastName && touched.lastName ? (
                          <div className="text-xs text-red-600">
                            {errors.lastName}
                          </div>
                        ) : null}
                      </label>
                    </div>

                    <div className="flex-1 mt-6">
                      <label className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm ">
                        <Field
                          name="email"
                          type="email"
                          placeholder="Email"
                          className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        />

                        <span className="absolute left-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                          Email
                        </span>
                        {errors.email && touched.email ? (
                          <div className="text-xs text-red-600">
                            {errors.email}
                          </div>
                        ) : null}
                      </label>
                    </div>

                    <div className="w-full mt-6">
                      <label className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm ">
                        <Field
                          name="message"
                          className="peer h-16 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        />

                        <span className="absolute left-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                          Message
                        </span>
                        {errors.message && touched.message ? (
                          <div className="text-xs text-red-600">
                            {errors.message}
                          </div>
                        ) : null}
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                    >
                      Tenez nous au courant
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
