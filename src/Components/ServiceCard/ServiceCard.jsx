import "./ServiceCard.css";
import { scrollToTop } from "../../Utils/ScrolltoTop";
import { Link } from "react-router-dom";

function ServiceCard({ image, text }) {
  return (
    <Link to="/Services" className="services-card" onClick={scrollToTop}>
      <img src={image} alt="physical therapy image"></img>
      <p>{text}</p>
      <div className="accent-bar"></div>
    </Link>
  );
}

export default ServiceCard;
