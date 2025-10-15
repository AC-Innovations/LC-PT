import "./Header.css";
import logo from "../../assets/Photos/Logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <section className="navbar">
        <img src={logo} />

        <div className="wrapper">
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Services">Services</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Header;
