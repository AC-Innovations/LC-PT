import "./Home.css";
import Header from "../../Components/Header/Header.jsx";

import groupPhoto from "../../assets/Photos/groupPhoto.png";
import serviceCardImage from "../../assets/Photos/serviceCardImage.jpg";
import sloganImage from "../../assets/Photos/sloganImage.jpg";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
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

    let handleSlideSelector = () => {
      let btnIndex = Array.prototype.indexOf.call(
        selectorArray.children,
        button
      ); //get index of the button selector that was clicked

      quoteArray[btnIndex].scrollIntoView({ behavior: "smooth" });

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
          quoteArray[0].scrollIntoView({ behavior: "smooth" });
          highlightSelector(0);
        } else {
          //scroll next
          quoteArray[currentSlide + 1].scrollIntoView({ behavior: "smooth" });
          highlightSelector(currentSlide + 1);
        }
      } else if (button.classList.contains("arrow-left")) {
        if (currentSlide == 0) {
          //scroll the last index into view
          quoteArray[selectorArray.children.length - 1].scrollIntoView({
            behavior: "smooth",
          });
          highlightSelector(selectorArray.children.length - 1);
        } else {
          //scroll next
          quoteArray[currentSlide - 1].scrollIntoView({
            behavior: "smooth",
          });

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

        <div className="carousel">
          <div className="quote-wrapper">
            <div className="quote">
              <div className="stars">
                <FontAwesomeIcon icon={faStar} color="gold" className="star" />
                <FontAwesomeIcon icon={faStar} color="gold" className="star" />
                <FontAwesomeIcon icon={faStar} color="gold" className="star" />
                <FontAwesomeIcon icon={faStar} color="gold" className="star" />
                <FontAwesomeIcon icon={faStar} color="gold" className="star" />
              </div>
              <p className="text">
                Great crew working here. Very professional and knowledgeable.
                They definitely care about their clients health and well being
              </p>
              <p className="author">- Nick O</p>
            </div>
            <div className="quote">
              <div className="stars">
                <FontAwesomeIcon icon={faStar} color="gold" className="star" />
                <FontAwesomeIcon icon={faStar} color="gold" className="star" />
                <FontAwesomeIcon icon={faStar} color="gold" className="star" />
                <FontAwesomeIcon icon={faStar} color="gold" className="star" />
                <FontAwesomeIcon icon={faStar} color="gold" className="star" />
              </div>
              <p className="text">
                Makes therapy something to look forward to… the staff is
                friendly and encouraging and I’m so happy I found them
              </p>
              <p className="author">- Deb Walter</p>
            </div>

            <div className="quote">
              <div className="stars">
                <FontAwesomeIcon icon={faStar} color="gold" className="star" />
                <FontAwesomeIcon icon={faStar} color="gold" className="star" />
                <FontAwesomeIcon icon={faStar} color="gold" className="star" />
                <FontAwesomeIcon icon={faStar} color="gold" className="star" />
                <FontAwesomeIcon icon={faStar} color="gold" className="star" />
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
                <FontAwesomeIcon icon={faStar} color="gold" className="star" />
                <FontAwesomeIcon icon={faStar} color="gold" className="star" />
                <FontAwesomeIcon icon={faStar} color="gold" className="star" />
                <FontAwesomeIcon icon={faStar} color="gold" className="star" />
                <FontAwesomeIcon icon={faStar} color="gold" className="star" />
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
    </>
  );
}

export default Home;
