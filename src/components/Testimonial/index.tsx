import LapTopLanding16 from "assets/img/icons/laptop-landing-16.png";
import "./index.css";

export const Testimonial = () => {
  return (
    <div className="container-fluid self-container">
      <div className="d-flex flex-column relative overflow-hidden">
        <div className="padding-b-240 z-2">
          <div className="d-flex flex-column justify-content-center">
            <div className="d-flex flex-column align-items-center container gap-24">
              <div className="text-center start">Start saving time today!</div>
              <div className="text-center sub-start">
                Join an ever-growing community, and get with Afforai started
                free of charge!
              </div>
              <button
                type="button"
                className="new-btn violet-fill btn btn-primary get-started"
              >
                Get Started for Free
              </button>
            </div>
          </div>
        </div>
        <div className="img-bg-pos">
          <img src={LapTopLanding16} className="img-fluid" width="100%" />
        </div>
      </div>
    </div>
  );
};
