import CheckMark from "assets/svg/CheckMark.svg";

const AfforaiFeature: React.FC<{ feature: string }> = ({ feature }) => {
  return (
    <div className="d-flex align-items-center afforai-feature">
      <img src={CheckMark} alt="CheckMark" />
      <div>{feature}</div>
    </div>
  );
};

export default AfforaiFeature;
