"use client";

import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import data from "/data/db.json";

const HeaderSearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const filterData = (searchTerm) => {
    const result = data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(result);
  };
  console.log(data.post);
  return (
    <div className="border border-sky-100 flex rounded-xl overflow-hidden focus-within:bg-white/20 transition-all">
      <form className="" action="search ">
        <input
          className="w-64 h-8 outline-none px-1 bg-transparent pr-5 text-white"
          type="text"
          placeholder="جست و جو در اخبار"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <button onClick={() => filterData}>
        <IoIosSearch className=" text-sky-100 size-6 ml-1" />
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
