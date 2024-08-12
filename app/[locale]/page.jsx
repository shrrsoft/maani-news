import AdsRow from "@/Components/ads/AdsRow";
import ChosenTile from "@/Components/NewsComponent/ChosenTile";
import Slider from "@/Components/NewsComponent/Slider";
import SmallTile from "@/Components/NewsComponent/SmallTile";
import Tile from "@/Components/NewsComponent/Tile";

export default async function Home({ params: { locale } }) {
  const data = await fetch("http://localhost:8000/post", {
    cache: "force-cache",
  }).then((res) => res.json());

  return (
    <main className="shadow-xl p-2 lg:w-full w-[90%] mx-auto">
      <div className="lg:grid grid-cols-4 gap-4 px-2 text-center mt-10 lg:mt-0  ">
        <div className="col-span-2 bg-slate-100">
          <Slider locale={locale} />
        </div>
        <div className="flex flex-col justify-between gap-2 mt-10 lg:mt-0">
          {data
            .map((item) => (
              <SmallTile
                key={item.id}
                id={item.id}
                imgURL={item.imgURL}
                title={item.title}
                titleEn={item.titleEn}
                locale={locale}
              />
            ))
            .slice(0, 4)}
        </div>

        <div className="bg-slate-100 shadow-md my-10 lg:my-0">
          <ChosenTile locale={locale} />
        </div>
        {data.map((item) => (
          <div key={item.id} className=" bg-slate-100 shadow-md my-8 lg:my-0 ">
            <Tile
              id={item.id}
              imgURL={item.imgURL}
              title={item.title}
              titleEn={item.titleEn}
              abst={item.abst}
              abst_en={item.abst_en}
              locale={locale}
            />
          </div>
        ))}
      </div>
      <AdsRow />
    </main>
  );
}
