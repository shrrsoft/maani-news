import NewsCategoryPage from "@/Components/NewsComponent/NewsCategoryPage";

const Sport = async ({ params: { locale } }) => {
  return <NewsCategoryPage locale={locale} />;
};

export default Sport;
