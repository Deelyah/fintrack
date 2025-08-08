"use client";
import Image from "next/image";
import { useState } from "react";

interface TableHeadProps {
  headTitle: String;
  onSort: (order: "asc" | "desc", title: String) => void;
  customClass?: String;
}
export default function TableHead({
  headTitle,
  customClass,
  onSort,
}: TableHeadProps) {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const handleClick = () => {
    if (sortOrder === "asc") {
      setSortOrder("desc");
    } else {
      setSortOrder("asc");
    }
    onSort(sortOrder, headTitle);
  };
  return (
    <div
      className={`flex items-center border-b-[1.5px] border-[#49656E33] ${customClass}`}
    >
      <span className='font-medium text-[13px] leading-4 text-[#15272D9E]'>
        {headTitle}
      </span>
      <button
        className='flex items-center px-1.5 py-2 cursor-pointer'
        onClick={handleClick}
      >
        <Image
          src='/sort-icon.svg'
          width={12}
          height={6}
          alt='sort'
          className={`mt-0.5 `}
          //   ${
          //     sortOrder === "asc" ? "rotate-180" : "rotate-180"
          //   }
        />
      </button>
    </div>
  );
}
