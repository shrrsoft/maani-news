import Link from "next/link";
import Image from "next/image";

const SmallTile = (props) => {
  return (
    <div className="bg-slate-100 shadow-md h-20 flex items-center justify-center">
      <Link
        href={`/News/${props.id}`}
        className="flex items-center justify-center font-bold text-sm">
        <Image
          src={props.imgURL}
          width={110}
          height={10}
          alt={props.title}
          className=""
        />
        <span> {props.title}</span>
      </Link>
    </div>
  );
};

export default SmallTile;
