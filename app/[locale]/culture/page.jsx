import NewsCategoryPage from "@/Components/NewsComponent/NewsCategoryPage";


const Culture = async ({ params: { locale } }) => {
  return <NewsCategoryPage locale={locale} />;
};

export default Culture;
