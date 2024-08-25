import React from "react";

const ListingDetailSkeleton = () => {
  return (
    <>
      <div className="h-full bg-white animate-pulse">
        <div className="h-1/2 m-3 bg-[#e3e3e3] rounded-3xl"></div>
        <div className="h-1/2 py-4 px-8 flex flex-col gap-4">
          <div>
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-2xl bg-[#e3e3e3] rounded-lg w-40 h-7"></h1>

              <div className="bg-[#e3e3e3] w-24 h-8 rounded-lg"></div>
            </div>
            <div className="grid grid-cols-2 gap-7 py-4">
              {Array(4)
                .fill(0)
                .map(() => (
                  <>
                    {/* One Item */}
                    <div className="flex flex-col gap-1">
                      <div className="text-sm bg-[#e3e3e3] w-14 h-5 rounded-lg font-semibold"></div>
                      <div className="font-semibold text-lg bg-[#e3e3e3] w-20 h-6 rounded-lg"></div>
                    </div>
                  </>
                ))}
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-2xl bg-[#e3e3e3] rounded-lg w-40 h-7"></h1>
              <div className="bg-[#e3e3e3] w-24 h-8 rounded-lg"></div>
            </div>
            <div className="grid grid-cols-2 gap-7 py-4">
              {Array(2)
                .fill(0)
                .map(() => (
                  <>
                    {/* One Item */}
                    <div className="flex flex-col gap-1">
                      <div className="text-sm bg-[#e3e3e3] w-14 h-5 rounded-lg font-semibold"></div>
                      <div className="font-semibold text-lg bg-[#e3e3e3] w-20 h-6 rounded-lg"></div>
                    </div>
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingDetailSkeleton;
