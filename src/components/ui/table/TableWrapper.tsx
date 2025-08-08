"use client";
interface TableWraperProps {
  children: React.ReactNode;
  customClass?: string;
}
export default function TableWrapper({
  children,
  customClass,
}: TableWraperProps) {
  return (
    <div className={`${customClass} flex flex-col w-full`}>{children}</div>
  );
}
