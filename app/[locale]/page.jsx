import AdsRow from "@/Components/AdsRow";
import Slider from "@/Components/NewsComponent/Slider";
import SmallTile from "@/Components/NewsComponent/SmallTile";
import Tile from "@/Components/NewsComponent/Tile";
import { Link } from "@/navigation";

export default async function Home() {
  const data = await fetch("http://localhost:8000/post", {
    cache: "force-cache",
  }).then((res) => res.json());

  return (
    <main className="shadow-xl p-2 lg:w-full w-[90%] mx-auto">
      <div className="lg:grid grid-cols-4 gap-4 px-2 text-center mt-10 lg:mt-0  ">
        <div className="col-span-2 bg-slate-100">
          <Slider />
        </div>
        <div className="flex flex-col justify-between gap-2 mt-10 lg:mt-0">
          {data
            .map((item) => (
              <SmallTile
                key={item.id}
                imgURL={item.imgURL}
                title={item.title}
                id={item.id}
              />
            ))
            .slice(0, 4)}
        </div>

        <div className="bg-slate-100 shadow-md my-10 lg:my-0">
          <h3 className="font-bold text-lg">اخبار برگزیده</h3>
          <ul
            type="circle"
            className="list-disc pr-5 font-bold text-right text-sm py- flex flex-col gap-3 ">
            {data
              .map((item) => (
                <li key={item.id}>
                  <Link href={`/News/${item.id}`}>{item.title}</Link>
                </li>
              ))
              .slice(0, 6)}
          </ul>
        </div>
        {data.map((item) => (
          <div key={item.id} className=" bg-slate-100 shadow-md my-8 lg:my-0 ">
            <Tile
              id={item.id}
              imgURL={item.imgURL}
              title={item.title}
              abst={item.abst}
              body="تهران- ایرنا- برابری جنسیتی در المپیک از دوره‌های نخست معنایی نداشت اما اکنون به یکی از مهمترین شعارهای بازی‌های المپیک تبدیل شده است."
            />
          </div>
        ))}
      </div>
      <AdsRow />
    </main>
  );
}
