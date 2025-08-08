import StatusBadge from "@/components/ui/StatusBadge";
import kebabMenu from "../../../../public/kebab-menu.svg";
import Image from "next/image";
export default function DashboardPage() {
  return (
    // className='py-7'
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
  );
}
