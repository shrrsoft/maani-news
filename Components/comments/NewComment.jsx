import { useTranslations } from "next-intl";

const NewComment = () => {
  const t = useTranslations("comment");

  return (
    <div className="md:w-[50%] md:mx-auto mx-5 border py-3 px-2">
      <span className="block font-bold mb-5">{t("NewComment")} </span>
      <form className="grid grid-cols-5 grid-rows-5 items-center" action="">
        <label
          className="text-sm row-start-1 col-span-2 md:col-span-1"
          htmlFor="">
          {t("Username")}
        </label>
        <input
          className="border border-slate-400 row-start-1 md:col-span-2 col-span-3"
          type="text"
        />
        <label
          className="text-sm row-start-2 col-span-2 md:col-span-1"
          htmlFor="">
          {t("E-mail")}
        </label>
        <input
          className="border  border-slate-400 row-start-2 md:col-span-2 col-span-3"
          type="text"
        />
        <label
          className="text-sm row-start-3 col-span-2 md:col-span-1"
          htmlFor="">
          {t("YourComment")}
        </label>
        <textarea
          name=""
          id=""
          rows="4"
          cols="60"
          className="border  border-slate-400 row-start-3 col-span-3 row-span-2 md:col-span-4"></textarea>
        <input
          type="submit"
          value={t("Submit")}
          className="row-start-5 col-span-5 bg-green-600 w-32 py-2 mt-4 mx-auto rounded-md"
        />
      </form>
    </div>
  );
};

export default NewComment;
