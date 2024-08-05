import React from "react";

const ListingCardSkeleton = () => {
  return (
    <>
      <div className="flex flex-col shadow-2xl p-4 rounded-3xl animate-pulse">
        {/* Top bar */}
        <div className="flex gap-2 h-8">
          <div className="bg-[#e3e3e3]  py-1 px-2 rounded-lg font-semibold flex items-center gap-0.5 w-16"></div>
          <div className="bg-[#e3e3e3] w-32 py-1 px-2 rounded-lg"></div>
          <div className="bg-[#e3e3e3] py-1 px-2 rounded-lg w-16"></div>
        </div>
        {/* IMage */}
        <div className="flex justify-center h-full items-center py-4">
          <div
            src={""}
            className="bg-[#e3e3e3] object-contain w-full h-full rounded-3xl py-32"
          ></div>
        </div>
        {/* Info */}
        <div className="flex flex-col gap-2">
          <div className="bg-[#e3e3e3] w-14 py-1 px-2 rounded-lg h-5"></div>

          {/* Name and price */}
          <div className="flex justify-between font-semibold text-lg">
            <div className="bg-[#e3e3e3] w-14 py-1 px-2 rounded-lg h-5"></div>
            <div className="bg-[#e3e3e3] w-36 py-1 px-2 rounded-lg h-5"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingCardSkeleton;
