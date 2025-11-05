import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/Hero/Hero";
import "./Services.css";
import serviceimage from "../../assets/Images/services.jpg";
import bannerimage from "../../assets/Images/banner-small.jpg";
import insuranceimage from "../../assets/Images/insurance-images.png";
import Banner from "../../Components/Banner/Banner";
import { useState } from "react";

function Services() {
  const injuryData = {
    back: {
      title: "Back injuries",
      items: [
        {
          name: "Herniated Disc",
          what: "The soft inner core of a spinal disc bulges out, irritating nearby nerves.",
          focus:
            "Core stabilization, traction therapy, posture training, nerve gliding exercises.",
        },
        {
          name: "Fractured vertebrae",
          what: "The soft inner core of a spinal disc bulges out, irritating nearby nerves.",
          focus:
            "Core stabilization, traction therapy, posture training, nerve gliding exercises.",
        },
        {
          name: "Spinal stenosis",
          what: "The soft inner core of a spinal disc bulges out, irritating nearby nerves.",
          focus:
            "Core stabilization, traction therapy, posture training, nerve gliding exercises.",
        },
        {
          name: "Spondylolisthesis",
          what: "The soft inner core of a spinal disc bulges out, irritating nearby nerves.",
          focus:
            "Core stabilization, traction therapy, posture training, nerve gliding exercises.",
        },
      ],
    },
    foot_ankle: {
      title: "Foot & ankle",
      items: [
        {
          name: "Plantar fasciitis",
          what: "The soft inner core of a spinal disc bulges out, irritating nearby nerves.",
          focus:
            "Core stabilization, traction therapy, posture training, nerve gliding exercises.",
        },
        {
          name: "Metatarsal fractures",
          what: "The soft inner core of a spinal disc bulges out, irritating nearby nerves.",
          focus:
            "Core stabilization, traction therapy, posture training, nerve gliding exercises.",
        },
        {
          name: "Stress fractures",
          what: "The soft inner core of a spinal disc bulges out, irritating nearby nerves.",
          focus:
            "Core stabilization, traction therapy, posture training, nerve gliding exercises.",
        },
        {
          name: "Heel spurs",
          what: "The soft inner core of a spinal disc bulges out, irritating nearby nerves.",
          focus:
            "Core stabilization, traction therapy, posture training, nerve gliding exercises.",
        },
      ],
    },
    Knee: {
      title: "Knee",
      items: [
        {
          name: "ACL tears",
          what: "The soft inner core of a spinal disc bulges out, irritating nearby nerves.",
          focus:
            "Core stabilization, traction therapy, posture training, nerve gliding exercises.",
        },
        {
          name: "PCL tears",
          what: "The soft inner core of a spinal disc bulges out, irritating nearby nerves.",
          focus:
            "Core stabilization, traction therapy, posture training, nerve gliding exercises.",
        },
        {
          name: "LCL tears",
          what: "The soft inner core of a spinal disc bulges out, irritating nearby nerves.",
          focus:
            "Core stabilization, traction therapy, posture training, nerve gliding exercises.",
        },
        {
          name: "Meniscus tears",
          what: "The soft inner core of a spinal disc bulges out, irritating nearby nerves.",
          focus:
            "Core stabilization, traction therapy, posture training, nerve gliding exercises.",
        },
      ],
    },
    hand: {
      title: "Hand",
      items: [
        {
          name: "Fractures",
          what: "The soft inner core of a spinal disc bulges out, irritating nearby nerves.",
          focus:
            "Core stabilization, traction therapy, posture training, nerve gliding exercises.",
        },
        {
          name: "Sprains",
          what: "The soft inner core of a spinal disc bulges out, irritating nearby nerves.",
          focus:
            "Core stabilization, traction therapy, posture training, nerve gliding exercises.",
        },
        {
          name: "Lacerations",
          what: "The soft inner core of a spinal disc bulges out, irritating nearby nerves.",
          focus:
            "Core stabilization, traction therapy, posture training, nerve gliding exercises.",
        },
        {
          name: "Dislocations",
          what: "The soft inner core of a spinal disc bulges out, irritating nearby nerves.",
          focus:
            "Core stabilization, traction therapy, posture training, nerve gliding exercises.",
        },
      ],
    },
    neck: {
      title: "Neck",
      items: [
        {
          name: "Cervical whiplash",
          what: "The soft inner core of a spinal disc bulges out, irritating nearby nerves.",
          focus:
            "Core stabilization, traction therapy, posture training, nerve gliding exercises.",
        },
        {
          name: "Spondylolisthesis",
          what: "The soft inner core of a spinal disc bulges out, irritating nearby nerves.",
          focus:
            "Core stabilization, traction therapy, posture training, nerve gliding exercises.",
        },
        {
          name: "Spinal cord injuries",
          what: "The soft inner core of a spinal disc bulges out, irritating nearby nerves.",
          focus:
            "Core stabilization, traction therapy, posture training, nerve gliding exercises.",
        },
        {
          name: "Cervical stenosis",
          what: "The soft inner core of a spinal disc bulges out, irritating nearby nerves.",
          focus:
            "Core stabilization, traction therapy, posture training, nerve gliding exercises.",
        },
      ],
    },
  };

  const [selected, setSelected] = useState("back");

  const data = injuryData[selected];

  return (
    <>
      <Hero title={"Our Services"} image={serviceimage} enableCTA={false} />

      <div className="services-sect">
        <div className="container">
          <div className="injury">
            <div className="inj-menu">
              {Object.keys(injuryData).map((key) => (
                <label
                  key={key}
                  onClick={() => setSelected(key)}
                  className={selected === key ? "active" : ""}
                >
                  {injuryData[key].title.replace("Injuries", "")}
                </label>
              ))}
            </div>

            <div className="inj-det">
              <h1>{data.title}</h1>

              <div className="inj-boxes">
                {data.items.map((item, index) => (
                  <div className="box" key={index}>
                    <label>{item.name}</label>
                    <hr />
                    <div className="box-txt">
                      <p>
                        <strong>What is it?</strong>
                      </p>
                      <p>{item.what}</p>
                      <br />
                      <p>
                        <strong>PT focus</strong>
                      </p>
                      <p>{item.focus}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="partners">
            <div className="text">
              <h1>Insurance Partners</h1>
              <hr />
            </div>

            <div className="boxes">
              <img src={insuranceimage} alt="list of insurances" />
            </div>
          </div>

          <Banner
            text={"Let us help you get back to doing what you love."}
            btntext={"Contact us"}
            image={bannerimage}
            imgalt={"instructor helping patient"}
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Services;
