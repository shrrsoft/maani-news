import AdsRow from "@/Components/ads/AdsRow";
import ChosenTile from "@/Components/NewsComponent/ChosenTile";
import Slider from "@/Components/NewsComponent/Slider";
import SmallTile from "@/Components/NewsComponent/SmallTile";
import Tile from "@/Components/NewsComponent/Tile";
import { post } from "@/data/db";

export function generateStaticParams() {
  return [{ locale: "fa" }];
}

export default async function Home({ params: { locale } }) {
  return (
    <main className="shadow-xl p-2 lg:w-full w-[90%] mx-auto">
      <div className="lg:grid grid-cols-4 gap-4 px-2 text-center mt-10 lg:mt-0  ">
        <div className="col-span-2 bg-slate-100">
          <Slider locale={locale} />
        </div>
        <div className="flex flex-col justify-between gap-2 mt-10 lg:mt-0">
          {post
            .map((item) => (
              <SmallTile key={item.id} item={item} locale={locale} />
            ))
            .slice(0, 4)}
        </div>

        <div className=" my-10 lg:my-0">
          <ChosenTile locale={locale} />
        </div>
        {post.map((item) => (
          <div
            key={item.id}
            className="shadow-lg shadow-slate-400 my-8 lg:my-0 ">
            <Tile item={item} locale={locale} />
          </div>
        ))}
      </div>
      <AdsRow />
    </main>
  );
}
