import React from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";

export default function Nav({ mobile = false, onLinkClick }) {
  const close = () => onLinkClick?.();

  return (
    <nav>
      <ul className={`flex ${mobile ? "flex-col gap-2" : "flex-row items-center gap-6"} text-white`}>

        <li>
          <Link
            to="/"
            onClick={close}
            className="px-3 py-2 text-white hover:text-theme"
          >
            Home
          </Link>
        </li>

        <li className="relative group">
          <Link
            to="/menu"
            onClick={close}
            className="px-3 py-2 text-white hover:text-theme"
          >
            Menu
          </Link>

          {/* Desktop Dropdown */}
          <div className="hidden group-hover:block md:absolute md:left-0 md:mt-2">
            <DropDown>
              <ul className="py-2 bg-white text-gray-800 min-w-[180px]">
                <li>
                  <Link
                    to="/menu"
                    onClick={close}
                    className="block px-4 py-2 hover:text-theme"
                  >
                    Full Menu
                  </Link>
                </li>
                <li>
                  <Link
                    to="/menu?type=specials"
                    onClick={close}
                    className="block px-4 py-2 hover:text-theme"
                  >
                    Specials
                  </Link>
                </li>
              </ul>
            </DropDown>
          </div>
        </li>

        <li>
          <Link
            to="/reservations"
            onClick={close}
            className="px-3 py-2 text-white hover:text-theme"
          >
            Reservations
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            onClick={close}
            className="px-3 py-2 text-white hover:text-theme"
          >
            Contact
          </Link>
        </li>

        <li>
          <Link
            to="/dashboard"
            onClick={close}
            className="px-3 py-2 text-white hover:text-theme"
          >
            Dashboard
          </Link>
        </li>

      </ul>
    </nav>
  );
}
