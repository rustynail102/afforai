import CheckMark from "assets/img/icons/check-circle.svg";
import LaptopLanding4 from "assets/img/icons/laptop-landing-4.png";

import "./index.css";

const AfforaiTranslateFeature = () => {
  return (
    <div className="container-fluid afforai-translate">
      <div className="row">
        <div className="px-0 pe-md-5 d-flex flex-column justify-content-center col-md-5 offset-md-1">
          <div className="px-3 pe-md-5 container">
            <div className="mb-3 say-goodbye">
              Say goodbye to long, tiresome documents
            </div>
            <div className="mb-4 me-3 me-md-5 translate-comment">
              Afforai seamlessly translates documents, files, spreadsheets &amp;
              websites, filtering out what you don’t need &amp; answering your
              specific questions within seconds.
            </div>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex align-items-center">
                <img
                  src={CheckMark}
                  className="me-3"
                  alt="checkmark"
                  height="24"
                />
                <span className="font-16 text-color-bright-green">
                  A whip smart research assistant
                </span>
              </div>
              <div className="d-flex align-items-center">
                <img
                  src={CheckMark}
                  className="me-3"
                  alt="checkmark"
                  height="24"
                />
                <span className="font-16 text-color-bright-green">
                  We speak every language
                </span>
              </div>
              <div className="d-flex align-items-center">
                <img
                  src={CheckMark}
                  className="me-3"
                  alt="checkmark"
                  height="24"
                />
                <span className="font-16 text-color-bright-green">
                  Reliable data citation for answers
                </span>
              </div>
              <div className="d-flex align-items-center">
                <img
                  src={CheckMark}
                  className="me-3"
                  alt="checkmark"
                  height="24"
                />
                <span className="font-16 text-color-bright-green">
                  Fort-Knox level data security
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 mt-md-0 col-md-5">
          <img
            src={LaptopLanding4}
            className="img-fluid"
            alt="Afforai masters the documents you upload"
            data-xblocker="passed"
          />
        </div>
      </div>
    </div>
  );
};

export default AfforaiTranslateFeature;
