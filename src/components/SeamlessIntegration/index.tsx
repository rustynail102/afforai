import LapTopLanding15 from "../../assets/img/icons/laptop-landing-15.png";
import "./index.css";

export const SeamlessIntegration = () => {
  return (
    <div className="container-fluid self-container">
      <div className="row">
        <div className="d-flex flex-column justify-content-center col">
          <div className="d-flex flex-column align-items-center container gap-24">
            <div>
              <div className="d-inline-flex justify-content-center align-items-center feature-box">
                Seamless Integrations - Coming Soon
              </div>
            </div>
            <div className="text-center upload-files">
              Upload Files directly from Google Drive, One Drive &amp; Dropbox
            </div>
            <div className="text-center upload-files-subtitle">
              Afforai allows you to upload files directly from Google Drive, One
              Drive &amp; Dropbox, meaning your experience will be smooth
              sailing regardless of your preferred{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="laptop-15">
          <img
            src={LapTopLanding15}
            className="img-fluid"
            width="100%"
            data-xblocker="passed"
          />
        </div>
      </div>
    </div>
  );
};
