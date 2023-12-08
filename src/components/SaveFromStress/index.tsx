import LapToplanding5 from "assets/img/icons/laptop-landing-5.png";
import "./index.css";

export const SaveFromStress = () => {
  return (
    <div className="container-fluid self-container">
      <div className="row">
        <div className="d-flex flex-column justify-content-center col">
          <div className="d-flex flex-column align-items-center container gap-24">
            <div>
              <div className="d-inline-flex justify-content-center align-items-center feature-box">
                10x your productivity
              </div>
            </div>
            <div className="text-center stress-unleash-title">
              Save yourself from stress &amp; streamline your workflow
            </div>
            <div className="text-center stress-unleash-subtilte">
              The average worker spends 9 hours per week looking through &amp;
              gathering information from thick stacks of documents. With
              Afforai, you can save yourself 8 hours per week (plus a lot of
              headaches).
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="stress-unleash-img-box">
          <img
            src={LapToplanding5}
            className="img-fluid"
            width="100%"
            data-xblocker="passed"
          />
        </div>
      </div>
    </div>
  );
};
