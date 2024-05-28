"use client";

interface MenuItemProps {
  onClick: () => void;
  label: string;
  active?: boolean;
}
const MenuItem = ({ onClick, label, active }: MenuItemProps) => {
  return (
    <div
      onClick={onClick}
      className={`text-gray-600 hover:text-green-500 px-3 py-2 rounded-md text-lg font-medium cursor-pointer ${
        active ? "text-green-500" : ""
      }`}
    >
      {label}
    </div>
  );
};

export default MenuItem;
