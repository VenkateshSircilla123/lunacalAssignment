import { useEffect, useRef, useState } from "react";

let allTabs = [
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

export const AnimatedTabs2 = () => {
  const tabsRef = useRef([]);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  useEffect(() => {
    if (activeTabIndex === null) {
      return;
    }

    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    };

    setTabPosition();
  }, [activeTabIndex]);

  return (
    <div className="flew-row relative mx-auto flex justify-between h-12 rounded-2xl bg-[url('/bgTabBar.png')] bg-cover bg-center px-2 backdrop-blur-sm">
      <span
        className="absolute bottom-0 top-0 -z-10 flex overflow-hidden w-1/3 rounded-2xl py-2 transition-all duration-300"
        style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
      >
        <span className="h-full w-full rounded-2xl bg-gray-200/30" />
      </span>
      {allTabs.map((tab, index) => {
        const isActive = activeTabIndex === index;

        return (
          <button
            key={index}
            ref={(el) => (tabsRef.current[index] = el)}
            className={`${
              isActive ? `` : `hover:text-neutral-300`
            } my-auto cursor-pointer select-none rounded-2xl px-4 text-center font-light text-white w-1/3`}
            onClick={() => setActiveTabIndex(index)}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};
