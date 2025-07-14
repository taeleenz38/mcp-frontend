import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 h-screen w-1/5 bg-black text-white flex flex-col items-center justify-start pt-11">
      <Image src="/logo.png" alt="logo" width={125} height={125} className="" />
      <div className="flex flex-col mt-10 gap-2">
        <div className="flex justify-start gap-1 hover:scale-105 duration-200">
          <Image src="/new-chat.png" width={28} height={28} alt="new-chat" />
          <Link className="text-lg" href="/">
            New chat
          </Link>
        </div>
        <div className="flex justify-start gap-1 hover:scale-105 duration-200">
          <Image
            src="/previous-chat.png"
            width={28}
            height={28}
            alt="previous-chat"
          />
          <Link className="text-lg" href="/">
            Previous chats
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
