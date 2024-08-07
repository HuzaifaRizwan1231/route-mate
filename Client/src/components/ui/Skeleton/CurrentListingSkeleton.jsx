import React from "react";
import { Link } from "react-router-dom";

const CurrentListingSkeleton = () => {
  return (
    <>
      {/* Card Item */}
      <div className="flex w-4/5 mx-auto border border-gray-200 shadow-lg p-4 rounded-3xl animate-pulse">
        {/* Card Info Section */}
        <div className="w-1/2 flex flex-col gap-4">
          {/* Top bar */}
          <div className="flex gap-2">
            <div className="w-16 h-8 bg-[#e3e3e3] py-1 px-2 rounded-lg font-semibold flex items-center gap-0.5"></div>
            <div className="w-16 h-8 bg-[#e3e3e3] py-1 px-2 rounded-lg font-semibold flex items-center gap-0.5"></div>
          </div>
          {/* Info grid */}
          <div className="grid grid-cols-2 gap-7">
            {Array(6)
              .fill(0)
              .map(() => (
                <>
                  {/* One Item */}
                  <div className="flex flex-col gap-1">
                    <div className="text-sm w-14 h-5 rounded-md bg-[#e3e3e3] font-semibold"></div>
                    <div className="font-semibold w-36 h-7 rounded-md bg-[#e3e3e3] text-lg"></div>
                  </div>
                </>
              ))}
          </div>
        </div>
        {/* Card Map Section */}
        <div className="w-1/2 bg-[#e3e3e3] rounded-3xl"></div>
      </div>
    </>
  );
};

export default CurrentListingSkeleton;
