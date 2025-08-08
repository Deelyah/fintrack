"use-client";

interface TabNavWrapperProps {
  children: React.ReactNode;
}

export default function TabNavWrapper({ children }: TabNavWrapperProps) {
  return <div className='flex border-b border-[#49656E33]'>{children}</div>;
}
