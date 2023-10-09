import React from "react";
import HeaderLogo from "./logo";
import HeaderMenus from "./menus";

const Header: React.FC = () => {
  return (
    <div className="h-[50px] fixed w-full border-b-1 border-b-gray-300 flex justify-between items-center px-10 bg-default">
      <HeaderLogo />
      <HeaderMenus />
    </div>
  );
};

export default Header;
