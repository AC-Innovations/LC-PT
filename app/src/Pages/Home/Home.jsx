import "./Home.css";
import Header from "../../Components/Header/Header.jsx";
import Banner from "../../Components/Banner/Banner.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Hero from "../../Components/Hero/Hero.jsx";

import groupPhoto from "../../assets/Photos/groupPhoto.png";
import serviceCardImage from "../../assets/Photos/serviceCardImage.jpg";
import bannerimage from "../../assets/Images/banner-small.jpg";
import sloganImage from "../../assets/Photos/sloganImage.jpg";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    //use this function to call other functions when the page loads (note: will execute twice because of StrictMode in main.jsx)
    setDay();
  });

  let slideButtonPress = (event) => {
    let quoteArray = document.getElementsByClassName("quote");
    let selectorArray = document.getElementsByClassName(
      "slide-selector-container"
    )[0];
    let button = event.target;
    let currentSlide = 0;

    //get current active slide index
    for (let i = 0; i < selectorArray.children.length; i++) {
      if (selectorArray.children[i].classList.contains("active")) {
        currentSlide = i;
      }
    }

    let scrollSlides = (index) => {
      quoteArray[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    };

    let handleSlideSelector = () => {
      let btnIndex = Array.prototype.indexOf.call(
        selectorArray.children,
        button
      ); //get index of the button selector that was clicked

      scrollSlides(btnIndex);

      button.classList.add("active"); //highlight current slide in slide selector

      //Remove highlights from all other slide selector buttons
      for (let i = 0; i < selectorArray.children.length; i++) {
        if (i != btnIndex) {
          selectorArray.children[i].classList.remove("active");
        }
      }
    };

    let handleArrowPress = () => {
      // Highlight Selector: this function highlights the slide in the selector menu
      let highlightSelector = (index) => {
        selectorArray.children[index].classList.add("active");

        //remove highlights from all other slide selectors
        for (let i = 0; i < selectorArray.children.length; i++) {
          if (i != index) {
            selectorArray.children[i].classList.remove("active");
          }
        }
      };

      if (button.classList.contains("arrow-right")) {
        if (currentSlide == selectorArray.children.length - 1) {
          //scroll the first index into view
          scrollSlides(0);
          highlightSelector(0);
        } else {
          //scroll next
          scrollSlides(currentSlide + 1);
          highlightSelector(currentSlide + 1);
        }
      } else if (button.classList.contains("arrow-left")) {
        if (currentSlide == 0) {
          //scroll the last index into view
          scrollSlides(selectorArray.children.length - 1);
          highlightSelector(selectorArray.children.length - 1);
        } else {
          //scroll next
          scrollSlides(currentSlide - 1);
          highlightSelector(currentSlide - 1);
        }
      }
    };

    if (button.classList.contains("slide-selector")) {
      handleSlideSelector();
    } else {
      handleArrowPress();
    }
  };

  let setDay = () => {
    let day = new Date().getDay();

    let daysContainer = document.getElementById("days-container");
    let weeklyHoursContainer = document.getElementById(
      "weekly-hours-container"
    );

    for (let i = 0; i < daysContainer.children.length; i++) {
      daysContainer.children[i].classList.remove("active");
      weeklyHoursContainer.children[i].classList.remove("active");
    }

    //Note: Date().getDay() retrieves weekdays from 0-6
    //If the container elements are changed or condensed, ensure there is no overflow
    if (day <= daysContainer.children.length - 1) {
      daysContainer.children[day].classList.add("active");
      weeklyHoursContainer.children[day].classList.add("active");
    }
  };

  return (
    <>
      <Hero
        title={false}
        image={groupPhoto}
        enableCTA={true}
        titleCTA={"Your Recovery, Our Passion"}
        labelCTA={"Family owned and operated"}
        buttonCTA={"Book an Appointment"}
      />
      <div className="container">
        <section className="services">
          <h1>Our Services</h1>
          <div className="wrapper">
            <Link
              to="/Services"
              className="services-card"
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "instant" })
              }
            >
              <img src={serviceCardImage} alt="physical therapy image"></img>
              <div className="label-wrapper">
                <p>Back & Neck Dysfunction</p>
                <div className="accent-bar"></div>
              </div>
            </Link>
            <Link
              to="/Services"
              className="services-card"
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "instant" })
              }
            >
              <img src={serviceCardImage} alt="physical therapy image"></img>
              <div className="label-wrapper">
                <p>Balance Training & Vestibular</p>
                <div className="accent-bar"></div>
              </div>
            </Link>
            <Link
              to="/Services"
              className="services-card"
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "instant" })
              }
            >
              <img src={serviceCardImage} alt="physical therapy image"></img>
              <div className="label-wrapper">
                <p>Orthopedic Injury</p>
                <div className="accent-bar"></div>
              </div>
            </Link>
            <Link
              to="/Services"
              className="services-card"
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "instant" })
              }
            >
              <img src={serviceCardImage} alt="physical therapy image"></img>
              <div className="label-wrapper">
                <p>Neuromuscular Training</p>
                <div className="accent-bar"></div>
              </div>
            </Link>
          </div>
          <Link
            to="/Services"
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "instant" })
            }
          >
            <button className="secondaryButton">View all services</button>
          </Link>
        </section>
        <section className="slogan">
          <h1>We help you get back to doing what you love.</h1>
          <img src={sloganImage}></img>
        </section>

        <section className="reviews">
          <h2>What our patients have to say</h2>
          <div className="carousel">
            <div className="quote-wrapper">
              <div className="quote">
                <div className="stars">
                  <FontAwesomeIcon
                    icon={faStar}
                    color="gold"
                    className="star"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    color="gold"
                    className="star"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    color="gold"
                    className="star"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    color="gold"
                    className="star"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    color="gold"
                    className="star"
                  />
                </div>
                <p className="text">
                  Great crew working here. Very professional and knowledgeable.
                  They definitely care about their clients health and well being
                </p>
                <p className="author">- Nick O</p>
              </div>
              <div className="quote">
                <div className="stars">
                  <FontAwesomeIcon
                    icon={faStar}
                    color="gold"
                    className="star"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    color="gold"
                    className="star"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    color="gold"
                    className="star"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    color="gold"
                    className="star"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    color="gold"
                    className="star"
                  />
                </div>
                <p className="text">
                  Makes therapy something to look forward to… the staff is
                  friendly and encouraging and I’m so happy I found them
                </p>
                <p className="author">- Deb Walter</p>
              </div>
              <div className="quote">
                <div className="stars">
                  <FontAwesomeIcon
                    icon={faStar}
                    color="gold"
                    className="star"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    color="gold"
                    className="star"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    color="gold"
                    className="star"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    color="gold"
                    className="star"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    color="gold"
                    className="star"
                  />
                </div>
                <p className="text">
                  I've had total knee replacements on both knees. Came here for
                  therapy after each one. They know what they are doing and gave
                  me excellent care. Wonderful friendly staff. Highly recommend!
                </p>
                <p className="author">- Jeanne Prickett</p>
              </div>
              <div className="quote">
                <div className="stars">
                  <FontAwesomeIcon
                    icon={faStar}
                    color="gold"
                    className="star"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    color="gold"
                    className="star"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    color="gold"
                    className="star"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    color="gold"
                    className="star"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    color="gold"
                    className="star"
                  />
                </div>
                <p className="text">
                  Phenomenal staff, easy to work with, super flexible scheduling
                  too! Great place to go for PT! Highly recommended!
                </p>
                <p className="author">- Ryan Jones</p>
              </div>
            </div>
            <div className="arrow-right" onClick={slideButtonPress}>
              →
            </div>
            <div className="arrow-left" onClick={slideButtonPress}>
              ←
            </div>
            <div className="slide-selector-container">
              <div
                className="slide-selector active"
                onClick={slideButtonPress}
              ></div>
              <div className="slide-selector" onClick={slideButtonPress}></div>
              <div className="slide-selector" onClick={slideButtonPress}></div>
              <div className="slide-selector" onClick={slideButtonPress}></div>
            </div>
          </div>
        </section>

        <section className="hours">
          <div className="hours-box-container column">
            <div className="hours-box">
              <div id="days-container">
                <p className="active">Sunday</p>
                <p>Monday</p>
                <p>Tuesday</p>
                <p>Wednesday</p>
                <p>Thursday</p>
                <p>Friday</p>
                <p>Saturday</p>
              </div>
              <div id="weekly-hours-container">
                <p className="active">Closed</p>
                <p>6 AM-5 PM</p>
                <p>7 AM-5 PM</p>
                <p>6:30 AM-5 PM</p>
                <p>7 AM-5 PM</p>
                <p>6 AM-12 PM</p>
                <p>Closed</p>
              </div>
            </div>
          </div>
          <div className="accent-bar-container column">
            <div className="hours-accent-bar"></div>
          </div>
          <h1 className="column">
            Hours of <br></br> Operation
          </h1>
        </section>

        <Banner
          text={"A team you can trust. A difference you can feel."}
          btntext={"Contact Us"}
          image={bannerimage}
          imgalt={"instructor helping patient"}
        />
      </div>

      <Footer />
    </>
  );
}

export default Home;
