const News = async () => {
  const data = await fetch("http://localhost:8000/post", {
    cache: "force-cache",
  }).then((res) => res.json());
  console.log(data);
  data.map((item) => console.log(item.title));

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default News;
