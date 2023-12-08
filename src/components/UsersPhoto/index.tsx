import LapTopLanding1 from "../../assets/img/icons/laptop-landing-2.png";
import "./index.css";

export const UserPhoto = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center users-container">
      <div className="text-center loved">
        Loved by <span className="loved-number">20,000+</span> users around the
        world
      </div>
      <img
        src={LapTopLanding1}
        alt="users"
        className="img-fluid"
        width="336"
        height="48"
      />
    </div>
  );
};
