import "./Header.css";
import logo from "../../assets/Photos/Logo.png";
import { Link } from "react-router-dom"; //useLocation 
// import { useEffect } from "react"; 

function Header() {
  // const location = useLocation();

  // useEffect(() => {
  //   //use this function to call other functions when the page loads (note: will execute twice because of StrictMode in main.jsx)
  //   highlightCurrentPage();
  // });

  // function highlightCurrentPage() {
  //   let menu = document.getElementsByClassName("menu");

  //   for (let i = 0; i < menu[0].childNodes.length; i++) {
  //     if (
  //       menu[0].childNodes[i].childNodes[0].attributes.href.nodeValue ==
  //       location.pathname
  //     ) {
  //       menu[0].childNodes[i].classList.add("active");
  //     } else if (menu[0].childNodes[i].classList.contains("active")) {
  //       menu[0].childNodes[i].classList.remove("active");
  //     }
  //   }
  // }

  return (
    <>
      <section className="container">
        <div className="navbar">
          <div className="logo">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>

        <div className="wrapper">
          <nav>
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
          </nav>
        </div>
        </div>
      </section>
    </>
  );
}

export default Header;
