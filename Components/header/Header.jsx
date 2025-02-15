"use client";

import { useState, useEffect } from "react";
import HeaderNavBar from "./HeaderNavBar";
import HeaderSearchBox from "./HeaderSearchBox";
import { useTranslations } from "next-intl";
import MobileMenu from "@/Components/header/MobileMenu";

const Header = ({ locale }) => {
  const [scroll, setScroll] = useState(false);
  const t = useTranslations("Header");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 95);
    });
  });

  return (
    <>
      <div className="hidden lg:block bg-gradient-to-r from-slate-900 via-sky-800	 to-slate-900	 text-slate-100 mb-4 py-4 font-[Vazirmatn] max-w-[100rem] mx-auto">
        <div className={`flex gap-4 ${scroll ? "mr-0" : "mr-32 ltr:ml-32"}`}>
          <img
            className={`w-auto h-20 inherit rounded-md p-1 ${
              scroll ? "hidden" : ""
            }`}
            src="/logo.png"
            alt=""
          />
          <div className="flex flex-col w-full pl-32 ltr:pl-0 gap-3">
            <div className="flex items-center justify-between">
              <h1 className=" text-3xl"> {t("Name")}</h1>
              <HeaderSearchBox scroll={scroll} />
            </div>
            <HeaderNavBar scroll={scroll} locale={locale} />
          </div>
        </div>
      </div>
      <MobileMenu locale={locale} />
    </>
  );
};

export default Header;
