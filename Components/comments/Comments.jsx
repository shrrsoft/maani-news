"use client";

import clsx from "clsx";
import { useState } from "react";
import { BiLike, BiDislike } from "react-icons/bi";
import { MdQuestionAnswer } from "react-icons/md";
import { useTranslations } from "next-intl";

const Comments = ({ locale }) => {
  const t = useTranslations("comment");

  const [like, setLike] = useState(0);
  const [isLike, setIsLike] = useState(false);
  const handleLike = () => {
    if (isLike === true) {
      setLike(like - 1);
      setIsLike(false);
    } else {
      setLike(like + 1);
      setIsLike(true);
      if (isDisLike === true) {
        setDisLike(disLike - 1);
        setIsDisLike(false);
      }
    }
  };
  const [disLike, setDisLike] = useState(0);
  const [isDisLike, setIsDisLike] = useState(false);
  const handleDisLike = () => {
    if (isDisLike === true) {
      setDisLike(disLike - 1);
      setIsDisLike(false);
    } else {
      setDisLike(disLike + 1);
      setIsDisLike(true);
      if (isLike === true) {
        setLike(like - 1);
        setIsLike(false);
      }
    }
  };

  return (
    <div className="md:mx-auto mt-5 md:w-[50%] mx-5">
      <span className="block mb-5 font-bold">{t("Comments")}</span>
      <div className="border rounded-md p-4 my-5">
        <div className="flex justify-between mb-4">
          <span className="text-sm">
            {locale === "fa" ? "نام کاربری گفت" : "Username said:"}
          </span>
          <span className="text-xs">
            {locale === "fa" ? "تاریخ و ساعت ثبت دیدگاه" : "Date and Time"}
          </span>
        </div>
        <div className="flex">
          <p className="text-sm text-justify">
            {locale === "fa"
              ? "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "}
          </p>
        </div>
        <div className="flex mt-2 gap-1 flex-row-reverse items-baseline">
          <BiLike
            onClick={handleLike}
            className={clsx("text-lg", { "text-green-600": isLike === true })}
          />
          {like}
          <BiDislike
            onClick={handleDisLike}
            className={clsx("ml-4 ltr:ml-0 ltr:mr-4 text-lg", {
              "text-rose-600": isDisLike === true,
            })}
          />
          {disLike}
          <MdQuestionAnswer className="ml-4 ltr:ml-0 ltr:mr-4" />0
        </div>
      </div>
    </div>
  );
};

export default Comments;
