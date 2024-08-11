"use client";

import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import data from "/data/db.json";
import { useTranslations } from "next-intl";

const HeaderSearchBox = () => {
  const t = useTranslations("Header");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const filterData = (searchTerm) => {
    const result = data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(result);
  };
  return (
    <div className="border border-sky-100 flex rounded-xl overflow-hidden focus-within:bg-white/20 transition-all">
      <form className="" action="search ">
        <input
          className="w-64 h-8 outline-none bg-transparent px-5 text-white"
          type="text"
          placeholder={t("SearchPlaceHolder")}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <button onClick={() => filterData}>
        <IoIosSearch className=" text-sky-100 size-6 mx-1" />
      </button>
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderSearchBox;
