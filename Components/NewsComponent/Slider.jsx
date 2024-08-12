"use client";

import Link from "next/link";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

const Slider = ({ locale }) => {
  return (
    <swiper-container
      loop="true"
      navigation="true"
      scrollbar="true"
      autoplay="true">
      <swiper-slide>
        <img className="h-[26rem]" src="/news-img/9.jpg" alt="" />
        <Link
          href="#"
          className="font-bold text-white w-full absolute bg-gradient-to-b from-black/0 via-black/80 to-black/0 h-20 pt-5 right-0 top-[21rem]">
          {locale === "fa"
            ? "پزشکیان: لازمه موفقیت وحدت، همدلی و رفتن به سمت رفع نیازهای مردم است"
            : "Pezeshkian: Unity, empathy and going towards meeting the needs of the people are necessary for success"}
        </Link>
      </swiper-slide>
      <swiper-slide>
        <img className="h-[26rem]" src="/news-img/10.jpg" alt="" />
        <Link
          href="#"
          className="font-bold text-white w-full absolute bg-gradient-to-b from-black/0 via-black/80 to-black/0 h-20 pt-5 right-0 top-[21rem] border-none">
          {locale === "fa"
            ? "پارک خلیج‌فارس قطب حمایت از دانش‌بنیان‌های انرژی/ فراخوان جشنواره نفت و گاز"
            : "Persian Gulf Qutb Park, support for energy science foundations/ call for oil and gas festival"}
        </Link>
      </swiper-slide>
      <swiper-slide>
        <img className="h-[26rem]" src="/news-img/11.jpg" alt="" />

        <Link
          href="#"
          className="font-bold text-white w-full absolute bg-gradient-to-b from-black/0 via-black/80 to-black/0 h-20 pt-5 right-0 top-[21rem]">
          {locale === "fa"
            ? "ترامپ در مصاحبه ی اف بی آی در ارتباط با سوء قصد به جان خود شرکت می کند"
            : "Trump attends FBI interview regarding suicide attempt"}
        </Link>
      </swiper-slide>
      <swiper-slide>
        <img className="h-[26rem]" src="/news-img/12.jpg" alt="" />

        <Link
          href="#"
          className="font-bold text-white w-full absolute bg-gradient-to-b from-black/0 via-black/80 to-black/0 h-20 pt-5 right-0 top-[21rem]">
          {locale === "fa"
            ? "آتش‌افروزی در خرمن تا به کی؟"
            : "How long will the arson in Harman last?"}
        </Link>
      </swiper-slide>
    </swiper-container>
  );
};
export default Slider;
