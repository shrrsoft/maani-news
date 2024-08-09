import Image from "next/image";

const AdsCol = () => {
  return (
    <div className="flex flex-col size-44 gap-6 mb-20 mt-10 mx-auto">
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

export default AdsCol;
