import "./Banner.css";

function Banner({ text, btntext, image, imgalt, enableBackground, bgColor }) {
  console.log(bgColor);
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
          <button>{btntext}</button>
        </div>
        <div className="banner-img">
          <img src={image} alt={imgalt} />
        </div>
      </div>
    </div>
  );
}

export default Banner;
