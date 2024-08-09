"use client";

import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";

import { useState } from "react";

const MobileMenu = () => {
  const [isOpen, SetIsOpen] = useState(false);

  return (
    <div className="bg-sky-900 pb-1 lg:hidden">
      <div
        className={`bg-sky-800 h-screen fixed z-20 left-0 top-10 overflow-hidden origin-left transition-all ease-in-out ${
          isOpen ? "w-72" : "w-0"
        }`}
        onClick={() => SetIsOpen(false)}>
        <div className="flex flex-col items-center gap-4 p-1 text-white ">
          <Link
            className="border-b py-3 pt-6 w-40 text-center cursor-pointer"
            href="/">
            خانه
          </Link>
          <Link className="border-b pb-3 w-40 text-center" href="/Politics">
            سیاست
          </Link>
          <Link className="border-b pb-3 w-40 text-center" href="/Economy">
            اقتصاد
          </Link>
          <Link className="border-b pb-3 w-40 text-center" href="/Culture">
            فرهنگ
          </Link>
          <Link className="border-b pb-3 w-40 text-center" href="/Social">
            اجتماعی
          </Link>
          <Link className="border-b pb-3 w-40 text-center" href="/Sport">
            ورزش
          </Link>
          <Link className="border-b pb-3 w-40 text-center" href="/Provinces">
            استان ها
          </Link>
        </div>
      </div>
      <div className="bg-white mt-16 pb-2 flex justify-around items-center flex-col ">
        <h1 className="border-b-2 mb-2 border-sky-800 text-3xl font-bold text-sky-800 pr-3 text-center">
          خبرگزاری پیشران
        </h1>
        <img src="/logo_footer.png" alt="" className="h-auto w-44" />
      </div>
      <div className="flex items-center pt-2 pb-1 justify-center px-8">
        <div className="border border-sky-100 flex rounded-xl overflow-hidden focus-within:bg-black/30 transition-all duration-300">
          <form className="" action="search ">
            <input
              className="w-64 h-8 outline-none px-1 bg-transparent pr-5 text-white"
              type="text"
              placeholder="جست و جو در اخبار"
            />
          </form>
          <button className="">
            <IoIosSearch className=" text-sky-100 size-6 ml-1" />
          </button>
        </div>
        <div className="bg-sky-900 fixed top-0 left-0 h-14 w-full z-20">
          <div className="flex items-center p-2">
            <div className="text-white mr-4">
              {new Date().toLocaleDateString("fa-IR")}
            </div>
            {isOpen ? (
              <RiCloseLargeLine
                className="text-white text-3xl ml-6 my-2 mr-auto"
                onClick={() => SetIsOpen(false)}
              />
            ) : (
              <GiHamburgerMenu
                className="text-white text-3xl ml-6 my-2 mr-auto"
                onClick={() => SetIsOpen(true)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
