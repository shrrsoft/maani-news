"use client";

import Link from "next/link";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

const Slider = () => {
  return (
    <swiper-container
      loop="true"
      navigation="true"
      scrollbar="true"
      autoplay="true">
      <swiper-slide>
        <div className="h-[22rem] md:h-96">
          <img
            className="h-auto max-h-80 w-full relative mb-4"
            src="/news-img/9.jpg"
            alt=""
          />
          <Link href="#" className="font-bold">
            مخبر: شهید رئیسی مردم را به صحنه آورد/ پس از جلسه با رهبر انقلاب
            مدیر دیگری شدم
          </Link>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img
          className="h-auto max-h-80 w-full relative mb-4"
          src="/news-img/10.jpg"
          alt=""
        />
        <Link href="#" className="font-bold">
          کاهش ۱۲ درصدی تورم نقطه به نقطه در تیرماه ۱۴۰۳
        </Link>
      </swiper-slide>
      <swiper-slide>
        <img
          className="h-auto max-h-80 w-full relative mb-4"
          src="/news-img/11.jpg"
          alt=""
        />
        <Link href="#" className="font-bold">
          پزشکیان: لازمه موفقیت وحدت، همدلی و رفتن به سمت رفع نیازهای مردم است
        </Link>
      </swiper-slide>
      <swiper-slide>
        <img
          className="h-auto max-h-80 w-full relative mb-4"
          src="/news-img/12.jpg"
          alt=""
        />
        <Link href="#" className="font-bold">
          اذعان تل‌آویو به درماندگی نظامیانش در غزه/ گرفتاری در جهنم جبهه شمالی
        </Link>
      </swiper-slide>
    </swiper-container>
  );
};
export default Slider;
