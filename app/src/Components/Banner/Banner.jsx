import './Banner.css'

function Banner({text, btntext, image, imgalt}) {
  return (
    <div className="info-banner">
        <div className="blue">
            <p>{text}</p>
            <button>{btntext}</button>
        </div>

        <div className="banner-img">
            <img src={image} alt={imgalt} />
        </div>
    </div>
  )
}

export default Banner