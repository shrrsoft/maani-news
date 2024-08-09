import Image from "next/image";
import Link from "next/link";

const Tile = (props) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center p-2">
      <Link href={`/News/${props.id}`} className="font-bold">
        <div className="w-60 h-40 mx-auto relative rounded-sm overflow-hidden mb-2">
          <Image src={props.imgURL} alt={props.title} fill="true" />
        </div>
        {props.title}
      </Link>
      <p className="pt-4 text-sm"> {props.abst}</p>
    </div>
  );
};

export default Tile;
