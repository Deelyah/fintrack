import React from "react";

interface AvatarGroupProps {
  users: {
    name: string;
    imageUrl: string;
  }[];
  maxVisible?: number;
}

export default function AvatarGroup({
  users,
  maxVisible = 4,
}: AvatarGroupProps) {
  const visibleUsers = users.slice(0, maxVisible);
  const remainingCount = users.length - maxVisible;

  const names = users
    .slice(0, 3)
    .map(u => u.name)
    .join(", ");
  const nameLabel =
    remainingCount > 0 ? `${names} +${remainingCount} others` : names;

  return (
    <div className='font-sans flex items-center font-sans font-[14px] text-[#15272D9E] ml-2.5'>
      <div className='flex mr-2 relative'>
        {visibleUsers.map((user, index) => (
          <img
            key={index}
            src={user.imageUrl}
            alt={user.name}
            className='avatar w-8 h-8 rounded-full border-0.5 border-white relative -ml-2.5'
            style={{ zIndex: visibleUsers.length - index }}
          />
        ))}
      </div>
      <span className='label'>{nameLabel}</span>
    </div>
  );
}
