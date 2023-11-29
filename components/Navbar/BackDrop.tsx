import { BackDropProps } from "@/utils/interfaces";
import React from "react";

const BackDrop: React.FC<BackDropProps> = ({ onClick }) => {
  return (
    <div
      className="z-20 bg-slate-200 opacity-60 fixed top-0 left-0 w-screen h-screen "
      onClick={onClick}
    ></div>
  );
};

export default BackDrop;
