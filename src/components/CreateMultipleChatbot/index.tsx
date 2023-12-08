import LaptopLanding11 from "assets/img/icons/laptop-landing-11.png";
import mobileLanding11 from "assets/img/icons/mobile-landing-11.png";
import "./index.css";

export const CreateMultipleChatbot = () => {
  return (
    <div className="container-fluid self-container">
      <div className="row">
        <div className="px-0 pe-md-5 d-flex flex-column justify-content-center col-md-5 offset-md-1">
          <div className="d-flex flex-column px-3 pe-md-5 container gap-24">
            <div>
              <div className="d-inline-flex justify-content-center align-items-center feature-box">
                Most versatile
              </div>
            </div>
            <div className="pe-md-5 most-versatile-title">
              Create multiple chatbots for different purposes
            </div>
            <div className="pe-md-3 most-versatile-subtitle">
              Legal documents? Summarising a book? Extracting data from a
              website? We allow you to create multiple chatbots at one time, so
              you can use Afforai for a whole range of purposes.
            </div>
            <div className="d-flex flex-shrink-1 align-content-center flex-row gap-4">
              <button
                type="button"
                className="new-btn violet-fill btn btn-primary get-started"
              >
                Get started
              </button>
              <button
                type="button"
                className="new-btn gray btn btn-primary get-started"
              >
                View pricing
              </button>
            </div>
          </div>
        </div>
        <div className="mt-5 mt-md-0 col-md-5">
          <img
            src={mobileLanding11}
            className="img-fluid d-block d-sm-none"
            alt="Afforai masters the documents you upload"
            data-xblocker="passed"
          />
          <img
            src={LaptopLanding11}
            className="img-fluid d-none d-sm-block"
            alt="Afforai masters the documents you upload"
            data-xblocker="passed"
          />
        </div>
      </div>
    </div>
  );
};
