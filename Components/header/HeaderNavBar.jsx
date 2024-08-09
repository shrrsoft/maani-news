import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import HeaderSearchBox from "./HeaderSearchBox";
import { GrLanguage } from "react-icons/gr";

const HeaderNavBar = (props) => {
  return (
    <div
      className={`border-t border-b h-10 w-full justify-between items-center flex xl:mt-0  ${
        props.scroll
          ? "fixed top-0 bg-gradient-to-r from-slate-900 via-sky-800	 to-slate-900 z-40 pr-32 pl-36 w-full h-12 "
          : ""
      } `}>
      <img
        className={`w-auto h-10 bg-white rounded-md p-1 ${
          props.scroll ? "fixed" : "hidden"
        }`}
        src="/logo_footer.png"
        alt=""
      />
      <div className="flex mr-16 gap-4 p-1 items-center text-slate-300 hover:*:text-white">
        <Link className="border-l px-3 " href="/">
          <AiFillHome />
        </Link>
        <Link className="border-l pl-3" href="/Politics">
          سیاست
        </Link>
        <Link className="border-l pl-3" href="/Economy">
          اقتصاد
        </Link>
        <Link className="border-l pl-3" href="/Culture">
          فرهنگ
        </Link>
        <Link className="border-l pl-3" href="/Social">
          اجتماعی
        </Link>
        <Link className="border-l pl-3" href="/Sport">
          ورزش
        </Link>
        <Link className="border-l pl-3" href="/Provinces">
          استان ها
        </Link>
      </div>
      {props.scroll ? <HeaderSearchBox /> : <></>}

      <div className="pl-3 flex gap-16 items-center">
        <div className="flex gap-3 justify-center items-center">
          <div className="flex items-center gap-2">
            <button className="border-l pl-2">فارسی</button>
            <button>English</button>
          </div>
          <GrLanguage />
        </div>
        <div>{new Date().toLocaleDateString("fa-IR")}</div>
      </div>
    </div>
  );
};

export default HeaderNavBar;
