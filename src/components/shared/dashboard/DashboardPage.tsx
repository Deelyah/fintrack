import StatusBadge from "@/components/ui/StatusBadge";
import kebabMenu from "../../../../public/kebab-menu.svg";
import ProfileImages from "../../../../public/profile-pictures.svg";
import Image from "next/image";
import { useState } from "react";
import TabNav from "@/components/ui/tab/TabNav";
import TabNavWrapper from "@/components/ui/tab/TabNavWrapper";
import OverviewTab from "./OverviewTab";
import AvatarGroup from "@/components/ui/AvatarGroup";
export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const users = [
    { name: "Ava", imageUrl: "https://i.pravatar.cc/100?img=1" },
    { name: "Liam", imageUrl: "https://i.pravatar.cc/100?img=2" },
    { name: "Noah", imageUrl: "https://i.pravatar.cc/100?img=3" },
    { name: "Olivia", imageUrl: "https://i.pravatar.cc/100?img=4" },
    { name: "Emma", imageUrl: "https://i.pravatar.cc/100?img=5" },
    { name: "Olivia", imageUrl: "https://i.pravatar.cc/100?img=4" },
    { name: "Emma", imageUrl: "https://i.pravatar.cc/100?img=5" },
    { name: "Olivia", imageUrl: "https://i.pravatar.cc/100?img=4" },
    { name: "Emma", imageUrl: "https://i.pravatar.cc/100?img=5" },
  ];
  return (
    // className='py-7'
    <div>
      <div className='flex'>
        <div className='flex items-center'>
          <h3 className='font-bold text-[34px] text-[#1B2528] mr-4'>
            Wallet Ledger
          </h3>
          <StatusBadge variant='positive' statusText='Active' />
        </div>
        <div className='flex items-center ml-auto'>
          <button className='bg-[#4B8B9F] text-[15px] font-medium leading-5 mr-3 py-2 px-4.5 rounded-2xl cursor-pointer'>
            Share
          </button>
          <button className='flex justify-center items-center w-9 h-9 rounded-full border-[1.5px] border-[#49656E33] cursor-pointer'>
            <Image src={kebabMenu} alt='kebab' />
          </button>
        </div>
      </div>
      <div className='flex items-center my-7'>
        <AvatarGroup users={users} />
      </div>
      {/* <div>
        <Image src={ProfileImages} alt='profiles' />
        <p className='text-[#15272D9E] text-[15px] leading-5 ml-3'>
          Ava, Liam, Noah +12 others
        </p>
      </div> */}

      <TabNavWrapper>
        <TabNav
          tabId='overview'
          tabTitle='Overview'
          activeTab={activeTab}
          changeTab={tab => {
            setActiveTab(tab);
          }}
        />
        <TabNav
          tabId='transactions'
          tabTitle='Transactions'
          activeTab={activeTab}
          changeTab={tab => {
            setActiveTab(tab);
          }}
        />
      </TabNavWrapper>
      <OverviewTab />
    </div>
  );
}
