import React, { useState } from "react";
import MenuIcon from "./menuIcon";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <header
      className={`flex w-full fixed z-50 pointer-events-none justify-between items-start lg:items-center`}
    >
      <div className="w-18 pointer-events-auto h-24 md:w-20 md:h-26 xl:w-24 xl:h-30 bg-black flex items-center justify-center">
        <AniLink
          paintDrip
          hex="#3D59E9"
          className="text-white nav-link pointer-events-auto"
          to="/"
        >
          Hello
        </AniLink>
      </div>
      <nav className="hidden lg:flex lg:mr-12 xl:mr-20 lg:text-xl ">
        <AniLink
          paintDrip
          hex="#3D59E9"
          className="lg:mx-8 nav-link xl:mx-12 pointer-events-auto"
          to="/about"
        >
          About
        </AniLink>
        <AniLink
          paintDrip
          hex="#3D59E9"
          className="lg:mx-8 nav-link xl:mx-12 pointer-events-auto"
          to="/work"
        >
          Work
        </AniLink>
        <AniLink
          paintDrip
          hex="#3D59E9"
          className="lg:mx-8 nav-link xl:mx-12 pointer-events-auto"
          to="/contact"
        >
          Contact
        </AniLink>
      </nav>
      <button
        onClick={() => setShowNav(!showNav)}
        className="burger-button mr-2 z-50 lg:hidden relative pointer-events-auto"
      >
        <MenuIcon open={showNav} />
      </button>
      <div
        id="burger-curtain"
        className={`fixed top-0 w-full h-full transition-all duration-500 pointer-events-auto ${
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
