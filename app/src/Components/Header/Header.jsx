import "./Header.css";
import logo from "../../assets/Photos/Logo.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

function Header() {
  const location = useLocation();
  const headerRef = useRef(null);
  const lastScrollY = useRef(typeof window !== "undefined" ? window.pageYOffset : 0);
  const ticking = useRef(false);
  const [isFixed, setIsFixed] = useState(false);
  const [visible, setVisible] = useState(true); 
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const heroEl = document.querySelector(".hero-section");
    if (!headerRef.current) return;

    const computeHeroBottom = () => {
      if (!heroEl) return 0;
      const rect = heroEl.getBoundingClientRect();
      return rect.top + window.pageYOffset + rect.height;
    };

    const updateHeaderHeight = () => {
      if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight);
    };
    updateHeaderHeight();

    let heroBottom = computeHeroBottom();

    const DELTA = 5;

    const handleUpdate = () => {
      const currentY = window.pageYOffset;

      heroBottom = computeHeroBottom();

      const nowInsideHero = currentY + 0 < heroBottom;

      if (nowInsideHero) {
        if (isFixed) setIsFixed(false);
        if (!visible) setVisible(true);
        lastScrollY.current = currentY;
        ticking.current = false;
        return;
      }

      if (!isFixed) setIsFixed(true);

      const diff = currentY - lastScrollY.current;
      if (Math.abs(diff) < DELTA) {
        ticking.current = false;
        return;
      }

      if (diff > 0) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentY;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(handleUpdate);
      }
    };

    const onResize = () => {
      heroBottom = computeHeroBottom();
      updateHeaderHeight();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    updateHeaderHeight();
    heroBottom = computeHeroBottom();
    lastScrollY.current = window.pageYOffset;

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [isFixed, visible]);

  const classes = [
    "hd", "navbar",
    isFixed ? "fixed" : "in-hero",
    isFixed ? (visible ? "show" : "hide") : "", 
    isFixed && visible ? "blur" : ""
  ].join(" ").trim();

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
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
            </li>
            <li>
              <Link to="/About" className={location.pathname === '/About' ? 'active' : ''}>About</Link>
            </li>
            <li>
              <Link to="/Services" className={location.pathname === '/Services' ? 'active' : ''}>Services</Link>
            </li>
            <li>
              <Link to="/Contact" className={location.pathname === '/Contact' ? 'active' : ''}>Contact</Link>
            </li>
          </ul>
          </nav>
        </div>
        </div>
      </section>

      <div
        aria-hidden="true"
        style={{
          height: isFixed ? headerHeight : 0,
          transition: "height 500ms ease"
        }}
      />
    </>
  );
}

export default Header;
