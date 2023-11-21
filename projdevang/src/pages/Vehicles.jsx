// Vehicles.js
import React from 'react';

const Vehicles = () => {
    const {data:vehiclesData,isLoading,error}=useGetStarWarDataQuery('vehicles');
  return (
    <div className={`vehicles-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4`}>
      {!isLoading ? (
        vehiclesData?.results?.map((vehicle) => (
          <div key={vehicle.name} className="vehicle-item bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl text-grey-2 font-bold mb-2">{vehicle.name}</h3>
            <p className="text-slate-500">Model: {vehicle.model}</p>
            <p className="text-slate-500">Top Speed: {vehicle.max_atmosphering_speed
}</p>
          </div>
        ))
      ) : (
        <div className="text-center">Loading...</div>
      )}
    </div>
  );
};

export default Vehicles;
