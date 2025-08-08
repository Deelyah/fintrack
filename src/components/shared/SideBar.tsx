export default function SideBar() {
  return (
    <aside className='py-7 pl-12 w-[320px]'>
      <div className='bg-[#38677629] rounded-2xl'>
        <p className='py-2 px-4.5 text-[#3A6C7B] text-[15px] leading-5 font-medium cursor-pointer'>
          Dashboard
        </p>
      </div>
      <div className='hover:bg-[#38677610] rounded-2xl'>
        <p className='py-2 px-4.5 text-[#1B2528] text-[15px] leading-5 font-medium cursor-pointer'>
          Transactions
        </p>
      </div>
      <div className='hover:bg-[#38677610] rounded-2xl'>
        <p className='py-2 px-4.5 text-[#1B2528] text-[15px] leading-5 font-medium cursor-pointer'>
          Reports
        </p>
      </div>
      <div className='hover:bg-[#38677610] rounded-2xl'>
        <p className='py-2 px-4.5 text-[#1B2528] text-[15px] leading-5 font-medium cursor-pointer'>
          Settings
        </p>
      </div>
    </aside>
  );
}
