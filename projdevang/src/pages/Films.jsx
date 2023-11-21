import React, { useEffect, useState } from "react";
import { useGetStarWarDataQuery } from "../services/StartWars";
import Card from "./Card";
import Details from "./Details";


const Films = () => {
    
  const [apiData, setApiData] = useState(null);
  const { data, error, isLoading } = useGetStarWarDataQuery('films');
  useEffect(() => {
    if (isLoading) {
      console.log(isLoading);
    }
    console.log(isLoading);
    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
      setApiData(data);
    }
  }, [isLoading, error, data]);

  const [showDetails, setShowDetails] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCardClick = (item) => {
    setShowDetails(true);
    setSelectedItem(item);
    console.log("jhelp: card clicked");
  };

  const handleDetailsClose = () => {
    setShowDetails(false);
    setSelectedItem(null);
  };
  return (
    <>
      {!showDetails && (
        <div
          className="grid grid-cols-2 overflow-x-hidden md:grid-cols-3 lg:grid-cols-4 gap-6 px-5"
          style={{ maxHeight: "500px", overflowY: "auto" }}
        >
          {!isLoading == true ? (
            apiData?.results?.map((item, index) => (
              <div
                className="text-white hover:cursor-pointer no-underline"
                key={index}
              >
            
                <Card item={item} handleCardClick={handleCardClick} />
              </div>
            ))
          ) : (
            <div className="text-center">Loading...</div>
          )}
        </div>
      )}
      {showDetails && selectedItem && (
        <Details item={selectedItem} onClose={handleDetailsClose} />
      )}
    </>
  );
};

export default Films;
