import { useLoaderData } from "react-router";
import Banner from "../../components/Banner";
import { ModelCard } from "../../components/ModelCard";
const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="mt-100">
      <Banner />

      <div className="text-center  text-xl font-bold mt-30">Latest Model</div>

      <div className="p-4 grid grid-cols-1 mt-40  md:grid-cols-3 lg:grid-cols-4 gap-3 ">
        {data.map((model) => (
          <ModelCard key={model._id} model={model} />
        ))}
      </div>
    </div>
  );
};

export default Home;
