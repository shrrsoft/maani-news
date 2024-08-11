import Image from "next/image";

const PageNews = async ({ params }) => {
  console.log(params.id);

  const post = await fetch(`http://localhost:8000/post/${params.id}`, {
    cache: "no-store",
  }).then((res) => res.json());

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col items-center gap-10 w-[90%]">
        <h2 className="text-xl font-bold">{post.title}</h2>
        <Image src={post.imgURL} alt="" width="600" height="300" />
        <p className="text-justify leading-10"> {post.body}</p>
      </div>
      <div></div>
    </div>
  );
};

export default PageNews;
