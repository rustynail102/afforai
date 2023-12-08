import LapToPLanding13 from "../../assets/img/icons/laptop-landing-13.png";
import MobileLanding3 from "../../assets/img/icons/mobile-landing-13.png";
import "./index.css";

export const MultipleLangSupported = () => {
  return (
    <div className="container-fluid self-container">
      <div className="row">
        <div className="d-flex flex-column justify-content-center col-md-5 offset-md-1 m-b-12">
          <div className="d-flex flex-column align-items-start container gap-24">
            <div className="d-inline-flex justify-content-center align-items-center feature-box">
              Multiple Language Supported
            </div>
            <div className="font-30 font-weight-500 pe-3 pe-md-5 me-md-4 regardless">
              Enjoy Afforai, regardless of where you're from
            </div>
            <div className="pe-4 pe-md-5 me-md-3 font-weight-400 font-16">
              We support more than 100 Languages, meaning you can seamlessly use
              our services regardless of where you are from. Our Cross Language
              Querying feature also allows flawless translation of documents.
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img
            src={MobileLanding3}
            className="img-fluid d-block d-sm-none"
            alt="Afforai supports over 100 languages and allow users to upload and ask question in most languages"
            data-xblocker="passed"
          />
          <img
            src={LapToPLanding13}
            className="img-fluid d-none d-sm-block"
            alt="Afforai supports over 100 languages and allow users to upload and ask question in most languages"
            data-xblocker="passed"
          />
        </div>
      </div>
    </div>
  );
};
