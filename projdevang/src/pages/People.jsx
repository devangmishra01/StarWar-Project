// People.js
import React from 'react';
import { useGetStarWarDataQuery } from '../services/StartWars';

const People = () => {
    const {data:peopleData,isLoading,error}=useGetStarWarDataQuery('people')

  return (
    <div className={`people-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-5 gap-4`}>
      {!isLoading ? (
        peopleData?.results?.map((person, index) => (
          <div key={index} className="person-item bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl text-grey-2 font-bold mb-2">{person.name}</h3>
            <p className="text-slate-500">Height: {person.height}</p>
            <p className="text-slate-500">Mass: {person.mass}</p>
          </div>
        ))
      ) : (
        <div className="text-center">Loading...</div>
      )}
    </div>
  );
};

export default People;
