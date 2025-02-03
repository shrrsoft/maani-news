import { Link } from "@/i18n/routing";
import { AiFillHome } from "react-icons/ai";
import HeaderSearchBox from "./HeaderSearchBox";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import clsx from "clsx";
import { ThemeSwitcher } from "../ThemeSwitcher";

const HeaderNavBar = ({ scroll, locale }) => {
  const t = useTranslations("Header");
  const router = useRouter();
  const pathname = usePathname();
  const handleChange = (e) => {
    router.push(pathname, { locale: e.target.value });
  };

  return (
    <div
      className={`border-t border-b h-10 w-full justify-between items-center flex xl:mt-0  ${
        scroll
          ? "fixed top-0 bg-gradient-to-r from-slate-900 via-sky-800	 to-slate-900 z-40 pr-32 pl-36 w-full h-12 "
          : ""
      } `}>
      <img
        className={`w-auto h-10 rounded-md p-1 ${scroll ? "fixed" : "hidden"}`}
        src="/logo.png"
        alt=""
      />
      <div className="flex mr-16 ltr:ml-16 gap-4 p-1 items-center text-slate-300 hover:*:text-white">
        <Link className="border-l pl-3" href="/">
          <AiFillHome />
        </Link>
        <Link
          className={clsx("", {
            "w-16 ltr:w-20 text-center bg-white/30 py-1.5 text-white rounded-sm":
              pathname === "/politics",
          })}
          href="/politics">
          {t("Politics")}
        </Link>
        <Link
          className={clsx("", {
            "w-16 ltr:w-20 text-center bg-white/30 py-1.5 text-white rounded-sm":
              pathname === "/economy",
          })}
          href="/economy">
          {t("Economy")}
        </Link>
        <Link
          className={clsx("", {
            "w-16 ltr:w-20 text-center bg-white/30 py-1.5 text-white rounded-sm":
              pathname === "/culture",
          })}
          href="/culture">
          {t("Culture")}
        </Link>
        <Link
          className={clsx("", {
            "w-16 ltr:w-20 text-center bg-white/30 py-1.5 text-white rounded-sm":
              pathname === "/social",
          })}
          href="/social">
          {t("Social")}
        </Link>
        <Link
          className={clsx("", {
            "w-16 ltr:w-20 text-center bg-white/30 py-1.5 text-white rounded-sm":
              pathname === "/sport",
          })}
          href="/sport">
          {t("Sport")}
        </Link>
        <Link
          className={clsx("", {
            "w-16 ltr:w-20 text-center bg-white/30 py-1.5 text-white rounded-sm":
              pathname === "/provinces",
          })}
          href="/provinces">
          {t("Provinces")}
        </Link>
      </div>
      {scroll && <HeaderSearchBox t={t} />}
      <div className="flex gap-10">
        <div className="flex items-center gap-2">
          <select
            value={locale}
            onChange={handleChange}
            className="bg-inherit text-center outline-none ">
            <option value="en" className="bg-sky-950">
              English
            </option>
            <option value="fa" className="bg-sky-950">
              فارسی
            </option>
          </select>
          <ThemeSwitcher />
        </div>
        <div className="pl-3 flex gap-16 items-center">
          <div>{new Date().toLocaleDateString(locale)}</div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavBar;
