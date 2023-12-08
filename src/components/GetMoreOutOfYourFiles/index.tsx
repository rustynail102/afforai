import LapTopLanding14 from "assets/img/icons/laptop-landing-14.png";

export const GetMoreOutOfYourFiles = () => {
  return (
    <div className="container-fluid self-container">
      <div className="row">
        <div className="d-flex align-items-center col-md-4 offset-md-1">
          <img
            src={LapTopLanding14}
            className="img-fluid"
            alt="Afforai supports questions answer with Google and Deep Document Search"
            data-xblocker="passed"
          />
        </div>
        <div className="col-md-6 offset-md-1">
          <div className="d-flex flex-column align-items-start container gap-24">
            <div className="d-inline-flex justify-content-center align-items-center feature-box">
              Get more out of your files
            </div>
            <div className="pe-md-5 me-md-4 different-modes-subtitle">
              File Wizard - a game changing new feature
            </div>
            <div className="pe-md-5 me-md-3">
              Convert your files with less effort than ever. Afforai’s File
              Wizard feature allows you to transform your files, in limitless
              different ways. We can translate, summarize, or explain your
              upload in no time.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
