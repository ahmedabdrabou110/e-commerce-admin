import { MenuItemProps } from "@/utils/interfaces";
import React from "react";

const MenuItem: React.FC<MenuItemProps> = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-3 transition hover:bg-neutral-100"
    >
      {children}
    </div>
  );
};

export default MenuItem;
