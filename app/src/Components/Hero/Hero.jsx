import "../../index.css";
import Header from "../Header/Header";

function Hero({ image, title }) {
  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)),
    url(${image})`,
      }}
    >
      <Header />
      <h1>{title}</h1>
    </div>
  );
}

export default Hero;
