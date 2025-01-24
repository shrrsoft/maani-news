import Link from "next/link";
import Image from "next/image";

const SmallTile = ({ item, locale }) => {
  return (
    <div className=" md:shadow-lg border md:border-none p-2 shadow-slate-400 h-20 flex items-center justify-center">
      <Link
        target="_blank"
        href={`/${[locale]}/news/${item.id}`}
        className="flex items-center justify-start gap-4">
        <div className="w-24 h-16 overflow-hidden relative">
          <Image
            src={item.imgURL}
            // width={90}
            // height={10}
            fill={true}
            alt={item.title}
            className="m-1"
          />
        </div>
        <p className="font-bold text-xs w-[65%]">
          {locale == "fa" ? item.title : item.titleEn}
        </p>
      </Link>
    </div>
  );
};

export default SmallTile;
