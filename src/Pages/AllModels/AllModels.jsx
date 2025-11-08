 import { useLoaderData } from "react-router";
import { useState, useEffect } from "react";
import { ModelCard } from "../../components/ModelCard";

const AllModels = () => {
  const data = useLoaderData();
  const [search, setSearch] = useState("");
  const [filteredModels, setFilteredModels] = useState(data);
  const [loading, setLoading] = useState(false);

  // search effect
  useEffect(() => {
    setLoading(true);

    // simulate delay (like server searching)
    const timer = setTimeout(() => {
      const results = data.filter((model) =>
        model.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredModels(results);
      setLoading(false);
    }, 600); // 0.6 sec delay

    return () => clearTimeout(timer);
  }, [search, data]);

  return (
    <div className="p-4">
      {/* Title */}
      <div className="text-2xl text-center font-bold">All Models</div>
      <p className="text-center mb-6">Explore 3D models.</p>

      {/* 🔍 Search Box */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search models..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      {/* 🌀 Loading Spinner */}
      {loading ? (
        <div className="flex justify-center items-center py-10">
          <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
      ) : filteredModels.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredModels.map((model) => (
            <ModelCard key={model._id} model={model} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No models found.</p>
      )}
    </div>
  );
};

export default AllModels;
