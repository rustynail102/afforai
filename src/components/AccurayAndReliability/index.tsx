import LaptopLanding17 from "assets/img/icons/laptop-landing-17.png";
import LaptopLanding18 from "assets/img/icons/laptop-landing-18.png";
import LaptopLanding19 from "assets/img/icons/laptop-landing-19.png";
import "./index.css";

const AccurayAndReliability = () => {
  return (
    <div className="container-fluid self-container animation">
      <div className="row">
        <div className="d-flex flex-column justify-content-center col">
          <div className="d-flex flex-column align-items-center container gap-24">
            <div className="text-center unquestionable">
              Unquestionable accuracy &amp; reliability
            </div>
            <div className="text-center unquestionable-subtitle">
              We pride ourselves on the quality of our chatbot’s responses, and
              go the extra mile to ensure the accuracy &amp; reliability of our
              answers.
            </div>
          </div>
        </div>
      </div>
      <div className="row img-box">
        <div className="col-md-4">
          <div className="d-flex flex-column rounded-4 h-100">
            <div className="img-background">
              <img
                src={LaptopLanding17}
                className="img-fluid"
                alt="Security, Reliable, and Trustworthy"
                data-xblocker="passed"
              />
            </div>
            <div className="d-flex flex-column px-3 pt-2 pb-4">
              <div className="d-inline-flex align-items-center gap-2">
                <span className="font-16 text-color-bright-grey font-weight-500">
                  Trusted by users all over the World
                </span>
              </div>
              <div className="font-12 text-color-bright-grey">
                Afforai is used all around the World, saving thousands of people
                time and money with our speed &amp; accuracy.
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex flex-column rounded-4 h-100">
            <div className="img-background">
              <img
                src={LaptopLanding18}
                className="img-fluid"
                alt="Security, Reliable, and Trustworthy"
                data-xblocker="passed"
              />
            </div>
            <div className="d-flex flex-column px-3 pt-2 pb-4">
              <div className="d-inline-flex align-items-center gap-2">
                <span className="font-16 text-color-bright-grey font-weight-500">
                  Trusted by users all over the World
                </span>
              </div>
              <div className="font-12 text-color-bright-grey">
                Afforai is used all around the World, saving thousands of people
                time and money with our speed &amp; accuracy.
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex flex-column rounded-4 h-100">
            <div className="img-background">
              <img
                src={LaptopLanding19}
                className="img-fluid"
                alt="Security, Reliable, and Trustworthy"
                data-xblocker="passed"
              />
            </div>
            <div className="d-flex flex-column px-3 pt-2 pb-4">
              <div className="d-inline-flex align-items-center gap-2">
                <span className="font-16 text-color-bright-grey font-weight-500">
                  Trusted by users all over the World
                </span>
              </div>
              <div className="font-12 text-color-bright-grey">
                Afforai is used all around the World, saving thousands of people
                time and money with our speed &amp; accuracy.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccurayAndReliability;
