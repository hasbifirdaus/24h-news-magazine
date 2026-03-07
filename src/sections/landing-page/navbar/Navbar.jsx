import Logo from "../../../assets/logo.webp";
import { FiMenu, FiSearch } from "react-icons/fi";

import "./Navbar.css";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

const NAV_CATEGORIES = [
  "HOME",
  "LIFE STYLE",
  "ESPORTS",
  "FOOD",
  "ENTERTAINMENT",
  "HEALTH",
  "MONEY",
  "TRAVEL",
  "TECH",
];

export default function Navbar() {
  const isMobile = useMediaQuery("(max-width: 960px)");

  return (
    <>
      {/* Primary Navbar - Logo, Search, Menu */}
      <nav className="navbar navbar--primary">
        <div className="navbar__container">
          {isMobile ? (
            <>
              <FiMenu className="navbar__icon" />
              <img src={Logo} alt="logo" className="navbar__logo" />
              <FiSearch className="navbar__icon" />
            </>
          ) : (
            <>
              <img src={Logo} alt="logo" className="navbar__logo" />

              <div className="navbar__search">
                <input
                  type="text"
                  placeholder="Type and hit enter..."
                  className="navbar__search-input"
                />
                <button className="navbar__search-button">
                  <FiSearch className="navbar__search-icon" />
                </button>
              </div>

              <FiMenu className="navbar__icon navbar__menu-button" />
            </>
          )}
        </div>
      </nav>

      {/* Secondary Navbar - Category Navigation */}
      <nav className="navbar--secondary navbar ">
        <div className="navbar__categories">
          {NAV_CATEGORIES.map((category) => (
            <span key={category} className="navbar__category-item">
              {category}
            </span>
          ))}
        </div>
      </nav>
    </>
  );
}
