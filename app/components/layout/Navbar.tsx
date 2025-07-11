import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="text-white fixed">
      <Image src="/BM-LOGO.svg" width={250} height={250} alt="logo" />
    </div>
  );
};

export default Navbar;
