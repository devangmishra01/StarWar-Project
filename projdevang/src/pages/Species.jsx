// Species.js
import React from 'react';
import { useGetStarWarDataQuery } from '../services/StartWars';

const Species = () => {

   const {data:speciesData,error,isLoading}=useGetStarWarDataQuery('species');
  return (
    <div className={`species-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4`}>
      {!isLoading  ? (
        speciesData?.results?.map((specie,index) => (
          <div key={index} className="specie-item bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl text-grey-2 font-bold mb-2">{specie.name}</h3>
            <p className="text-slate-500">Homeworld: {specie.homeworld}</p>
            <p className="text-slate-500">Lifespan: {specie.lifespan}</p>
          </div>
        ))
      ) : (
        <div className="text-center">Loading...</div>
      )}
    </div>
  );
};

export default Species;
