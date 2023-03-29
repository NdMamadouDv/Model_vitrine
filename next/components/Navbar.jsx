"use client";
import SwitchTheme from "./SwitchTheme";
import { GiHamburgerMenu } from "react-icons/gi";
import useToggle from "@/hook/useToggle";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import useTranslation from "next-translate/useTranslation";

function Navbar({ SocialData }) {
  const [toggle, setToggle] = useToggle(false);
  const { t, lang } = useTranslation("home");

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
          </ul>
        </div>
        <div className=" navbar-end space-x-4">
          <Link
            href="#contact"
            className="md:flex hidden btn btn-primary btn-sm rounded-md"
          >
            Contact
          </Link>
          {/* Open nav */}
          <div className="lg:hidden flex items-center justify-center ">
            <span className="rounded-md">
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
              <div className="absolute top-4 left-8  flex justify-between items-center w-5/6 mx-auto">
                <h1 className="  text-white font-semibold font-Exo text-4xl">
                  My brand
                </h1>
                <button onClick={setToggle} className="text-white ">
                  <span className="">
                    <MdOutlineClose className="h-auto w-10 " />
                  </span>
                </button>
              </div>

              <ul className="space-y-6">
                <li className="text-white text-center hover:cursor-pointer hover:underline hover:text-primary">
                  <Link href="#hero" className="text-xl font-semibold">
                    Home
                  </Link>
                </li>
                <li className="text-white text-center hover:cursor-pointer hover:underline hover:text-primary">
                  <Link href="#services" className="text-xl font-semibold">
                    Services
                  </Link>
                </li>
              </ul>

              <div className="absolute bottom-0 left-8 flex justify-between w-2/3 items-center ">
                <div className="flex flex-col item-center justify-center">
                  <p className="font-medium font-Exo text-white text-xl text-center">
                    {t("Socials")}
                  </p>
                  <div className="flex justify-start items-center">
                    {SocialData.map((social) => (
                      <SocialIcon
                        url={social.url}
                        key={social._id}
                        fgColor="white"
                        bgColor="transparent "
                        className="w-8 h-8 socialHeader hover:cursor-pointer"
                      />
                    ))}{" "}
                  </div>
                </div>
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
