// Starships.js
import React from 'react';
import { useGetStarWarDataQuery } from '../services/StartWars';

const Starships = () => {
    const {data:starshipsData,isLoading,error}=useGetStarWarDataQuery('starships')
  return (
    <div className={`starships-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4`}>
      {!isLoading ? (
        starshipsData?.results?.map((starship) => (
          <div key={starship.name} className="starship-item bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl text-grey-2 font-bold mb-2">{starship.name}</h3>
            <p className="text-slate-500">Model: {starship.model}</p>
            <p className="text-slate-500">Hyperdrive Rating: {starship.hyperdriveRating}</p>
          </div>
        ))
      ) : (
        <div className="text-center">Loading...</div>
      )}
    </div>
  );
};

export default Starships;
