import React, { useEffect, useState } from "react";
import MenuIcon from "./menuIcon";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Link from "gatsby-link";
import Logo from "./logo";

const Header = () => {
  useEffect(() => {}, []);
  const [showNav, setShowNav] = useState(false);

  return (
    <header
      className={`flex w-full fixed z-50 pointer-events-none justify-between items-start lg:items-center`}
    >
      <div className="w-17 logo pointer-events-auto h-24 md:w-20 md:h-26 xl:w-24 xl:h-30 bg-black flex items-center justify-center">
        <AniLink
          paintDrip
          hex="#3D59E9"
          className="text-white nav-link pointer-events-auto"
          to="/"
        >
          <Logo />
        </AniLink>
      </div>
      <nav className="hidden lg:flex lg:mr-12 xl:mr-20 md:text-xl xl:text-2xl ">
        <AniLink
          paintDrip
          hex="#3D59E9"
          className="lg:mx-8 py-1 nav-link xl:mx-12 pointer-events-auto underline-custom-hover"
          to="/about"
        >
          About
        </AniLink>
        <AniLink
          paintDrip
          hex="#3D59E9"
          className="lg:mx-8 py-1 nav-link xl:mx-12 pointer-events-auto underline-custom-hover"
          to="/work"
        >
          Work
        </AniLink>
        <AniLink
          paintDrip
          hex="#3D59E9"
          className="lg:mx-8 py-1 nav-link xl:mx-12 pointer-events-auto underline-custom-hover"
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
        className={`fixed top-0 w-full h-full transition-all duration-500 pointer-events-auto grid grid-rows-3 ${
          showNav ? `left-0` : `left-full`
        } bg-black`}
      >
        <ul className="text-3xl text-white text-center row-start-2 self-center">
          <li className="py-6">
            <Link className="underline-custom-white py-6" to="/about">
              About
            </Link>
          </li>
          <li className="py-6">
            <Link className="underline-custom-white py-6" to="/work">
              Work
            </Link>
          </li>
          <li className="py-6">
            <Link to="/contact py-6">Contact</Link>
          </li>
        </ul>
        <h3 className="text-lg pb-6 text-center row-start-3 self-end text-white">
          © 2011 Piotr Pospiech
        </h3>
      </div>
    </header>
  );
};
export default Header;
