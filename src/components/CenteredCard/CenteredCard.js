import "./style.css";

const CenteredCard = ({ children }) => {
  return (
    <div className="CenteredCard">
      <span>{children}</span>
    </div>
  );
};

export default CenteredCard;
