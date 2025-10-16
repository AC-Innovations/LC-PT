import "./Home.css";
import Header from "../../Components/Header/Header.jsx";

import groupPhoto from "../../assets/Photos/groupPhoto.png";
import serviceCardImage from "../../assets/Photos/serviceCardImage.jpg";
import sloganImage from "../../assets/Photos/sloganImage.jpg";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  return (
    <>
      <Header />
      <section className="hero">
        <img src={groupPhoto} alt="photo" />
        <div id="heroOverlay"></div>

        <div id="heroCTA">
          <h1>Your Recovery, Our Passion</h1>
          <p>Family owned and operated</p>
          <button className="primaryButton">Book an Appointment</button>
        </div>
      </section>

      <section className="services">
        <h1>Our Services</h1>

        <div className="wrapper">
          <div className="services-card">
            <img src={serviceCardImage} alt="physical therapy image"></img>
            <div className="label-wrapper">
              <p>Back & Neck Dysfunction</p>
              <div className="accent-bar"></div>
            </div>
          </div>

          <div className="services-card">
            <img src={serviceCardImage} alt="physical therapy image"></img>
            <div className="label-wrapper">
              <p>Balance Training & Vestibular</p>
              <div className="accent-bar"></div>
            </div>
          </div>

          <div className="services-card">
            <img src={serviceCardImage} alt="physical therapy image"></img>
            <div className="label-wrapper">
              <p>Orthopedic Injury</p>
              <div className="accent-bar"></div>
            </div>
          </div>

          <div className="services-card">
            <img src={serviceCardImage} alt="physical therapy image"></img>
            <div className="label-wrapper">
              <p>Neuromuscular Training</p>
              <div className="accent-bar"></div>
            </div>
          </div>
        </div>

        <button className="secondaryButton">View all services</button>
      </section>

      <section className="slogan">
        <h1>We help you get back to doing what you love.</h1>
        <img src={sloganImage}></img>
      </section>

      <section className="reviews">
        <h2>What our patients have to say</h2>

        <div className="wrapper">
          <div className="quote">
            <div className="stars">
              <FontAwesomeIcon icon={faStar} color="gold" className="star" />
              <FontAwesomeIcon icon={faStar} color="gold" className="star" />
              <FontAwesomeIcon icon={faStar} color="gold" className="star" />
              <FontAwesomeIcon icon={faStar} color="gold" className="star" />
              <FontAwesomeIcon icon={faStar} color="gold" className="star" />
            </div>
            <p className="text">
              Great crew working here. Very professional and knowledgeable. They
              definitely care about their clients health and well being
            </p>
            <p className="author">Nick O</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
