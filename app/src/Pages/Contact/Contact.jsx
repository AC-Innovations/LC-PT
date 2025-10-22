import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../Components/Footer/Footer";
import "./Contact.css";
import Hero from "../../Components/Hero/Hero";
import contactimage from "../../assets/Images/contact.jpg";

function Contact() {
  return (
    <>
      <Hero 
      image={contactimage} 
      title={"Contact Us"} 
      />

      <div className="contact-section">
        <div className="container">
          <div className="contact-1st">
            <div className="contact-det">
              <h1>LC Physical Therapy</h1>
              <div className="content">
                <p className="home">
                  <FontAwesomeIcon icon={faHome} className="icons" />
                  &nbsp; Address: 1010 Bryden Ave Lewiston, ID
                </p>
                <br />
                <p className="phone-num">
                  <FontAwesomeIcon icon={faPhone} className="icons" />
                  &nbsp; Phone: +1 208-746-0455
                </p>
                <br />
                <p className="email">
                  <FontAwesomeIcon icon={faEnvelope} className="icons" />
                  &nbsp; Email: info@lcphysicaltherapy.com
                </p>
              </div>
            </div>

            <div className="calendly">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/andres-choque-ac-innovations"
                style={{ width: "700px", height: "600px" }}
              ></div>
              <script
                type="text/javascript"
                src="https://assets.calendly.com/assets/external/widget.js"
                async
              ></script>
            </div>
          </div>

          <div className="contact-2nd">
            <div className="col-1">
              <h1>Where to find us</h1>
            </div>
            <div className="col-2">
              <div className="google-m">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2515.9337099182667!2d-116.98210612367565!3d46.37981347110373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54a04ad29d80c43d%3A0xb98d368caad904df!2s1010%20Bryden%20Ave%2C%20Lewiston%2C%20ID%2083501!5e1!3m2!1sen!2sus!4v1760153612505!5m2!1sen!2sus"
                  style={{
                    width: "700px",
                    height: 450,
                    border: 0,
                    loading: "lazy",
                    referrer: "no-referrer-when-downgrade",
                    borderRadius: "1em",
                  }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
