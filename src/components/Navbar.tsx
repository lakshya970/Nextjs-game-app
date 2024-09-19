import React from "react";
import Logo from "./ui/Logo";
import Wrapper from "./ui/Wrapper";
import Search from "./ui/Search";
import { FaRegCircleUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <header className=" bg-black/80 backdrop-blur sticky top-0 z-20">
      <Wrapper className={`flex items-center justify-between`}>
        <Logo />
        <Search />
        <div>
          <FaRegCircleUser size={22} />
        </div>
      </Wrapper>
    </header>
  );
};

export default Navbar;
