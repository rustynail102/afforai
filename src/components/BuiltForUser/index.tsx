import LapTopLanding6 from "assets/img/icons/laptop-landing-6.png";
import LapTopLanding7 from "assets/img/icons/laptop-landing-7.png";
import LapTopLanding8 from "assets/img/icons/laptop-landing-8.png";
import LapTopLanding9 from "assets/img/icons/laptop-landing-9.png";
import LapTopLanding10 from "assets/img/icons/laptop-landing-10.png";
import "./index.css";

export const BuiltForUser = () => {
  return (
    <div className="container-fluid self-container">
      <div className="row">
        <div className="d-flex flex-column justify-content-center col">
          <div className="d-flex flex-column align-items-center container gap-24">
            <div className="d-inline-flex justify-content-center align-items-center feature-box">
              Why choose us?
            </div>
            <div className="text-center font-weight-600 font-36">
              Built for the user
            </div>
            <div className="text-center built-for-user-subtilte">
              Afforai is where exceptional customer focus meets exceptional
              technology.
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="d-flex col-md-4 offset-md-1">
          <div className="d-flex flex-column rounded-4 built-feature-container">
            <div className="built-feature-background">
              <img
                src={LapTopLanding6}
                className="img-fluid"
                alt="Afforai supports multiple languages"
                data-xblocker="passed"
              />
            </div>
            <div className="flex-grow-1 d-flex flex-column px-3 pt-2 pb-4">
              <div className="d-inline-flex align-items-center gap-2">
                <span className="font-16 font-weight-500">
                  Cross Language Querying
                </span>
                <div className="d-flex align-items-center new">
                  <span>NEW</span>
                </div>
              </div>
              <div>
                Afforai is able to translate your documents to more than 100
                languages, meaning wherever you’re from, you can be assured we
                can help.
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex col-md-6 padding-5 width-pro-48">
          <div className="d-flex flex-column rounded-4 built-feature-container">
            <div className="multiple-type-support">
              <img
                src={LapTopLanding7}
                className="img-fluid"
                alt="Afforai support multiple document formats"
                data-xblocker="passed"
              />
            </div>
            <div className="flex-grow-1 d-flex flex-column px-3 pt-2 pb-4">
              <div className="d-inline-flex align-items-center gap-2">
                <span className="font-16 font-weight-500">
                  Multiple file types supported
                </span>
              </div>
              <div>
                Afforai can extract data from a multitude of formats, including;
                PDF, URL, DOCX, PPTX &amp; XLSX, as well as your own text &amp;
                links from Websites. The possibilities are limitless!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="d-flex flex-column col-md-6 offset-md-1 padding-5 width-pro-48">
          <div className="flex-grow-1 d-flex flex-column rounded-4 built-feature-container">
            <div className="built-feature-background">
              <img
                src={LapTopLanding10}
                className="img-fluid"
                alt="Afforai shows you how it got its answer"
                data-xblocker="passed"
              />
            </div>
            <div className="d-flex flex-column px-3 pt-2 pb-4">
              <div className="d-inline-flex align-items-center gap-2">
                <span className="font-16 font-weight-500">
                  Valuable Data Citation
                </span>
                <div className="d-flex align-items-center new">
                  <span>NEW</span>
                </div>
              </div>
              <div className="font-12 text-color-bright-grey">
                Afforai is able to show exactly where your data has been
                extracted from &amp; highlight it for you, so you never loose
                your time validating information again.
              </div>
            </div>
          </div>
          <div className="flex-grow-1 d-flex flex-column rounded-4 built-feature-container">
            <div className="built-feature-background">
              <img
                src={LapTopLanding8}
                className="img-fluid"
                alt="Built in Document Viewer"
                data-xblocker="passed"
              />
            </div>
            <div className="d-flex flex-column px-3 pt-2 pb-4">
              <div className="d-inline-flex align-items-center gap-2">
                <span className="font-16 font-weight-500">
                  Built in Document Viewer
                </span>
              </div>
              <div className="font-12 text-color-bright-grey">
                Never Switch tabs again. Afforai’s document viewer means that
                you can have your uploaded files right next to your chatbot,
                giving you the ability to search the file, and refer to it for
                data citations.
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex col-md-4 padding-5 width-pro-35">
          <div className="d-flex flex-column justify-content-between rounded-4 h-100 built-feature-container">
            <div className="built-feature-background">
              <img
                src={LapTopLanding9}
                className="img-fluid"
                alt="Afforai is secured with the power of the cloud"
                data-xblocker="passed"
              />
            </div>
            <div className="flex-grow-1 d-flex flex-column px-3 pt-2 pb-4">
              <div className="d-inline-flex align-items-center gap-2">
                <span className="font-16 font-weight-500">
                  Unbreakable Security
                </span>
              </div>
              <div className="font-12 text-color-bright-grey">
                Afforai uses Azure Server &amp; Azure OpenAI API. In other
                words, your data is more than safe with us.{" "}
                <a href="/security" target="_blank" rel="noopener noreferrer">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
