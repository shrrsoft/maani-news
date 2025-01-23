import { FaPhoneAlt } from "react-icons/fa";
import { MdFax } from "react-icons/md";
import { PiBuildingOfficeFill } from "react-icons/pi";
import { MdAttachEmail } from "react-icons/md";
import Link from "next/link";

const page = ({ params: { locale } }) => {
  return (
    <div className="w-[80%] mx-auto flex flex-col gap-5 mt-8">
      <h1 className="text-2xl font-bold mb-5 ">
        {locale === "fa" ? "تماس با ما" : " Contact us"}
      </h1>
      <div className="flex">
        <MdFax className="text-2xl text-inherit ltr:mr-3" />
        <span className="mr-2">
          {locale === "fa" ? "فکس دبیرخانه : " : "Fax:"}
        </span>
        <Link href="tell:+9821">021</Link>
      </div>
      <div className="flex">
        <FaPhoneAlt className="text-2xl text-inherit ltr:mr-3" />
        <span className="mr-2">
          {locale === "fa" ? "روابط عمومی : " : "Public Relations:"}
        </span>
        <Link href="tell:+9821">021</Link>
      </div>
      <div className="flex">
        <PiBuildingOfficeFill className="text-2xl text-inherit ltr:mr-3" />
        <span className="mr-2">
          {locale === "fa" ? "دفتر مرکزی" : "Central Office"} :
        </span>
        <Link href="tell:+9821">021</Link>
      </div>
      <div className="flex">
        <MdAttachEmail className="text-2xl text-inherit ltr:mr-3" />
        <span className="mr-2">
          {locale === "fa" ? "ایمیل پشتیبانی" : "E-mail"} :
        </span>
        <Link href="mailto:shrrsoft@yahoo.com">
          support@MaaninewsAgency.info
        </Link>
      </div>
    </div>
  );
};

export default page;
