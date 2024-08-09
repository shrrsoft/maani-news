import Link from "next/link";

const ChosenTile = (props) => {
  return (
    <>
      <h3 className="font-bold text-lg">اخبار برگزیده</h3>
      <ul
        type="circle"
        className="list-disc pr-5 font-bold text-right text-sm py-4 flex flex-col gap-3 ">
        <li>
          <Link href="#">شلیک 20 موشک از سرزمین های اشغالی به لبنان</Link>
        </li>
        <li>
          <Link href="#">غرق‌شدگی؛ تراژدی بی‌پایان سواحل</Link>
        </li>
        <li>
          <Link href="#">عرضه نظریه نوین پژوهشگران ایرانی به ۱۲ کشور</Link>
        </li>
        <li>
          <Link href="#">کمبود کارت‌ بلیت مترو برطرف شد</Link>
        </li>
        <li>
          <Link href="#">داوران بوکس ایران راهی پاریس شدند</Link>
        </li>
        <li>
          <Link href="#">ترامپ: تایوان صنعت تراشه را از آمریکا ربوده است</Link>
        </li>
        <li>
          <Link href="#">شیوه‌نامه انتخاب و انتصاب مدیران مدارس ابلاغ شد</Link>
        </li>
        <li>
          <Link href="#">داوود محمدی دادستان دیوان محاسبات شد</Link>
        </li>
        <li>
          <Link href="#">پذیرایی با طعم مرگ</Link>
        </li>
      </ul>
    </>
  );
};

export default ChosenTile;
