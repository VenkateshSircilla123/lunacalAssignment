import { useEffect, useRef, useState } from "react";

const tabsData = [
  {
    label: "About Me",
    content: [
      `Hello! I'm Dave, your sales rep here from Salesforce. I've been
          working at this awesome company for 3 years now.`,
      ` I was
          born and raised in Albany, NY& have been living in Santa Carla for the
          past 10 years my wife Tiffany and my 4 year old twin daughters- Emma
          and Ella. Both of them are just starting school, so my calender is
          usually blocked between 9-10 AM. This is a...`,
    ],
  },
  {
    label: "Experiences",
    content: [
      `Hello! I'm Dave, your sales rep here from Salesforce. I've been
          working at this awesome company for 3 years now.`,
      ` I was
          born and raised in Albany, NY& have been living in Santa Carla for the
          past 10 years my wife Tiffany and my 4 year old twin daughters- Emma
          and Ella. Both of them are just starting school, so my calender is
          usually blocked between 9-10 AM. This is a...`,
    ],
  },
  {
    label: "Recommended",
    content: [
      `Hello! I'm Dave, your sales rep here from Salesforce. I've been
          working at this awesome company for 3 years now.`,
      ` I was
          born and raised in Albany, NY& have been living in Santa Carla for the
          past 10 years my wife Tiffany and my 4 year old twin daughters- Emma
          and Ella. Both of them are just starting school, so my calender is
          usually blocked between 9-10 AM. This is a...`,
    ],
  },
];

export function Tabs() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      console.log(currentTab?.offsetLeft, currentTab?.clientWidth);
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <div>
      <div className="w-full relative bg-[#171717] rounded-2xl px-1">
        <div className="flex space-x-3 justify-between">
          {tabsData.map((tab, idx) => {
            return (
              <button
                key={idx}
                ref={(el) => (tabsRef.current[idx] = el)}
                className="pt-3 pb-3 px-12 z-20"
                onClick={() => setActiveTabIndex(idx)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        <span
          className="absolute bottom-0 block h-[80%] w-1/3 top-1/2 transform -translate-y-1/2 bg-[#28292F] rounded-2xl transition-all duration-300"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        />
      </div>
      <div className="py-4">
        <p>
          {tabsData[activeTabIndex].content[0]}
          <br />
          <br />
          {tabsData[activeTabIndex].content[1]}
        </p>
      </div>
    </div>
  );
}
