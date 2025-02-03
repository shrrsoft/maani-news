import Image from "next/image";
import Link from "next/link";

const Tile = ({ item, locale }) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center p-2 pb-8">
      <Link
        target="_blank"
        href={`/${[locale]}/news-page/${item.id}`}
        className="font-bold">
        <div className="h-40 mx-auto relative rounded-sm overflow-hidden mb-2">
          <Image src={item.imgURL} alt={item.title} width={300} height={100} />
        </div>
        <p className="line-clamp-2">
          {locale == "fa" ? item.title : item.titleEn}
        </p>
      </Link>
      <p className="pt-4 text-sm line-clamp-3">
        {locale == "fa" ? item.body : item.body_en}
      </p>
    </div>
  );
};

export default Tile;
