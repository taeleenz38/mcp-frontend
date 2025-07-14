import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 h-screen w-1/5 bg-black text-white flex flex-col items-center justify-start pt-11">
      <Image
        src="/logo.png"
        alt="logo"
        width={125}
        height={125}
        className=""
      />
      <div className="flex flex-col mt-10 gap-1">
        <Link className="text-lg hover:scale-105 duration-200" href="/">New chat</Link>
        <Link className="text-lg hover:scale-105 duration-200" href="/">Previous chats</Link>
      </div>
    </div>
  );
};

export default Navbar;
