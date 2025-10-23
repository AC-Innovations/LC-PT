import "./Hero.css";
import Header from "../Header/Header";

function Hero({ image, title, enableCTA, titleCTA, labelCTA, buttonCTA }) {
  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)),
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
        <button className="primaryButton">{buttonCTA}</button>
      </div>
    </div>
  );
}

export default Hero;
