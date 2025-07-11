import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="text-white fixed">
      <div className="w-24 h-24 overflow-hidden rounded-full relative ml-8 mt-8">
        <Image src="/logo.jpg" alt="logo" fill className="object-cover" />
      </div>
    </div>
  );
};

export default Navbar;
