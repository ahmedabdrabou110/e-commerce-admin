import { AvatarProps } from "@/utils/interfaces";
import Image from "next/image";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  if (src) {
    return (
      <Image
        src={src}
        alt="Avatar"
        className="rounded-full"
        width={30}
        height={30}
      />
    );
  }
  return <FaUserCircle size={24} />;
};

export default Avatar;
