import "./TeamMember.css";

function TeamMember(props) {
  return (
    <div className="team-member">
      <img src={props.image} alt={props.imageAlt} />
      <div className="text-container">
        <div className="label-container">
          <label>{props.name}</label>
          <div className="highlight"></div>
        </div>

        <p className="position">{props.position}</p>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}

export default TeamMember;
