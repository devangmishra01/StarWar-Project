import { Link, Routes,Route, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import { useGetStarWarDataQuery } from "../services/StartWars";
import Films from "./Films";
import People from "./People";
import Planets from "./Planets";
import Species from "./Species";
import Starships from "./Starships";
import Vehicles from "./Vehicles";

const Dashboard = () => {
 const location =useLocation()
 function formatPath(path) {
  // Check if path is defined
  if (typeof path !== 'undefined') {
    // Remove leading '/'
    const trimmedPath = path.replace(/^\//, '');

    // Capitalize the first letter
    const formattedPath = trimmedPath
      .split('/')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');

    return formattedPath;
  } else {
    // Return an empty string or handle the case when path is undefined
    return '';
  }
}

//  console.log(location.pa)
 
  return (
    <div className="relative [background:linear-gradient(#03123d,_#03123d),_linear-gradient(251.62deg,_#071047,_#fa1c8d)] w-full h-[696px] overflow-hidden text-left text-xs text-white-1 font-heading-semi-bold">
      <Sidebar  />
      <div className="absolute top-[77px] left-[220px]  w-full flex flex-col items-start justify-start text-xl">
        <div className="w-full flex flex-col items-start justify-center py-3 px-5 box-border">
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="relative leading-[28px] font-semibold">{formatPath(location.pathname)}</div>
            <div className="flex flex-row items-center justify-start text-center text-sm text-grey-2">
              <div className="relative w-[100px] h-8">
                <img
                  className="absolute h-full w-[68%] top-[0%] right-[32%] bottom-[0%] left-[0%] rounded-tl rounded-tr-none rounded-br-none rounded-bl max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/horizontal-grouped-icon-tab.svg"
                />
                <div className="absolute top-[18.75%] left-[28%] tracking-[0.5px] leading-[20px] font-medium">
                  Grid
                </div>
                <img
                  className="absolute h-full w-[32%] top-[0%] right-[0%] bottom-[0%] left-[68%] rounded-tl-none rounded-tr rounded-br rounded-bl-none max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/horizontal-grouped-icon-tab1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-start justify-start text-sm">
          <div className="flex flex-col items-center justify-start  pt-2.5 px-0 pb-5">
            <div className=" flex flex-col items-center justify-start gap-[20px]">
              <Routes>
                <Route path="/" element={<Films/>} />
                {/* <Route path="/films/:id" element={<Details />} /> */}
                <Route path="/people" element={<People />} />
                <Route path="/planets" element={<Planets />} />
                <Route path="/species" element={<Species />} />
                <Route path="/starships" element={<Starships />} />
                <Route path="/vehicles" element={<Vehicles />} />

              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
