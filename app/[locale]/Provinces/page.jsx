import NewsCategoryPage from "@/Components/NewsComponent/NewsCategoryPage";

const Provinces = async ({ params: { locale } }) => {
  return <NewsCategoryPage locale={locale} />;
};

export default Provinces;
