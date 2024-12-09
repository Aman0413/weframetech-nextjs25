import Image from "next/image";
import React from "react";
import logo from "../../public/Group.png";

function Logo({ width, height }) {
  return (
    <>
      <Image src={logo} alt="logo" width={width} height={height} />
    </>
  );
}

export default Logo;
