import React from "react";

const Card = ({item,handleCardClick}) => {

  return (
    <div onClick={()=>handleCardClick(item)} className="flex-1 flex flex-col items-start justify-start gap-[4px]">
      <div className="self-stretch relative rounded-lg bg-white-2 h-40 "  style={{background:`url('https://picsum.photos/seed/200/300')`}}/>
      <div className="self-stretch rounded-lg bg-ghostwhite-300 flex flex-row items-center justify-start py-3 pr-3 pl-4">
        <div className="flex-1 flex flex-row items-center justify-between">
          <div className="w-[200px] flex flex-row items-center justify-start gap-[12px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/filmreel5.svg"
            />
            <div className="relative tracking-[0.5px] leading-[20px] font-medium">
             {item.title}
            </div>
          </div>
          <div className="rounded-md bg-ghostwhite-300 flex flex-row items-start justify-start p-1">
            <div className="flex flex-row items-center justify-center gap-[17.45px]">
              <img
                className="relative w-6 h-6"
                alt=""
                src="/componenticonic-more1.svg"
              />
              <img
                className="relative w-[17.45px] h-[17.45px] hidden"
                alt=""
                src="/layer-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
