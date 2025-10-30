import "./Contact.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";

import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/Hero/Hero";

import contactimage from "../../assets/Images/contact.jpg";

function Contact() {
  let formButtonClick = () => {
    let button = document.getElementsByClassName("form-submit");

    button[0].children[0].classList.add("active");
    button[0].children[1].classList.add("active");
    button[0].style.pointerEvents = "none";
    setTimeout(() => {
      button[0].children[0].classList.remove("active");
      button[0].children[1].classList.remove("active");
      button[0].style.pointerEvents = "all";
    }, 5000);
  };

  return (
    <>
      <Hero image={contactimage} title={"Contact Us"} />

      <div className="contact-section">
        <div className="container">
          <div className="contact-1st">
            <div className="contact-det">
              <h1>LC Physical Therapy</h1>
              <div className="content">
                <p className="home">
                  <FontAwesomeIcon icon={faHome} className="icons" />
                  &nbsp;&nbsp;
                  <a href="https://www.google.com/maps/dir//1010+Bryden+Ave+Lewiston,+ID+83501">
                    1010 Bryden Ave Lewiston, ID
                  </a>
                </p>
                <br />
                <p className="phone-num">
                  <FontAwesomeIcon icon={faPhone} className="icons" />
                  &nbsp;&nbsp;
                  <a href="tel:+1 208-746-0455">+1 208-746-0455</a>
                </p>
                <br />
                <p className="email">
                  <FontAwesomeIcon icon={faEnvelope} className="icons" />
                  &nbsp;&nbsp;
                  <a href="mailto:info@lcphysicaltherapy.com">
                    info@lcphysicaltherapy.com
                  </a>
                </p>
              </div>
            </div>
            {/* <!-- 
    This is a working contact form. To receive email, 
    Replace YOUR_ACCESS_KEY_HERE with your actual Access Key.

    Create Access Key here 👉 https://web3forms.com/
 --> */}

            <div class="contact-form-container">
              <div class="contact-intro">
                <h2 class="contact-title">Get in Touch</h2>
                <p class="contact-description">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
              </div>

              <form
                class="contact-form"
                action="https://api.web3forms.com/submit"
                method="POST"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="YOUR_ACCESS_KEY_HERE"
                />
                <input
                  type="hidden"
                  name="subject"
                  value="New Contact Form Submission from Web3Forms"
                />
                <input type="hidden" name="from_name" value="My Website" />
                {/* <!-- More customization options available in the docs: https://docs.web3forms.com --> */}

                <div class="form-group-container">
                  <div class="form-group">
                    <label for="name" class="form-label">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      class="form-input"
                      placeholder="Your name"
                      type="text"
                    />
                  </div>
                  <div class="form-group">
                    <label for="email" class="form-label">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      class="form-input"
                      placeholder="Your email"
                      type="email"
                    />
                  </div>
                  <div class="form-group">
                    <label for="phone" class="form-label">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      class="form-input"
                      placeholder="+1 (234) 56789"
                      type="text"
                    />
                  </div>
                  <div class="form-group">
                    <label for="message" class="form-label">
                      Message
                    </label>
                    <textarea
                      class="form-textarea"
                      id="message"
                      name="message"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                </div>
                <button
                  class="form-submit"
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    formButtonClick();
                  }}
                >
                  <span className="submit-message ">Send Message</span>
                  <span className="submit-success ">Sent!</span>
                </button>
              </form>
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
