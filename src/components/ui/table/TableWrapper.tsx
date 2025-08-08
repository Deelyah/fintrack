"use client";
interface TableWraperProps {
  children: React.ReactNode;
}
export default function TableWrapper({ children }: TableWraperProps) {
  return <div className='flex flex-col w-full'>{children}</div>;
}
