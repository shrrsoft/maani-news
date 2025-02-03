import NewsCategoryPage from "@/Components/NewsComponent/NewsCategoryPage";

const index = async ({ params: { locale } }) => {
  return <NewsCategoryPage locale={locale} />;
};

export default index;
