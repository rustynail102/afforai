import LapToPLanding20 from "assets/img/icons/laptop-landing-20.png";
import "./index.css";

export const MyPromise = () => {
  return (
    <div className="container-fluid self-container">
      <div className="row">
        <div className="d-flex flex-column justify-content-center col-md-5 offset-md-1 m-b-12">
          <div className="d-flex flex-column align-items-start container gap-24">
            <div className="d-inline-flex justify-content-center align-items-center feature-box">
              My promise to you
            </div>
            <div className="font-30 pe-3 pe-md-5 me-md-4 font-weight-500 regardless leading-130">
              100% money back guarantee if you are not satisfied
            </div>
            <div className="pe-4 pe-md-5 me-md-3 font-weight-400 font-16">
              We crafted Afforai with total belief in our ability to make a
              chatbot that is not only powerful and reliable, but able to
              maximise your satisfaction as a user. This is why we have
              implemented a money back guarantee if you find yourself not
              satisfied with the capabilities of Afforai.z
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img
            src={LapToPLanding20}
            className="img-fluid"
            alt="Afforai supports over 100 languages and allow users to upload and ask question in most languages"
            data-xblocker="passed"
          />
        </div>
      </div>
    </div>
  );
};
