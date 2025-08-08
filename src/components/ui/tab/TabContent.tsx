import { useEffect, useState } from "react";

interface TabContentProps {
  children: React.ReactNode;
  contentId: string;
  activeTab: string;
}
export default function TabContent({ children, contentId }: TabContentProps) {
  return <div>{children}</div>;
}
