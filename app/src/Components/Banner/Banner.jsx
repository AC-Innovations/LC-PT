import "./Banner.css";

function Banner({ text, btntext, image, imgalt }) {
  return (
    <div className="info-banner">
      <div className="blue">
        <label>{text}</label>
        <button>{btntext}</button>
      </div>

      <div className="banner-img">
        <img src={image} alt={imgalt} />
      </div>
    </div>
  );
}

export default Banner;
