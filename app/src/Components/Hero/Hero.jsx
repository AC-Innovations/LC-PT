import '../../index.css'

function Hero ({image, title, className}) {
  return (
    <div 
    className='hero-section'
    style={{backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)),
    url(${image})`}}
    >
    <h1>{title}</h1>
    </div>
  )
}

export default Hero