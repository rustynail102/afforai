import LapTopLanding12 from "../../assets/img/icons/laptop-landing-12.png";
import FastForward from "../../assets/img/icons/fast-forward.svg";
import PowerOff from "../../assets/img/icons/power-off.svg";
import GoogleMode from "../../assets/img/icons/search-plus.svg";

import "./index.css";

export const DifferentModes = () => {
  return (
    <div className="container-fluid self-container">
      <div className="row">
        <div className="d-flex align-items-center col-md-4 offset-md-1">
          <img
            src={LapTopLanding12}
            className="img-fluid"
            alt="Afforai supports questions answer with Google and Deep Document Search"
            data-xblocker="passed"
          />
        </div>
        <div className="col-md-6 offset-md-1">
          <div className="d-flex flex-column align-items-start container gap-24">
            <div className="d-inline-flex justify-content-center align-items-center feature-box">
              Different Modes Available
            </div>
            <div className="pe-md-5 me-md-4 different-modes-subtitle">
              Customize your assistant with a range of different modes
            </div>
            <div className="pe-md-5 me-md-3">
              Further power your questions with additional modes. Afforai allows
              you to switch between three different modes, each which have
              unique ways of utilising our AI tools to answer your question(s).
            </div>
            <div className="d-flex flex-column gap-4 pe-md-5 me-md-3">
              <div className="d-flex gap-3 align-items-top">
                <img src={FastForward} alt="fast mode" height="24" />
                <div className="d-flex flex-column gap-8">
                  <div className="d-inline-flex align-items-center gap-3">
                    <span className="font-16 font-weight-500 text-color-bright-purple">
                      Fast Mode (default)
                    </span>
                    <div className="d-flex align-items-center credit">
                      <span>1 credit</span>
                    </div>
                  </div>
                  <div className="text-color-light-grey font-14">
                    Quickly ask a question and receive an answer from the AI.
                    This mode is most suited for applications that require only
                    a small part of the documents to be scanned (ex. FAQ
                    Chatbot, Search).
                  </div>
                </div>
              </div>
              <div className="d-flex gap-3 align-items-top">
                <img src={PowerOff} alt="powerful mode" height="24" />
                <div className="d-flex flex-column gap-8">
                  <div className="d-inline-flex align-items-center gap-3">
                    <span className="font-16 text-color-bright-purple font-weight-500">
                      Powerful Mode
                    </span>
                    <div className="d-flex align-items-center credit">
                      <span>4 credits</span>
                    </div>
                  </div>
                  <div className="text-color-light-purple font-14">
                    Get answers of extra high quality from the AI. This mode is
                    most suited for applications that require inferences as well
                    as the full documents to be scanned (ex. Textual Data
                    Analysis, Search with Inference, Report Generation).
                  </div>
                </div>
              </div>
              <div className="d-flex gap-3 align-items-top">
                <img src={GoogleMode} alt="google search mode" height="24" />
                <div className="d-flex flex-column gap-8">
                  <div className="d-inline-flex align-items-center gap-3">
                    <span className="font-16 text-color-bright-purple font-weight-500">
                      Google Mode
                    </span>
                    <div className="d-flex align-items-center credit">
                      <span>5 credits</span>
                    </div>
                  </div>
                  <div className="font-14 text-color-light-purple">
                    Supplement your answers with the top 3 results from Google
                    Search. This adds extra reliability to back up our already
                    incredibly accurate answers.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
