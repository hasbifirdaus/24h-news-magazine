import { IoMenu, IoSearch } from "react-icons/io5";
import "./Navbar.css";
import LOGO from "../../../assets/logo.webp";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

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

  // get current date
  const date = new Date();

  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long", // Monday
    year: "numeric", // 2026
    month: "long", // March
    day: "numeric", // 16
  });

  return (
    <>
      <nav className="navbar ">
        {isMobile ? (
          <div className="navbar__container--mobile">
            <IoMenu className="navbar__icon-menu" />
            <img className="navbar__logo" src={LOGO} alt="logo" />
            <IoSearch className="navbar__icon-search" />
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
              <IoMenu className="navbar__icon-menu is-desktop-only" />
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
    </>
  );
}
