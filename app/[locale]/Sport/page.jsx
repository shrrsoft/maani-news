import ChosenTile from "@/Components/NewsComponent/ChosenTile";
import Image from "next/image";
import Link from "next/link";

const Sport = async ({ params: { locale } }) => {
  const data = await fetch("http://localhost:8000/post", {
    cache: "force-cache",
  }).then((res) => res.json());
  console.log(data);
  data.map((item) => console.log(item.title));

  return (
    <>
      <div className=" md:grid grid-cols-3 gap-4 md:w-full w-[90%] mx-auto ">
        {data.map((item) => (
          <Link href={`/News/${item.id}`} className="col-span-2">
            <div
              key={item.id}
              className="bg-slate-100 shadow-md border p-1 py-2 md:flex gap-2 col-span-2 m-1 md:my-0 my-5">
              <div className="relative h-32 w-48 rounded-sm overflow-hidden">
                <Image src={item.imgURL} alt={item.title} fill="true" />
              </div>
              <div className="basis-[40rem]">
                <h3 className="font-bold mb-3">
                  {locale == "fa" ? item.title : item.titleEn}
                </h3>
                <p className="">{locale == "fa" ? item.abst : item.abst_en}</p>
              </div>
            </div>
          </Link>
        ))}

        <div className="row-start-1 row-end-4 col-start-3 bg-slate-100 p-2 shadow-md">
          <ChosenTile locale={locale} />
        </div>
      </div>
    </>
  );
};

export default Sport;
