import { post } from "@/data/db";
import Image from "next/image";

const PageNews = async ({ params, params: { locale } }) => {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col items-center gap-10 w-[90%]">
        <h2 className="text-xl font-bold">
          {locale == "fa" ? post.title : post.titleEn}
        </h2>
        <Image src={post.imgURL} alt="" width="600" height="300" />
        <p className="text-justify leading-10 ltr:text-left">
          {locale == "fa" ? post.body : post.body_en}
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default PageNews;
