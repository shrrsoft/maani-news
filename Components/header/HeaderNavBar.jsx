import { Link } from "@/navigation";
import { AiFillHome } from "react-icons/ai";
import HeaderSearchBox from "./HeaderSearchBox";
import { GrLanguage } from "react-icons/gr";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/navigation";

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
        className={`w-auto h-10 bg-white rounded-md p-1 ${
          scroll ? "fixed" : "hidden"
        }`}
        src="/logo_footer.png"
        alt=""
      />
      <div className="flex mr-16 gap-4 p-1 items-center text-slate-300 hover:*:text-white">
        <Link className="border-l px-3 " href="/">
          <AiFillHome />
        </Link>
        <Link className="border-l pl-3" href="/Politics">
          {t("Politics")}
        </Link>
        <Link className="border-l pl-3" href="/Economy">
          {t("Economy")}
        </Link>
        <Link className="border-l pl-3" href="/Culture">
          {t("Culture")}
        </Link>
        <Link className="border-l pl-3" href="/Social">
          {t("Social")}
        </Link>
        <Link className="border-l pl-3" href="/Sport">
          {t("Sport")}
        </Link>
        <Link className="border-l pl-3" href="/Provinces">
          {t("Provinces")}
        </Link>
      </div>
      {scroll ? <HeaderSearchBox t={t} /> : <></>}
      <div className="flex gap-10">
        <div className="flex items-center gap-2">
          <select
            value={locale}
            onChange={handleChange}
            className="bg-inherit text-center outline-none">
            <option value="en" className="bg-sky-950">
              English
            </option>
            <option value="fa" className="bg-sky-950">
              فارسی
            </option>
          </select>
          <GrLanguage />
        </div>
        <div className="pl-3 flex gap-16 items-center">
          <div>{new Date().toLocaleDateString(locale)}</div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavBar;
