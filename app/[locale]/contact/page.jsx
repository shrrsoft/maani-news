import { FaPhoneAlt } from "react-icons/fa";
import { MdFax } from "react-icons/md";
import { PiBuildingOfficeFill } from "react-icons/pi";
import { MdAttachEmail } from "react-icons/md";

const page = ({ params: { locale } }) => {
  return (
    <div className="w-[80%] mx-auto flex flex-col gap-5 mt-8">
      <h1 className="text-2xl font-bold mb-5 ">
        {locale === "fa" ? "تماس با ما" : " Contact us"}
      </h1>
      <div className="flex">
        <MdFax className="text-2xl text-sky-900 ltr:mr-3" />
        <span className="mr-2">
          {locale === "fa" ? "فکس دبیرخانه : " : "Fax:"}
        </span>
        <span>021</span>
      </div>
      <div className="flex">
        <FaPhoneAlt className="text-2xl text-sky-900 ltr:mr-3" />
        <span className="mr-2">
          {locale === "fa" ? "روابط عمومی : " : "Public Relations:"}
        </span>
        <span>021</span>
      </div>
      <div className="flex">
        <PiBuildingOfficeFill className="text-2xl text-sky-900 ltr:mr-3" />
        <span className="mr-2">
          {locale === "fa" ? "دفتر مرکزی" : "Central Office"} :
        </span>
        <span>021</span>
      </div>
      <div className="flex">
        <MdAttachEmail className="text-2xl text-sky-900 ltr:mr-3" />
        <span className="mr-2">
          {locale === "fa" ? "ایمیل پشتیبانی" : "E-mail"} :
        </span>
        <span>support@IranianAgency.info</span>
      </div>
    </div>
  );
};

export default page;
