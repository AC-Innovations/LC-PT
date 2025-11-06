import "./TeamMember.css";

function TeamMember({ image, imageAlt, name, position, description }) {
  return (
    <div className="team-member">
      <img src={image} alt={imageAlt} />
      <div className="text-container">
        <div className="label-container">
          <label>{name}</label>
          <div className="highlight"></div>
        </div>

        <p className="position">{position}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

export default TeamMember;
