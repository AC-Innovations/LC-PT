import "./Banner.css";
import { Link } from "react-router-dom";

function Banner({ text, btntext, image, imgalt, enableBackground, bgColor }) {
  return (
    <div
      className="banner-background"
      style={{
        backgroundColor: enableBackground ? `${bgColor}` : "#0000",
      }}
    >
      <div className="info-banner">
        <div className="blue">
          <label>{text}</label>
          <Link
            to="/Contact"
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "instant" })
            }
          >
            <button>{btntext}</button>
          </Link>
        </div>
        <div className="banner-img">
          <img src={image} alt={imgalt} />
        </div>
      </div>
    </div>
  );
}

export default Banner;
