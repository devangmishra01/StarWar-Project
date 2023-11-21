// Planets.js
import React from 'react';
import { useGetStarWarDataQuery } from '../services/StartWars';

const Planets = () => {
    const {data:planetsData,isLoading,error}=useGetStarWarDataQuery('planets')
  return (
    <div className={`planets-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4`}>
      {!isLoading  ? (
        planetsData?.results?.map((planet) => (
          <div key={planet.name} className="planet-item bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl text-grey-2 font-bold mb-2">{planet.name}</h3>
            <p className="text-slate-500">Climate: {planet.climate}</p>
            <p className="text-slate-500">Gravity: {planet.gravity}</p>
          </div>
        ))
      ) : (
        <div className="text-center">Loading...</div>
      )}
    </div>
  );
};

export default Planets;
