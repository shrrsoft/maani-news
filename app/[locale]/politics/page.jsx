import NewsCategoryPage from "@/Components/NewsComponent/NewsCategoryPage";

const Politics = async ({ params: { locale } }) => {
   return <NewsCategoryPage locale={locale} />;

};

export default Politics;
