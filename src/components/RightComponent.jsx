import React from "react";
import Card1 from "./widgets/Card1";
import Card2 from "./widgets/Card2";
const RightComponent = () => {
  return (
    <div className="w-1/2 mr-5">
      <Card1 />
      <div className="flex justify-center ">
        {/* <div className="w-[80%] h-2 mt-4 mb-4 rounded-full bg-gray-400"></div> */}
        <img src="/line.png" alt="" className="mt-4 mb-3" />
      </div>
      <Card2 />
    </div>
  );
};

export default RightComponent;
