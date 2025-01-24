import { post } from "@/data/db";
import Image from "next/image";
import Link from "next/link";

const News = async ({ params: { locale } }) => {
  return (
    <div className="md:grid grid-cols-3 gap-2 md:w-full w-[90%] mx-auto">
      <div className="col-span-2">
        <h1 className="m-4 font-bold text-xl ">آخرین اخبار</h1>
        {post.map((item) => (
          <Link
            key={item.id}
            target="_blank"
            href={`/${[locale]}/news/${item.id}`}
            className="flex justify-start items-center gap-4 border-b border-t m-2">
            <div className="w-20 h-10 relative rounded-sm overflow-hidden">
              <Image src={item.imgURL} alt={item.title} fill="true" />
            </div>
            <p htmlFor="" className="basis-60 md:basis-full line-clamp-1">
              {locale == "fa" ? item.title : item.titleEn}
            </p>
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-2 mt-7">
        <h2 className=" text-center font-bold text-md ">
          {locale == "fa" ? "آرشیو روزانه" : "Daily Archive"}
        </h2>
        <div className="border shadow-md mb-5 p-1">
          <ul
            type="circle"
            className="list-disc rtl:pr-5 rtl:text-right ltr:text-left ltr:px-5 font-bold  text-sm py-4 flex flex-col gap-3 ">
            {post
              .map((item) => (
                <li key={item.id}>
                  <Link href={`/${[locale]}/news/${item.id}`}>
                    {locale == "fa" ? item.title : item.titleEn}
                  </Link>
                </li>
              ))
              .slice(0, 8)}
          </ul>
        </div>
        <h2 className=" text-center font-bold text-md">
          {locale == "fa" ? "آرشیو هفتگی" : "Weekly Archive"}
        </h2>
        <div className="border shadow-md mb-5 p-1">
          <ul
            type="circle"
            className="list-disc rtl:pr-5 rtl:text-right ltr:text-left ltr:px-5 font-bold  text-sm py-4 flex flex-col gap-3 ">
            {post
              .map((item) => (
                <li key={item.id}>
                  <Link href={`/${[locale]}/news/${item.id}`}>
                    {locale == "fa" ? item.title : item.titleEn}
                  </Link>
                </li>
              ))
              .slice(5, 11)}
          </ul>
        </div>
        <h2 className=" text-center font-bold text-md ">
          {locale == "fa" ? "آرشیو ماهانه" : "Monthly Archive"}
        </h2>
        <div className="border shadow-md mb-5 p-1">
          <ul
            type="circle"
            className="list-disc rtl:pr-5 rtl:text-right ltr:text-left ltr:px-5 font-bold  text-sm py-4 flex flex-col gap-3 ">
            {post
              .map((item) => (
                <li key={item.id}>
                  <Link href={`/${[locale]}/news/${item.id}`}>
                    {locale == "fa" ? item.title : item.titleEn}
                  </Link>
                </li>
              ))
              .slice(3, 10)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default News;
