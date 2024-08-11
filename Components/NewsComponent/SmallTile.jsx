import Link from "next/link";
import Image from "next/image";

const SmallTile = ({ id, imgURL, title, titleEn, locale }) => {
  return (
    <div className="bg-slate-100 shadow-md h-20 flex items-center justify-center">
      <Link
        target="_blank"
        href={`/News/${id}`}
        className="flex items-center justify-center font-bold text-sm">
        <Image
          src={imgURL}
          width={110}
          height={10}
          alt={title}
          className="m-1"
        />
        <span> {locale == "fa" ? title : titleEn}</span>
      </Link>
    </div>
  );
};

export default SmallTile;
