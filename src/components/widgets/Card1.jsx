import React, { useState } from "react";
import { Tabs } from "../AnimatedTabs";
import { AnimatedTabs2 } from "../AnimatedTabs2";

const Card1 = () => {
  return (
    <div className="sha flex bg-[#3d444c] rounded-lg pr-4 pb-3 ">
      <div className="relative flex flex-col mr-4 pl-2 w-[8%] pt-3">
        <img src="/questionMark.png" alt="" className="w-[30px]" />
        <img src="/grid.png" alt="" className="mt-14 w-[30px]" />
      </div>
      <div className="pt-3 pr-3 w-[92%]">
        <AnimatedTabs2 />
        <div className="mt-4 text-[#969696]">
          <p>
            Hello! I'm Dave, your sales rep here from Salesforce. I've been
            working at this awesome company for 3 years now.
          </p>

          <br />
          <p>
            I was born and raised in Albany, NY& have been living in Santa Carla
            for the past 10 years my wife Tiffany and my 4 year old twin
            daughters- Emma and Ella. Both of them are just starting school, so
            my calender is usually blocked between 9-10 AM. This is a...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card1;
