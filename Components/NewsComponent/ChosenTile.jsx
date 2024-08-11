import Link from "next/link";

const ChosenTile = async ({ locale }) => {
  const data = await fetch("http://localhost:8000/post", {
    cache: "force-cache",
  }).then((res) => res.json());
  return (
    <>
      <h3 className="font-bold text-lg mb-3">
        {locale == "fa" ? "اخبار برگزیده" : "Collected News"}
      </h3>
      <ul
        type="circle"
        className="list-disc rtl:pr-5 font-bold rtl:text-right ltr:text-left ltr:pl-5 text-sm py- flex flex-col gap-3 ">
        {data
          .map((item) => (
            <li key={item.id}>
              <Link target="_blank" href={`/News/${item.id}`}>
                {locale == "fa" ? item.title : item.titleEn}
              </Link>
            </li>
          ))
          .slice(0, 6)}
      </ul>
    </>
  );
};

export default ChosenTile;
