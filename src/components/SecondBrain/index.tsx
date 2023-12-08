import AppSumo from "assets/img/icons/appsumo.png";
import LapTopLanding3 from "assets/img/icons/laptop-landing-3.png";
import LapTopLanding1 from "assets/img/icons/laptop-landing-1.png";
import LeftArrow from "assets/svg/LeftArrow.svg";
import { AfforaiFeature } from "./AfforaiFeature";
import "./index.css";

export const SecondBrain = () => {
  return (
    <div className="container-fluid container">
      <div className="d-flex flex-column align-items-center brain-container">
        <div className="d-flex flex-column title-container">
          <div className="d-inline-flex align-items-center app-sumo">
            <img src={AppSumo} width={26} height={20} alt="AppSumo" />
            <span>Now on AppSumo</span>
            <a
              href="#"
              target="_blank"
              className="d-flex align-items-center justify-content-center life-time"
            >
              <span>Get Lifetime Deal</span>
              <div className="left-arrow">
                <img src={LeftArrow} alt="leftArrow" />
              </div>
            </a>
          </div>
        </div>
        <div className="text-center second-brain-title">
          Your second brain for maximizing productivity
        </div>
        <div className="text-center second-brain-subtitle">
          Afforai is an AI chatbot that searches, summarizes, and translates
          info from multiple sources to produce trustworthy research. Feed
          lengthy research documents to stacks of dry compliance requirements
          and extract the key findings you need.
        </div>
        <div className="d-flex justify-content-between afforai-feature-box">
          <AfforaiFeature feature="Summarize Key Findings" />
          <AfforaiFeature feature="Summarize Key Findings" />
          <AfforaiFeature feature="Summarize Key Findings" />
          <AfforaiFeature feature="Summarize Key Findings" />
        </div>
        <div className="d-flex flex-shrink-1 align-content-center flex-row gap-4">
          <button
            type="button"
            className="new-btn violet-fill btn btn-primary"
          >
            Try for free
          </button>
          <button
            type="button"
            className="new-btn gray btn btn-primary"
          >
            View pricing
          </button>
        </div>
      </div>
      <div className="laptop-landing-1">
        <img
          src={LapTopLanding1}
          className="img-fluid"
          width="100%"
          data-xblocker="passed"
        />
      </div>
      <div className="laptop-landing-3">
        <img
          src={LapTopLanding3}
          alt="laptoplanding3"
          className="img-fluid"
          width="100%"
          data-xblocker="passed"
        />
      </div>
    </div>
  );
};
