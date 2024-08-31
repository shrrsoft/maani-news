import Image from "next/image";
import Link from "next/link";

const Tile = (props) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center p-2">
      <Link target="_blank" href={`/News/${props.id}`} className="font-bold">
        <div className="h-40 mx-auto relative rounded-sm overflow-hidden mb-2">
          <Image
            src={props.imgURL}
            alt={props.title}
            width={300}
            height={100}
          />
        </div>
        {props.locale == "fa" ? props.title : props.titleEn}
      </Link>
      <p className="pt-4 text-sm">
        {props.locale == "fa" ? props.abst : props.abst_en}
      </p>
    </div>
  );
};

export default Tile;
