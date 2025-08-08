"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

interface SideBarProps {
  navLinks: { path: string; title: string }[];
}

export default function SideBar({ navLinks }: SideBarProps) {
  const pathName = usePathname();

  return (
    <aside className='py-7 pl-12 w-[320px]'>
      <div className='flex flex-col'>
        {navLinks.map((link, index) => (
          <SideBarItem
            key={index}
            href={link.path}
            isActive={pathName.toLowerCase() === link.path}
          >
            {link.title}
          </SideBarItem>
        ))}
      </div>
    </aside>
  );
}

export function SideBarItem({
  isActive = false,
  children,
  href,
}: {
  isActive: boolean;
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className={[
        "rounded-2xl block",
        isActive ? "bg-[#38677629]" : "hover:bg-[#38677610]",
      ].join(" ")}
    >
      <p className='py-2 px-4.5 text-[#3A6C7B] text-[15px] leading-5 font-medium cursor-pointer'>
        {children}
      </p>
    </Link>
  );
}
