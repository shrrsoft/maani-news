"use client";

import { useSearchParams } from "next/navigation";

const page = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  console.log("search is:" + search);
  return <div>Enter</div>;
};

export default page;
