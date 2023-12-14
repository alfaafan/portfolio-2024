import { useState } from "react";
import HamburgerButton from "./HamburgerButton";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleTapChange = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-base-100 sticky top-0">
      <div className="navbar border-red-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Alfaafan</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 hidden sm:flex">
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Stacks</a>
            </li>
            <li>
              <a>Works</a>
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
