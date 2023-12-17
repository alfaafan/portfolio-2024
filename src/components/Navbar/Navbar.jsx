import { useState } from "react";
import HamburgerButton from "./HamburgerButton";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleTapChange = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-base-300 sticky top-0">
      <div className="navbar border-red-100">
        <div className="flex-1 sm:ms-24">
          <a href="#hero" className="btn btn-ghost text-xl font-bold">
            <svg width="35" height="35" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="rgba(255, 255, 255, 0.87)">
              <path d="M2 21 L12 3 L22 21 L20 23 L12 9 L4 23 Z" />
            </svg>
          </a>
        </div>
        <div className="flex-none sm:me-24">
          <ul className="menu menu-horizontal px-1 hidden sm:flex font-semibold tracking-wider">
            <li>
              <a href="#profile">Profile</a>
            </li>
            <li>
              <a href="#stacks">Stacks</a>
            </li>
            <li>
              <a href="#works">Works</a>
            </li>
          </ul>
          <HamburgerButton isOpen={isOpen} onTapChange={handleTapChange} />
        </div>
      </div>
      {isOpen ? (
        <>
          <ul className="sm:hidden ps-5 py-2">
            <li className="pt-5">
              <a href="#profile" className="btn btn-ghost">
                Profile
              </a>
            </li>
            <li className="pt-5">
              <a href="#stacks" className="btn btn-ghost">
                Stacks
              </a>
            </li>
            <li className="pt-5">
              <a href="#works" className="btn btn-ghost">
                Works
              </a>
            </li>
          </ul>
        </>
      ) : (
        <></>
      )}
    </nav>
  );
}

export default Navbar;
