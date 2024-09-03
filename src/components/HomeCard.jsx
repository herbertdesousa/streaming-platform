import "./HomeCard.css";

// eslint-disable-next-line react/prop-types
export function HomeCard({ num, title, description, bgColor }) {
  return (
    <div className={"card " + bgColor}>
      <h3>{num}</h3>
      <strong>{title}</strong>
      <p>{description}</p>
    </div>
  );
}
