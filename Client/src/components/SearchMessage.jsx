import React from "react";

const SearchMessage = (props) => {
  const { message } = props;
  return (
    <>
      <div className="flex col-span-3 items-center justify-center h-full pt-10 md:pb-0 pb-10 text-xl">
        {message}
      </div>
    </>
  );
};

export default SearchMessage;
