"use client";
import SwitchTheme from "./SwitchTheme";
import { GiHamburgerMenu } from "react-icons/gi";
import useToggle from "@/hook/useToggle";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

function Navbar({ SocialData }) {
  const [toggle, setToggle] = useToggle(false);
  const { t, lang } = useTranslation("home");
  const params = useSearchParams();
  const locale = params.get("lang");

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
                {t("navAccueil")}
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

          <div className="md:flex hidden items-center justify-center">
            {locale === "en" ? (
              <button className="btn btn-ghost btn-xs">
                <Link className="" href="/">
                  <Image
                    src="https://freesvg.org/img/frenchflagframed.png"
                    width={300}
                    height={300}
                    alt="France flag"
                    className="w-5 h-5"
                  />
                </Link>
              </button>
            ) : (
              <button className="btn btn-ghost btn-xs">
                <Link className="" href="/?lang=en" as="/en?lang=en">
                  <Image
                    src="https://freesvg.org/img/US-UK_Flag.png"
                    width={300}
                    height={300}
                    alt="English flag"
                    className="w-5 h-5 "
                  />
                </Link>
              </button>
            )}
          </div>

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
                <h1 className="  text-white font-semibold font-Exo text-3xl">
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
                    {t("navAccueil")}
                  </Link>
                </li>
                <li className="text-white text-center hover:cursor-pointer hover:underline hover:text-primary">
                  <Link href="#services" className="text-xl font-semibold">
                    Services
                  </Link>
                </li>
              </ul>

              <div className="absolute bottom-2 left-4 flex justify-between w-5/6 items-center ">
                <div className="flex flex-col item-center justify-between w-full">
                  <p className="font-medium font-Exo text-white  text-center">
                    {t("Socials")}
                  </p>
                  <div className="flex justify-between items-center w-full">
                    {SocialData.map((social) => (
                      <SocialIcon
                        url={social.url}
                        key={social._id}
                        fgColor="white"
                        bgColor="transparent "
                        className="w-4 h-4 socialHeader hover:cursor-pointer"
                      />
                    ))}{" "}
                    <div className="flex items-center justify-center space-x-4">
                      <Link className="" href="/?lang=en" as="/en?lang=en">
                        <Image
                          src="https://freesvg.org/img/US-UK_Flag.png"
                          width={300}
                          height={300}
                          alt="English flag"
                          className="w-5 h-5 "
                        />
                      </Link>
                      <Link className="" href="/">
                        <Image
                          src="https://freesvg.org/img/frenchflagframed.png"
                          width={300}
                          height={300}
                          alt="France flag"
                          className="w-5 h-5"
                        />
                      </Link>
                    </div>
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
