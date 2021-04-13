import { Link } from "gatsby";
import React, { useState } from "react";
import MenuIcon from "./menuIcon";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <header className={`flex justify-between items-start lg:items-center`}>
      <div className="w-20 h-24 md:w-24 md:h-28 xl:w-28 xl:h-36 bg-black flex items-center justify-center">
        <Link className="text-white" to="/index.js">
          Hello
        </Link>
      </div>
      <nav className="hidden lg:flex lg:mr-12 xl:mr-20 lg:text-xl ">
        <Link className="lg:mx-8 xl:mx-12" to="/index.js">
          About
        </Link>
        <Link className="lg:mx-8 xl:mx-12" to="/index.js">
          Work
        </Link>
        <Link className="lg:mx-8 xl:mx-12" to="/index.js">
          Contact
        </Link>
      </nav>
      <button
        onClick={() => setShowNav(!showNav)}
        className="burger-button mr-2 z-50 lg:hidden relative"
      >
        <MenuIcon open={showNav} />
      </button>
      <div
        id="burger-curtain"
        className={`fixed top-0 w-full h-full transition-all duration-500 ${
          showNav ? `left-0` : `left-full`
        } bg-black`}
      >
        <ul>
          <li></li>
          <li></li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
