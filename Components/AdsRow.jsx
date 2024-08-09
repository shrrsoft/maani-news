import Image from "next/image";

const AdsRow = () => {
  return (
    <div className="grid grid-cols-3 justify-items-center my-10 gap-4">
      <Image
        src="/ads/1.gif"
        alt=""
        width={250}
        height={100}
        unoptimized={true}
      />
      <Image
        src="/ads/2.gif"
        alt=""
        width={250}
        height={100}
        unoptimized={true}
      />
      <Image
        src="/ads/3.gif"
        alt=""
        width={250}
        height={100}
        unoptimized={true}
      />
    </div>
  );
};

export default AdsRow;
