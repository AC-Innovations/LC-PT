import "./Header.css";
import logo from "../../assets/Photos/Logo.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { scrollToTop } from '../../Utils/ScrolltoTop'

function Header() {
  const location = useLocation();
  const headerRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);
  const [visible, setVisible] = useState(true);
  const [headerHeight, setHeaderHeight] = useState(0);
  const lastScrollY = useRef(0);
  const SCROLL_DELTA = 50;

  useEffect(() => {
    if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight);

    const handleScroll = () => {
      const currentY = window.scrollY;

      setIsFixed(currentY > 0); // sticky when scrolled

      if (Math.abs(currentY - lastScrollY.current) < SCROLL_DELTA) return;

      if (currentY < 50) {
        setVisible(true); // always visible near top
      } else if (currentY > lastScrollY.current + SCROLL_DELTA) {
        setVisible(false); // scrolling down
      } else if (currentY < lastScrollY.current - SCROLL_DELTA) {
        setVisible(true); // scrolling up
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", () => {
      if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", () => {});
    };
  }, []);

  const classes = [
    "hd",
    "navbar",
    isFixed ? "fixed" : "in-hero",
    visible && isFixed ? "blur" : "",
    visible ? "show" : "hide"
  ]
    .join(" ")
    .trim();

  return (
    <>
      <section className="container">
        <div className={classes} ref={headerRef}>
          <div className="logo">
          <Link to="/">
            <img src={logo} className="logo-p" />
          </Link>
        </div>

        <div className="wrapper">
          <nav>
            <ul className="menu">
            <li>
              <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={scrollToTop}>Home</Link>
            </li>
            <li>
              <Link to="/About" className={location.pathname === '/About' ? 'active' : ''} onClick={scrollToTop}>About</Link>
            </li>
            <li>
              <Link to="/Services" className={location.pathname === '/Services' ? 'active' : ''} onClick={scrollToTop}>Services</Link>
            </li>
            <li>
              <Link to="/Contact" className={location.pathname === '/Contact' ? 'active' : ''} onClick={scrollToTop}>Contact</Link>
            </li>
          </ul>
          </nav>
        </div>
        </div>
      </section>

      <div aria-hidden="true" style={{ height: headerHeight }} />
    </>
  );
}

export default Header;
