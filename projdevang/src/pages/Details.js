import React from "react";
// import Button from 'react'
const Details = ({ item,onClose }) => {
  return (
    <div className="bg-blue-900 w-1/2 overflow-hidden text-white p-6 rounded-lg">
      <img
        src="https://picsum.photos/650/300"
        alt="Star Wars"
        className="rounded-lg bg-cover max-w-full h-auto mb-4"
      />
      <h1 className="text-xl font-bold">{item.title}</h1>
      <p>{item.opening_crawl}</p>
      <button
        type="button"
        onClick={()=>onClose()}
        className="bg-mediumvioletred hover:cursor-pointer py-2 px-3 text-white transition-all ease-out delay-75 hover:scale-105 rounded-md hover:drop-shadow-md flex items-center"
      >
        <span className="mx-1">Close</span>
      </button>
    </div>
  );
};

export default Details;
