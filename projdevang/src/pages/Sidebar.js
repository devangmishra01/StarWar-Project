import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ setQuery }) => {
  return (
    <>
     
      <div className="absolute top-[0px] left-[0px] bg-midnightblue-100 w-full flex flex-row items-center justify-between p-5 box-border text-sm">
        <img
          className="relative w-[72px] h-9 object-cover"
          alt=""
          src="/image-6@2x.png"
        />

        <div className="flex flex-row items-center gap-4">
          <div className="relative text-center w-5 h-5  shrink-0">
            <img
              className="absolute top-0 left-10 text-slate-500 w-full h-full"
              alt=""
              src="/frame.svg"
            />
            {/* <div className="absolute  top-0 left-16  w-5 h-5  shrink-0">Search</div> */}
          </div>
          <input
            type="text"
            placeholder="Search"
            className="relative tracking-[0.5px] leading-[20px] border text-white bg-transparent border-white rounded-md pl-8 px-3 py-2"
          />
        </div>
      </div>

      <div className="absolute top-[76px] left-[0px] bg-midnightblue-200 h-[620px] flex flex-col items-start justify-start text-base text-grey-1">
        <div className="relative box-border w-56 h-[52px] hidden border-t-[1px] border-solid border-grey-stroke border-b-[1px]">
          <div className="absolute top-[14px] left-[16px] tracking-[-0.01em] leading-[24px] font-semibold">
            Settings
          </div>
        </div>
        <div className="w-[223px] h-[576px] flex flex-col items-start justify-start py-2.5 pr-3.5 pl-4 box-border gap-[10px] text-sm text-white-1">
          <div className="self-stretch rounded-md bg-mediumvioletre flex flex-row items-center justify-start gap-[49px]">
            <div className="flex-1 rounded-md flex flex-row items-center justify-center py-2 px-3">
              <Link
                to="/"
                className="flex-1 text-white hover:cursor-pointer no-underline flex flex-row items-center justify-between"
              >
                <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                  <img
                    className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/foldersimple.svg"
                  />
                  <div className="flex-1 relative tracking-[0.5px] leading-[20px] font-medium">
                    Films
                  </div>
                </div>
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src="/caretright1.svg"
                />
              </Link>
            </div>
            <img
              className="relative w-6 h-6 hidden"
              alt=""
              src="/layer-1.svg"
            />
          </div>
          {/* <div className="self-stretch rounded-md bg-ghostwhite-100 flex flex-row items-center justify-start gap-[49px] border-[1px] border-solid border-black">
            <div className="flex-1 rounded-md flex flex-row items-center justify-center py-2 pr-3 pl-7">
              <div className="flex-1 flex flex-row items-center justify-between">
                <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                  <img
                    className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/filmreel.svg"
                  />
                  <div className="flex-1 relative tracking-[0.5px] leading-[20px] font-medium">
                    Movie Name
                  </div>
                </div>
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src="/caretright1.svg"
                />
              </div>
            </div>
            <img
              className="relative w-6 h-6 hidden"
              alt=""
              src="/layer-1.svg"
            />
          </div> */}
          {/* <div className="self-stretch rounded-md flex flex-row items-center justify-start gap-[49px]">
            <div className="flex-1 rounded-md flex flex-row items-center justify-center py-2 pr-3 pl-7">
              <div className="flex-1 flex flex-row items-center justify-between">
                <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                  <img
                    className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/filmreel.svg"
                  />
                  <div className="flex-1 relative tracking-[0.5px] leading-[20px] font-medium">
                    Movie Name
                  </div>
                </div>
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src="/caretright1.svg"
                />
              </div>
            </div>
            <img
              className="relative w-6 h-6 hidden"
              alt=""
              src="/layer-1.svg"
            />
          </div> */}
          <div className="self-stretch rounded-md bg-ghostwhite-200 flex flex-row items-center justify-start gap-[49px]">
            <div className="flex-1 rounded-md flex flex-row items-center justify-center py-2 px-3">
              <Link
                to="/people"
                className="flex-1 flex text-white no-underline flex-row items-center justify-between"
              >
                <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                  <img
                    className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/foldersimple.svg"
                  />
                  <div className="flex-1 hover:cursor-pointer relative tracking-[0.5px] leading-[20px] font-medium">
                    People
                  </div>
                </div>
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src="/caretright1.svg"
                />
              </Link>
            </div>
            <img
              className="relative w-6 h-6 hidden"
              alt=""
              src="/layer-1.svg"
            />
          </div>
          <div className="self-stretch rounded-md bg-ghostwhite-200 flex flex-row items-center justify-start gap-[49px]">
            <div className="flex-1 rounded-md flex flex-row items-center justify-center py-2 px-3">
              <Link
                to="/planets"
                className="flex-1 text-white no-underline flex flex-row items-center justify-between"
              >
                <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                  <img
                    className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/foldersimple.svg"
                  />
                  <div className="flex-1 relative tracking-[0.5px] leading-[20px] font-medium">
                    Planets
                  </div>
                </div>
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src="/caretright1.svg"
                />
              </Link>
            </div>
            <img
              className="relative w-6 h-6 hidden"
              alt=""
              src="/layer-1.svg"
            />
          </div>
          <div className="self-stretch rounded-md bg-ghostwhite-200 flex flex-row items-center justify-start gap-[49px]">
            <div className="flex-1 rounded-md flex flex-row items-center justify-center py-2 px-3">
              <Link
                to="/species"
                className="flex-1 text-white no-underline flex flex-row items-center justify-between"
              >
                <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                  <img
                    className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/foldersimple.svg"
                  />
                  <div className="flex-1 relative tracking-[0.5px] leading-[20px] font-medium">
                    Species
                  </div>
                </div>
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src="/caretright1.svg"
                />
              </Link>
            </div>
            <img
              className="relative w-6 h-6 hidden"
              alt=""
              src="/layer-1.svg"
            />
          </div>
          <div className="self-stretch rounded-md bg-ghostwhite-200 flex flex-row items-center justify-start gap-[49px]">
            <div className="flex-1 rounded-md flex flex-row items-center justify-center py-2 px-3">
              <Link
                to="/starships"
                className="flex-1 text-white no-underline
               flex flex-row items-center justify-between"
              >
                <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                  <img
                    className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/foldersimple.svg"
                  />
                  <div className="flex-1 relative tracking-[0.5px] leading-[20px] font-medium">
                    Starships
                  </div>
                </div>
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src="/caretright1.svg"
                />
              </Link>
            </div>
            <img
              className="relative w-6 h-6 hidden"
              alt=""
              src="/layer-1.svg"
            />
          </div>
          <div className="self-stretch rounded-md bg-ghostwhite-200 flex flex-row items-center justify-start gap-[49px]">
            <div className="flex-1 rounded-md flex flex-row items-center justify-center py-2 px-3">
              <Link
                to="/vehicles"
                className="flex-1 text-white no-underline flex flex-row items-center justify-between"
              >
                <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                  <img
                    className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/foldersimple.svg"
                  />
                  <div className="flex-1 relative tracking-[0.5px] leading-[20px] font-medium">
                    Vehicles
                  </div>
                </div>
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src="/caretright1.svg"
                />
              </Link>
            </div>
            <img
              className="relative w-6 h-6 hidden"
              alt=""
              src="/layer-1.svg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
