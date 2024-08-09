import Link from "next/link";

const Footer = () => {
  return (
    <div className=" text-white pt-20 font-[Vazirmatn] ">
      <div className="bg-slate-700 md:px-32 py-3 h-14">
        <div className=" flex lg:justify-end justify-center items-center">
          <div className="flex md:items-end gap-2 p-1 text-sm">
            <Link className="border-l px-2" href="/about2">
              خط مشی
            </Link>
            <Link className="border-l pl-2" href="/Social">
              آرشیو
            </Link>
            <Link className="border-l pl-2" href="/about">
              درباره ما
            </Link>
            <Link className="border-l pl-2" href="/contact">
              تماس با ما
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-slate-800 via-slate-950	 to-slate-800	 lg:px-32 p-3 mb-10">
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
          <span className="text-sm text-center w-40">
            طراحی سیدحمیدرضا رضوی
          </span>
          <span className="text-sm text-center">
            کلیه حقوق مادی و معنوی این پایگاه متعلق به مرکز نوآوری ، فناوری و
            علم آفرینی پیشران می باشد. <br /> استفاده از مطالب با ذکر منبع آزاد
            است.
          </span>
          <img
            className="bg-white rounded-md p-1 w-40 lg:mt-0"
            src="/logo_footer.png"
            alt="footer logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
