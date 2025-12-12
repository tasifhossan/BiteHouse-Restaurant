import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

export default function Header1() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full top-0 left-0 z-50 transition-all ${
          sticky ? "fixed shadow-md bg-title1" : "relative bg-title1"
        }`}
      >
        {/* Top info bar */}
        <div className="bg-theme text-white text-xs">
          <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            
            {/* Location + Hours */}
            <div className="flex items-center gap-4 text-sm">
              <span className="inline-flex items-center gap-2">
                <i className="bi bi-geo-alt-fill" aria-hidden></i>
                <span>123 Harbor St, Chokbazar, Chattogram</span>
              </span>

              <span className="inline-flex items-center gap-2">
                <i className="bi bi-clock-fill" aria-hidden></i>
                <span>Mon–Sat: 9:00 AM – 11:00 PM</span>
              </span>
            </div>

            {/* Social icons */}
            <div className="hidden sm:flex items-center gap-4 cs_header_social_links top-header-social-icon">
              <span className="text-white text-sm">Follow Us:</span>

              <ul className="flex items-center gap-3">
                <li>
                  <a href="#" aria-label="Facebook" className="text-white hover:text-gray-300">
                    <i className="bi bi-facebook text-lg"></i>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Twitter" className="text-white hover:text-gray-300">
                    <i className="bi bi-twitter text-lg"></i>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="LinkedIn" className="text-white hover:text-gray-300">
                    <i className="bi bi-linkedin text-lg"></i>
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Instagram" className="text-white hover:text-gray-300">
                    <i className="bi bi-instagram text-lg"></i>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Main header */}
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" onClick={() => setMobileOpen(false)}>
            <img src="/img/logo/logo1.svg" alt="logo" className="w-40" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:block flex-1">
            <div className="max-w-2xl mx-auto">
              <Nav />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">

            <Link
              to="/order"
              className="hidden md:inline-block bg-theme text-white px-4 py-2 rounded-md hover:bg-theme/90"
            >
              Order Online
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-white/20 text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <i className="bi bi-x-lg text-2xl"></i> : <i className="bi bi-list text-2xl"></i>}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-title1 border-t border-white/10">
            <div className="px-4 py-4">
              <Nav mobile onLinkClick={() => setMobileOpen(false)} />

              <div className="mt-4 flex gap-2">
                <Link
                  to="/order"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 text-center bg-theme text-white py-2 rounded-md hover:bg-theme/90"
                >
                  Order Online
                </Link>
                <Link
                  to="/reservations"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 text-center border border-white/20 py-2 rounded-md text-white hover:text-theme"
                >
                  Reserve
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Spacer to prevent content from sliding under sticky header */}
      <div style={{ height: sticky ? "92px" : "0px" }} aria-hidden />
    </>
  );
}
