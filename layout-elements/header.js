import { Link } from "gatsby";
import React, { useState } from "react";
import MenuIcon from "./menuIcon";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <header className={`flex justify-between bg-gray-500`}>
      <div className="w-16 h-20 bg-black flex items-center justify-center">
        <Link className="text-white" to="/index.js">
          Hello
        </Link>
      </div>
      <nav></nav>
      <button
        onClick={() => setShowNav(!showNav)}
        className="burger-button z-50 lg:hidden"
      >
        <MenuIcon open={showNav} />
      </button>
    </header>
  );
};
export default Header;
