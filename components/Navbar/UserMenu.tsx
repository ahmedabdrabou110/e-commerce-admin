"use client";

import Link from "next/link";
import Avatar from "../ui/Avatar";
import { useCallback, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import MenuItem from "./MenuItem";
import { signOut } from "next-auth/react";
import BackDrop from "./BackDrop";
import { UserMenuProps } from "@/utils/interfaces";

const UserMenu = ({ currentUser }: UserMenuProps) => {
  const [isOpen, setisOpen] = useState<boolean>(false);
  const toggleOpen = useCallback(() => {
    setisOpen((prev) => !prev);
  }, []);

  return (
    <>
      <div className="relative z-30">
        <div
          className="p-2 border-[1.5px] border-slate-500 flex flex-wrap items-center gap-1 rounded-full cursor-pointer jover:shadow-md transition text-slate-700"
          onClick={toggleOpen}
        >
          <Avatar src={currentUser?.image} />
          <AiFillCaretDown />
        </div>
        {isOpen && (
          <div className="absolute rounded-md shadow-md w-[170px] bg-white overflow-hidden right-0 top-12 text-sm flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <div>
                  <Link href="/orders">
                    <MenuItem onClick={toggleOpen}>Your orders</MenuItem>
                    <hr className="w-full" />
                  </Link>
                  <Link href="/admin">
                    <MenuItem onClick={toggleOpen}>Admin Dashboard</MenuItem>
                    <hr className="w-full" />
                  </Link>
                  <MenuItem
                    onClick={() => {
                      toggleOpen();
                      signOut();
                    }}
                  >
                    Signout
                  </MenuItem>
                  <hr className="w-full" />
                </div>
              </>
            ) : (
              <>
                <div>
                  <Link href="/login">
                    <MenuItem onClick={toggleOpen}>Login</MenuItem>
                    <hr className="w-full" />
                  </Link>
                  <Link href="/register">
                    <MenuItem onClick={toggleOpen}>Register</MenuItem>
                    <hr className="w-full" />
                  </Link>
                </div>
              </>
            )}
          </div>
        )}
      </div>
      {isOpen && <BackDrop onClick={toggleOpen} />}
    </>
  );
};

export default UserMenu;
