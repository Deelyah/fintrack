import { useEffect, useState } from "react";

interface TabNavProps {
  tabTitle: string;
  tabId: string;
  activeTab: string;
  changeTab: (tab: string) => void;
}
export default function TabNav({
  tabTitle,
  tabId,
  activeTab,
  changeTab,
}: TabNavProps) {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (tabId === activeTab) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [activeTab]);

  return (
    <div
      className={`py-3 px-7 cursor-pointer border-b ${
        isActive ? "border-[#437D8E]" : "border-transparent"
      } w-[fit-content]`}
      onClick={() => changeTab(tabId)}
    >
      <p
        className={`font-medium hover:text-[#437D8E] ${
          isActive ? "text-[#437D8E]" : "text-[#15272D9E]"
        } text-[15px] leading-5`}
      >
        {tabTitle}
      </p>
    </div>
  );
}
