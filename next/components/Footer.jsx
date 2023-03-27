import { getSocialsData } from "@/lib/fetchSocials";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { FiMail } from "react-icons/fi";
export default async function Footer() {
  const socials = await getSocialsData();
  // console.log(socials);
  return (
    <footer className="w-full bg-secondary-focus py-16 ">
      <div className="md:px-12 lg:px-28 flex flex-col items-center justify-center layout">
        <div className="container m-auto space-y-6 text-white ">
          <Link
            href="/"
            className=" font-semibold normal-case text-xl sm:text-3xl text-primary-focus"
          >
            My brand
          </Link>
          <ul
            role="list"
            className="flex flex-col items-center justify-center gap-4 py-4 sm:flex-row sm:gap-8 text-white"
          >
            <li role="listitem">
              <Link
                href="/#hero"
                className=" hover:text-primary text-white md:text-lg "
              >
                Home
              </Link>
            </li>
            <li role="listitem">
              <Link
                href="#services"
                className="hover:text-primary text-white md:text-lg "
              >
                Services
              </Link>
            </li>

            <li role="listitem">
              <Link
                href="#"
                className="hover:text-primary text-white md:text-lg "
              >
                A propos de nous
              </Link>
            </li>
          </ul>
          <div className="text-center self-end md:pt-20 pt-12">
            <div className="m-auto flex w-max items-center justify-between space-x-4">
              <Link href="mailto:heyvoila.com@gmail.com" aria-label="send mail">
                <span className="">
                  <FiMail className="h-auto w-7 hover:cursor-pointer" />
                </span>
              </Link>
              {socials?.map((social) => (
                <SocialIcon
                  url={social.url}
                  key={social._id}
                  fgColor="white"
                  bgColor="transparent "
                  className="w-2  h-auto hover:cursor-pointer hover:text-primary"
                />
              ))}
            </div>
            <span className="text-sm tracking-wide ">
              Copyright © Indev <span id="year">2023</span> | All right reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
