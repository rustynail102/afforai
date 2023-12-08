import CheckMark from "assets/svg/CheckMark.svg";

export const AfforaiFeature: React.FC<{ feature: string }> = ({ feature }) => {
  return (
    <div className="d-flex align-items-center afforai-feature m-x-8">
      <img src={CheckMark} alt="CheckMark" />
      <div>{feature}</div>
    </div>
  );
};
