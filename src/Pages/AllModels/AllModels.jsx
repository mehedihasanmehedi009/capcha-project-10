 import { useLoaderData } from "react-router";
import { ModelCard } from "../../components/ModelCard";
import { useState } from "react";

const AllModels = () => {
  const data = useLoaderData();
  const [moduls,setModuls]=useState(data)
  const  hendelsearch =(e)=>{
    e.preventDefault()
  const search_text = e.target.search.value
    fetch(`http://localhost:3000/search?search=${search_text}`)
  .then(res=> res.json())
  .then(data=>{
    console.log(  data)
    setModuls(data)
  })
  }


  return (
    <div className="p-4">
      <div className="text-2xl text-center font-bold">All Models</div>
      <p className="text-center">Explore 3D models.</p>
        <form onSubmit={hendelsearch} className="text-center mt-5 mb-10">
          <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search"
  
  name="search"required placeholder="Search" />

</label>
  <button className="btn btn-secondary">Search</button>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          { moduls.map((model) => (
            <ModelCard key={model._id} model={model} />
          ))}
        </div>
    </div>
  );
};

export default AllModels;
