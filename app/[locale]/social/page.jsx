import NewsCategoryPage from "@/Components/NewsComponent/NewsCategoryPage";

const Social = async ({ params: { locale } }) => {
  return <NewsCategoryPage locale={locale} />;
};

export default Social;
