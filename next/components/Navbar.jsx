"use client";
import SwitchTheme from "./SwitchTheme";
import { GiHamburgerMenu } from "react-icons/gi";
import useToggle from "@/hook/useToggle";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { useEffect } from "react";
function Navbar() {
  const [toggle, setToggle] = useToggle(false);

  // console.log(toggle);

  return (
    <div className=" w-full sticky top-0 z-20 bg-white drop-shadow-md	">
      <nav className="navbar bg-transparent layout py-4 z-200 ">
        <div className="navbar-start">
          <Link
            href="/"
            className="btn btn-ghost normal-case text-xl text-primary"
          >
            My brand
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex text-white">
          <ul className="menu menu-horizontal   space-x-4">
            <li>
              <Link href="#" className="">
                Home
              </Link>
            </li>

            <li>
              <Link href="#services" className="">
                Services
              </Link>
            </li>
            <li>
              <Link href="#contact" className="">
                Contact
              </Link>
            </li>
            {/* <li>
              <a className="btn btn-primary rounded-md">Contact us</a>
            </li> */}
          </ul>
        </div>
        <div className="navbar-end space-x-2">
          <Link href="#contact" className="btn btn-primary btn-sm rounded-md">
            Contact
          </Link>
          {/* Open nav */}
          <div className="lg:hidden flex items-center justify-center ">
            <span className="btn btn-ghost rounded-md">
              <GiHamburgerMenu
                className="h-auto w-10 hover:cursor-pointer "
                onClick={setToggle}
              />
            </span>
          </div>
        </div>
        {toggle && (
          <div
            className=" fixed bg-black h-screen top-0 left-0 w-full z-20"
            id="nav-mobile"
          >
            <div className="flex flex-col items-center justify-center w-full h-full ">
              <h1 className=" absolute top-4 left-8 text-primary">My brand</h1>
              <button
                onClick={setToggle}
                className="text-white absolute top-4 right-4"
              >
                <span className="">
                  <MdOutlineClose className="h-auto w-10 " />
                </span>
              </button>
              <ul className="space-y-6">
                <li className="text-white text-center hover:cursor-pointer hover:underline hover:text-primary">
                  <Link href="/">Home</Link>
                </li>
                <li className="text-white text-center hover:cursor-pointer hover:underline hover:text-primary">
                  <Link href="/">Gallery</Link>
                </li>
                <li className="text-white text-center hover:cursor-pointer hover:underline hover:text-primary">
                  <Link href="/">About us</Link>
                </li>
              </ul>
              <div className="absolute top-[95vh] left-8 flex justify-between w-12">
                {/* {socials.map((social) => (
                  <SocialIcon
                    url={social.url}
                    key={social._id}
                    fgColor="black"
                    bgColor="transparent "
                    className="w-4 sm:w-7 h-auto socialHeader hover:cursor-pointer"
                  />
                ))} */}
                <FaFacebookF className="text-white h-auto w-5 hover:text-primary" />
                <ImTwitter className="text-white h-auto w-5 hover:text-primary" />
              </div>
            </div>
          </div>
        )}
      </nav>
      {/* <div className="hidden md:block absolute top-8 right-4">
        <SwitchTheme />
      </div> */}
    </div>
  );
}

export default Navbar;
