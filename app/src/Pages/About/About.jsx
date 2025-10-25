import "./About.css";

import Hero from "../../Components/Hero/Hero.jsx";
import TeamMember from "../../Components/TeamMember/TeamMember.jsx";
import Banner from "../../Components/Banner/Banner.jsx";
import Footer from "../../Components/Footer/Footer.jsx";

import aboutPhoto from "../../assets/Photos/aboutPhoto.jpg";
import groupPhoto from "../../assets/Photos/groupPhoto.png";
import kneePT from "../../assets/Photos/kneePT.jpg";
import backPT from "../../assets/Photos/backPT.jpg";
import legPT from "../../assets/Photos/legPT.jpg";
import posingMan from "../../assets/Photos/posingMan.png";
import posingWoman from "../../assets/Photos/posingWoman.png";
import posingWoman2 from "../../assets/Photos/posingWoman2.png";
import assistants from "../../assets/Photos/assistants.png";
import bannerimage from "../../assets/Images/banner-small.jpg";

function About() {
  return (
    <>
      <Hero enableCTA={false} title={"About Us"} image={aboutPhoto} />
      <div className="container">
        <section className="who-we-are">
          <div className="text-container">
            <h2>Who we are</h2>
            <p>
              At LC, we believe physical therapy is more than recovery—it’s
              about restoring confidence, independence, and quality of life for
              the whole family. <br></br> <br></br>
              Founded in 2010, our physical therapy clinic brings trusted
              experience and lasting community impact. <br></br> <br></br>
              Whether you’re a child recovering from an injury, a parent
              managing everyday aches, or a grandparent striving to stay active,
              our team is here to help every step of the way.
            </p>
          </div>
          <div className="bento-container">
            <div className="row1">
              <img src={groupPhoto} alt="group photo" />
            </div>
            <div className="row2">
              <div className="column1">
                <img src={kneePT} alt="group photo" />
              </div>
              <div className="column2">
                <img src={backPT} alt="group photo" />
              </div>
              <div className="column3">
                <img src={legPT} alt="group photo" />
              </div>
            </div>
          </div>
        </section>

        <section className="meet-the-team">
          <div className="title-container">
            <h2>Meet the Team</h2>
            <div className="accent-bar"></div>
          </div>

          <div className="team-container">
            <TeamMember
              image={posingMan}
              imageAlt="man posing"
              name="Dave Biery"
              position="Owner"
              description="Dave has been operating LC for over 15 years."
            />
            <TeamMember
              image={posingWoman}
              imageAlt="woman posing"
              name="Tami Biery"
              position="Owner, PT"
              description="Tami has been working with patients for 10 years, receiving her PT license from the University of Delaware"
            />
            <TeamMember
              image={posingWoman2}
              imageAlt="woman posing"
              name="Casi Lastname"
              position="PTA"
              description="Casi has been working with LC PT for 5 years and is currently working towards a physical therapist degree"
            />
          </div>
        </section>
        <section className="assistants">
          <div className="assistants-container">
            <h1>
              And all our <br></br>amazing <br></br>assistants!
            </h1>
            <div className="image-container">
              <img src={assistants} alt="group photo" />
            </div>
          </div>
        </section>

        <Banner
          text={"Let us help you get back to doing what you love."}
          btntext={"Contact Us"}
          image={bannerimage}
          imgalt={"instructor helping patient"}
          enableBackground={true}
          bgColor={"#d9d9d9"}
        />
      </div>

      <Footer />
    </>
  );
}

export default About;
