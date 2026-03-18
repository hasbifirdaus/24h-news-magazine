import { IoClose, IoMenu, IoSearch } from "react-icons/io5";
import "./Navbar.css";
import LOGO from "../../../assets/logo.webp";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { useEffect, useState } from "react";

const LINKS = [
  { name: "Home", href: "#" },
  { name: "Lifestyle", href: "#" },
  { name: "Esports", href: "#" },
  { name: "Food", href: "#" },
  { name: "Entertainment", href: "#" },
  { name: "Health", href: "#" },
  { name: "Money", href: "#" },
  { name: "Tech", href: "#" },
  { name: "Travel", href: "#" },
];

export default function Navbar() {
  const isMobile = useMediaQuery("(max-width: 992px)");
  const [isOpenMenuBar, setIsOpenMenuBar] = useState(false);
  const [isOpenSearchBar, setIsOpenSearchBar] = useState(false);

  // get current date
  const date = new Date();

  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long", // Monday
    year: "numeric", // 2026
    month: "long", // March
    day: "numeric", // 16
  });

  useEffect(() => {
    if (isOpenMenuBar && isOpenSearchBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpenMenuBar, isOpenSearchBar]);

  return (
    <main className="main">
      <nav className="navbar ">
        {isMobile ? (
          <div className="navbar__container--mobile">
            <IoMenu
              className="navbar__icon-menu"
              onClick={() => setIsOpenMenuBar(!isOpenMenuBar)}
            />
            <img className="navbar__logo" src={LOGO} alt="logo" />
            <IoSearch
              onClick={() => setIsOpenSearchBar(!isOpenSearchBar)}
              className="navbar__icon-search"
            />
          </div>
        ) : (
          <>
            <div className="navbar__container--desktop">
              <img
                className="navbar__logo is-desktop-only"
                src={LOGO}
                alt="logo"
              />
              <div className="navbar__search-container">
                <input
                  id="search"
                  type="text"
                  placeholder="Type and hit enter..."
                  className="navbar__search"
                />
                <IoSearch className="navbar__icon-search is-desktop-only" />
              </div>
              <IoMenu
                onClick={() => setIsOpenMenuBar(!isOpenMenuBar)}
                className="navbar__icon-menu is-desktop-only"
              />
            </div>
          </>
        )}
      </nav>

      {!isMobile && (
        <div className="navbar__links-box">
          <div className="navbar__links">
            {LINKS.map((link) => (
              <a className="navbar__link" key={link.name} to={link.href}>
                {link.name}
              </a>
            ))}
          </div>

          <div className="navbar__date">{formattedDate}</div>
        </div>
      )}

      {/* Overlay */}
      <div
        className={`overlay ${isOpenMenuBar ? "active" : ""}`}
        onClick={() => setIsOpenMenuBar(!isOpenMenuBar)}
      />

      {/* Sidebar */}
      <aside className={`sidebar ${isOpenMenuBar ? "active" : ""}`}>
        <div>
          <img className="sidebar__logo" src={LOGO} alt="logo" />
          <div className="sidebar__search-container">
            <input
              id="search"
              type="text"
              placeholder="Type and hit enter..."
              className="sidebar__search"
            />
            <IoSearch className="sidebar__icon-search" />
          </div>
        </div>

        <div className="sidebar__links">
          {LINKS.map((link) => (
            <a className="sidebar__link" key={link.name} to={link.href}>
              {link.name}
            </a>
          ))}
        </div>

        <span className="sidebar__copyright">
          @{new Date().getFullYear()} - All Rights Reserved. Designed and
          Developed by John Doe
        </span>

        <button
          className={`sidebar__close-btn ${isOpenMenuBar ? "active" : ""}`}
          onClick={() => setIsOpenMenuBar(!isOpenMenuBar)}
        >
          <IoClose />
        </button>
      </aside>

      {/* Search Bar */}
      <aside className={`search-bar ${isOpenSearchBar ? "active" : ""}`}>
        <div className="search-bar__container">
          <input
            id="search"
            type="text"
            placeholder="Type and hit enter..."
            className="sidebar__search"
          />

          <button className="search-bar__icon-search">Search</button>
        </div>

        {/* Triangle searchbar decoration */}
        <div className="search-bar__decoration" />
      </aside>
    </main>
  );
}
