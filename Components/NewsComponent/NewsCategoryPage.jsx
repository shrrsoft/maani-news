import ChosenTile from "@/Components/NewsComponent/ChosenTile";
import { post } from "@/data/db";
import Image from "next/image";
import Link from "next/link";

const NewsCategoryPage = ({ locale }) => {
  return (
    <>
      <div className=" md:grid grid-cols-3 gap-4 md:w-full w-[90%] mx-auto ">
        {post.map((item) => (
          <Link
            key={item.id}
            href={`/${[locale]}/news-page/${item.id}`}
            className="col-span-2">
            <div
              key={item.id}
              className=" shadow-lg shadow-slate-400 p-8 md:flex gap-2 col-span-2 m-1 md:my-0 my-5">
              <div className="relative h-32 w-48 rounded-sm overflow-hidden mx-auto mb-6">
                <Image src={item.imgURL} alt={item.title} fill="true" />
              </div>
              <div className="basis-[40rem]">
                <h3 className="font-bold mb-3 text-center">
                  {locale == "fa" ? item.title : item.titleEn}
                </h3>
                <p className="text-justify line-clamp-4">
                  {locale == "fa" ? item.body : item.body_en}
                </p>
              </div>
            </div>
          </Link>
        ))}

        <div className="row-start-1 row-end-4 col-start-3 p-2">
          <ChosenTile locale={locale} />
        </div>
      </div>
    </>
  );
};

export default NewsCategoryPage;
