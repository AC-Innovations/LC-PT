import "./Hero.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

function Hero({ image, title, enableCTA, titleCTA, labelCTA, buttonCTA }) {
  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.4), rgba(4, 9, 30, 0.4)),
    url(${image})`,
      }}
    >
      <Header />
      <h1 id="title" style={{ display: enableCTA ? "none" : "block" }}>
        {title}
      </h1>

      <div id="heroCTA" style={{ display: enableCTA ? "block" : "none" }}>
        <h1 id="titleCTA">{titleCTA}</h1>
        <label>{labelCTA}</label>
        <Link to="/Contact">
          <button className="primaryButton">{buttonCTA}</button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
