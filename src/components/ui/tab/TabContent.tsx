interface TabContentProps {
  children: React.ReactNode;
}
export default function TabContent({ children }: TabContentProps) {
  return <div>{children}</div>;
}
