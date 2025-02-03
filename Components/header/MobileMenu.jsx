"use client";

import { Link } from "@/i18n/routing";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeLine } from "react-icons/ri";
import { useTranslations } from "next-intl";
import { AiFillHome } from "react-icons/ai";
import { useRouter, usePathname } from "@/i18n/routing";
import { ThemeSwitcher } from "../ThemeSwitcher";
import clsx from "clsx";

import { useState } from "react";
import HeaderSearchBox from "./HeaderSearchBox";
import { useTheme } from "next-themes";

const MobileMenu = ({ locale }) => {
  const [isOpen, SetIsOpen] = useState(false);
  const t = useTranslations("Header");
  const router = useRouter();
  const pathname = usePathname();
  const handleChange = (e) => {
    router.push(pathname, { locale: e.target.value });
  };
  const theme = useTheme();

  return (
    <div className="pb-1 lg:hidden">
      <div
        className={`bg-slate-800/90 h-screen fixed z-20 ltr:left-0 rtl:right-0 top-10 overflow-hidden transition-all ease-in-out ${
          isOpen ? "w-full backdrop-blur-sm" : "w-0"
        }`}
        onClick={() => SetIsOpen(false)}>
        <div className="flex flex-col gap-1 items-center p-1 text-white ">
          <Link className="pt-10 pb-3 text-center" href="/">
            <AiFillHome className="mx-auto text-2xl" />
          </Link>
          <div className="w-60 h-0.5 bg-gradient-to-r from-white/10 via-white to-white/20"></div>
          <Link
            className={clsx("text-center text-lg py-3", {
              "bg-white/30 text-white rounded-full w-72":
                pathname === "/Politics",
            })}
            href="/Politics">
            {t("Politics")}
          </Link>
          <div className="w-60 h-0.5 bg-gradient-to-r from-white/10 via-white to-white/20"></div>
          <Link
            className={clsx("text-center text-lg py-3", {
              "bg-white/30 text-white rounded-full w-72":
                pathname === "/Economy",
            })}
            href="/Economy">
            {t("Economy")}
          </Link>
          <div className="w-60 h-0.5 bg-gradient-to-r from-white/10 via-white to-white/20"></div>
          <Link
            className={clsx("text-center text-lg py-3", {
              "bg-white/30 text-white rounded-full w-72":
                pathname === "/Culture",
            })}
            href="/Culture">
            {t("Culture")}
          </Link>
          <div className="w-60 h-0.5 bg-gradient-to-r from-white/10 via-white to-white/20"></div>
          <Link
            className={clsx("text-center text-lg py-3", {
              "bg-white/30 text-white rounded-full w-72":
                pathname === "/Social",
            })}
            href="/Social">
            {t("Social")}
          </Link>
          <div className="w-60 h-0.5 bg-gradient-to-r from-white/10 via-white to-white/20"></div>
          <Link
            className={clsx("text-center text-lg py-3", {
              "bg-white/30 text-white rounded-full w-72": pathname === "/Sport",
            })}
            href="/Sport">
            {t("Sport")}
          </Link>
          <div className="w-60 h-0.5 bg-gradient-to-r from-white/10 via-white to-white/20"></div>
          <Link
            className={clsx("text-center text-lg py-3", {
              "bg-white/30 text-white rounded-sm w-72":
                pathname === "/Provinces",
            })}
            href="/Provinces">
            {t("Provinces")}
          </Link>
        </div>
      </div>
      <div className="bg-inherit pt-16 pb-2 flex justify-around items-center flex-col ">
        <h1
          className={`font-[vazirmatn] mb-2 border-sky-800 text-3xl font-bold text-sky-800 pr-3 text-center ${
            theme.theme == "light" ? "text-sky-900" : "text-sky-50"
          }`}>
          {locale === "fa" ? "خبرگزاری مانی " : "Maani News Agency"}
        </h1>
        <img
          src="/logo.png"
          alt=""
          className="h-auto w-44 bg-sky-900 rounded-full pl-2.5"
        />
      </div>
      <div className="flex items-center bg-sky-900 py-2  justify-center px-8">
        <HeaderSearchBox />
        <div className="bg-sky-900 fixed top-0 left-0 h-14 w-full z-20">
          <div className="flex items-center justify-between p-2 ltr:flex-row-reverse">
            <div className="text-white mr-4">
              {new Date().toLocaleDateString(locale)}
            </div>
            <div className="flex ltr:flex-row-reverse gap-5">
              <div className="flex ltr:flex-row-reverse items-center gap-2 text-white">
                <select
                  value={locale}
                  onChange={handleChange}
                  className="bg-inherit text-center outline-none  ">
                  <option
                    value="en"
                    className="bg-sky-900 text-white font-bold text-center">
                    English
                  </option>
                  <option
                    value="fa"
                    className="bg-sky-900 text-white font-bold text-center">
                    فارسی
                  </option>
                </select>
                <ThemeSwitcher />
              </div>
              <div>
                {isOpen ? (
                  <RiCloseLargeLine
                    className="text-white text-3xl ml-6 my-2 mr-auto"
                    onClick={() => SetIsOpen(false)}
                  />
                ) : (
                  <GiHamburgerMenu
                    className="text-white text-3xl ml-6 my-2 mr-auto"
                    onClick={() => SetIsOpen(true)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
