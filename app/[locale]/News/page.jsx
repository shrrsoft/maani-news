import Image from "next/image";
import Link from "next/link";

const News = async ({ params: { locale } }) => {
  const data = await fetch("http://localhost:8000/post", {
    cache: "force-cache",
  }).then((res) => res.json());

  return (
    <div className="grid grid-cols-3 gap-2">
      <div className="col-span-2">
        <h1 className="m-4 font-bold text-xl ">آخرین اخبار</h1>
        {data.map((item) => (
          <Link
            key={item.id}
            target="_blank"
            href={`/News/${item.id}`}
            className="flex justify-start items-center gap-4 border-b border-t m-2">
            <div className="w-20 h-10 relative rounded-sm overflow-hidden">
              <Image src={item.imgURL} alt={item.title} fill="true" />
            </div>
            <label htmlFor="">
              {locale == "fa" ? item.title : item.titleEn}
            </label>
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-2 mt-7">
        <h2 className=" text-center font-bold text-md ">
          {locale == "fa" ? "آرشیو روزانه" : "Daily Archive"}
        </h2>
        <div className="border shadow-md mb-5">
          <ul
            type="circle"
            className="list-disc rtl:pr-5 rtl:text-right ltr:text-left ltr:px-5 font-bold  text-sm py-4 flex flex-col gap-3 ">
            {data
              .map((item) => (
                <li key={item.id}>
                  <Link href={`/News/${item.id}`}>
                    {locale == "fa" ? item.title : item.titleEn}
                  </Link>
                </li>
              ))
              .slice(0, 8)}
          </ul>
        </div>
        <h2 className=" text-center font-bold text-md ">
          {locale == "fa" ? "آرشیو هفتگی" : "Weekly Archive"}
        </h2>
        <div className="border shadow-md mb-5">
          <ul
            type="circle"
            className="list-disc rtl:pr-5 rtl:text-right ltr:text-left ltr:px-5 font-bold  text-sm py-4 flex flex-col gap-3 ">
            {data
              .map((item) => (
                <li key={item.id}>
                  <Link href={`/News/${item.id}`}>
                    {locale == "fa" ? item.title : item.titleEn}
                  </Link>
                </li>
              ))
              .slice(5, 11)}
          </ul>
        </div>
        <h2 className=" text-center font-bold text-md ">
          {locale == "fa" ? "آرشیو ماهانه" : "Monthly Archive"}
        </h2>
        <div className="border shadow-md mb-5">
          <ul
            type="circle"
            className="list-disc rtl:pr-5 rtl:text-right ltr:text-left ltr:px-5 font-bold  text-sm py-4 flex flex-col gap-3 ">
            {data
              .map((item) => (
                <li key={item.id}>
                  <Link href={`/News/${item.id}`}>
                    {locale == "fa" ? item.title : item.titleEn}
                  </Link>
                </li>
              ))
              .slice(3, 10)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default News;
