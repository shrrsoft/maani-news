import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <div className=" text-white pt-20 font-[Vazirmatn] max-w-[100rem] mx-auto ">
      <div className="bg-slate-700 md:px-32 py-3 h-14">
        <div className=" flex items-center">
          <div className="flex md:items-end gap-2 p-1 text-sm ">
            <Link className="rtl:border-l px-2" href="/policy">
              {t("Policy")}
            </Link>
            <Link className="border-l pl-2" href="/news">
              {t("Archive")}
            </Link>
            <Link className="border-l pl-2" href="/about">
              {t("About us")}
            </Link>
            <Link className="ltr:border-l pl-2" href="/contact">
              {t("Contact")}
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-slate-800 via-slate-950	 to-slate-800	 lg:px-32 p-3 pb-10">
        <div className="flex  justify-center items-start">
          <Link href="https://www.aparat.com/" target="_blank">
            <img
              className="rounded-full size-8 opacity-50 hover:opacity-100 hover:size-10 mb-5 hover:mb-3"
              src="/footer logos/aparat.jpg"
              alt="aparat font-icon"
            />
          </Link>
          <Link href="https://www.aparat.com/" target="_blank">
            <img
              className="rounded-full size-8 opacity-50 hover:opacity-100 hover:size-10"
              src="/footer logos/bale.jpg"
              alt="bale font-icon"
            />
          </Link>
          <Link href="https://www.aparat.com/" target="_blank">
            <img
              className="rounded-full size-8 opacity-50 hover:opacity-100 hover:size-10"
              src="/footer logos/eita.jpg"
              alt="eita font-icon"
            />
          </Link>

          <Link href="https://www.aparat.com/" target="_blank">
            <img
              className="rounded-full size-8 opacity-50 hover:opacity-100 hover:size-10"
              src="/footer logos/rubika.jpg"
              alt="rubika font-icon"
            />
          </Link>
          <Link href="https://www.aparat.com/" target="_blank">
            <img
              className="rounded-full size-8 opacity-50 hover:opacity-100 hover:size-10"
              src="/footer logos/sorush.jpg"
              alt="sorush font-icon"
            />
          </Link>
          <Link href="https://www.aparat.com/" target="_blank">
            <img
              className="rounded-full size-8 opacity-50 hover:opacity-100 hover:size-10"
              src="/footer logos/insta.jpg"
              alt="instagram font-icon"
            />
          </Link>
          <Link href="https://www.aparat.com/" target="_blank">
            <img
              className="rounded-full size-8 opacity-50 hover:opacity-100 hover:size-10"
              src="/footer logos/telegram.jpg"
              alt="telegram font-icon"
            />
          </Link>
          <Link href="https://www.aparat.com/" target="_blank">
            <img
              className="rounded-full size-8 opacity-50 hover:opacity-100 hover:size-10"
              src="/footer logos/twitter x.jpg"
              alt="twitter x font-icon"
            />
          </Link>
          <Link href="https://www.aparat.com/" target="_blank">
            <img
              className="rounded-full size-8 opacity-50 hover:opacity-100 hover:size-10"
              src="/footer logos/youtube.jpg"
              alt="youtube font-icon"
            />
          </Link>
          <Link href="https://www.aparat.com/" target="_blank">
            <img
              className="rounded-full size-8 opacity-50 hover:opacity-100 hover:size-10"
              src="/footer logos/RSS.jpg"
              alt="RSS font-icon"
            />
          </Link>
        </div>
        <div className="h-0.5 my-1 bg-gradient-to-r from-white/10 via-slate-300 to-white/10"></div>
        <div className="flex lg:gap-24 gap-6 lg:justify-between justify-center px-5 items-center mt-2 flex-wrap md:flex-nowrap">
          <span className="text-sm text-center w-40">{t("Designer")}</span>
          <span className="text-sm text-center">{t("CoppyWrite")}</span>
          <img
            className=" rounded-md p-1  w-40 lg:mt-0"
            src="/logo.png"
            alt="footer logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
