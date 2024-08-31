import AdsCol from "@/Components/ads/AdsCol";
import ChosenTile from "@/Components/NewsComponent/ChosenTile";
import NewComment from "@/Components/comments/NewComment";
import Comments from "@/Components/comments/Comments";

const Layout = ({ children, params: { locale } }) => {
  return (
    <>
      <div className=" md:grid grid-cols-5 gap-4 md:w-full w-[90%] mx-auto ">
        <div className="p-1 py-2 shadow-md md:flex col-start-2 gap-2 col-span-3 m-1 md:my-0 my-5">
          {children}
        </div>
        <div className="col-start-5 p-2 ">
          <AdsCol />
        </div>
        <div className="col-start-1 row-start-1 p-2 ">
          <ChosenTile locale={locale} />
        </div>
      </div>
      <Comments locale={locale} />
      <NewComment />
    </>
  );
};

export default Layout;
