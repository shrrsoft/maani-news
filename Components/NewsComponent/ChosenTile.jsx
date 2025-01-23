import { post } from "@/data/db";
import Link from "next/link";

const ChosenTile = async ({ locale }) => {
  return (
    <div className=" px-2 py-4 min-h-[26rem] shadow-lg shadow-slate-400 ">
      <h3 className="font-bold text-lg mb-3">
        {locale == "fa" ? "اخبار برگزیده" : "Collected News"}
      </h3>
      <ul
        type="circle"
        className="list-disc rtl:pr-5 font-bold rtl:text-right ltr:text-left ltr:pl-5 text-sm py- flex flex-col gap-3 ">
        {post
          .map((item) => (
            <li key={item.id}>
              <Link target="_blank" href={`/News/${item.id}`}>
                {locale == "fa" ? item.title : item.titleEn}
              </Link>
            </li>
          ))
          .slice(0, 6)}
      </ul>
    </div>
  );
};

export default ChosenTile;
