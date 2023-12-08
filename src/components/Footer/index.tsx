import LogoNewViolte from "../../assets/img/icons/logo-new-violet.webp";
import Sputnikatx from "../../assets/img/icons/sputnikatx.png";
import "./index.css";

export const Footer = () => {
  return (
    <div className="mb-md-5 mb-4 container-fluid">
      <div className="row">
        <div className="pt-5 d-flex justify-content-center col">
          <div className="d-flex flex-wrap flex-grow-1 justify-content-between rounded-4 footer-container">
            <div className="d-flex flex-column mb-4 gap-24 flex-b-360">
              <div className="d-flex flex-column">
                <div className="d-flex mb-md-0">
                  <img
                    src={LogoNewViolte}
                    alt="Afforai Logo"
                    height="24px"
                    width="24px"
                  />
                  <div className="afforai">Afforai</div>
                </div>
                <div className="text-grey font-12 m-t-2">
                  Afforai is your research tool in to damn near anything.
                  Helping you summarise, translate, and withdraw data from
                  documents.
                </div>
                <div className="text-grey font-16 m-t-2">
                  Copyright © 2023 Afforai Inc. All rights reserved.
                </div>
              </div>
              <a href="#" target="_blank">
                <img
                  src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=403202&amp;theme=light&amp;period=daily"
                  alt="Afforai - Summarize, interact, translate your documents with AI | Product Hunt"
                  width="195"
                  height="42"
                  className="w-195 h-42"
                />
              </a>
              <div className="d-flex flex-column gap-8">
                <div className="font-16 font-weight-500">Backed by</div>
                <img
                  src={Sputnikatx}
                  height="46"
                  width="137"
                  alt="Sputnik ATX VC"
                />
              </div>
            </div>
            <div className=" d-flex flex-column gap-16 flex-b-160">
              <div className="font-16 font-weight-500">Company</div>
              <a href="/our_story">
                <div className="text-grey font-12">Our Story</div>
              </a>
              <a href="https://afforai.getrewardful.com/signup" target="_blank">
                <div className="text-grey font-12">Affiliate</div>
              </a>
              <a href="/security" className="policy">
                <div className="text-grey font-12">Security</div>
              </a>
              <a
                href="https://trello.com/b/98yNMfwA/afforai-roadmap"
                target="_blank"
              >
                <div className="text-grey font-12">Roadmap</div>
              </a>
              <a href="/contact">
                <div className="text-grey font-12">Contact Us</div>
              </a>
            </div>
            <div className=" d-flex flex-column flex-b-160 gap-16">
              <div className="font-weight-500 font-16">Resources</div>
              <a href="https://help.afforai.com/" target="_blank">
                <div className="text-grey font-12">Help Center</div>
              </a>
              <a href="/documentation" className="policy">
                <div className="text-grey font-12">API Docs</div>
              </a>
              <a href="/terms_of_use" className="policy">
                <div className="text-grey font-12">Terms of Use</div>
              </a>
              <a href="/privacy_policy" className="policy">
                <div className="font-12 text-grey">Privacy Policy</div>
              </a>
            </div>
            <div className=" d-flex flex-column flex-b-160 gap-16">
              <div className="font-16 font-weight-500">Follow Us</div>
              <a href="https://www.facebook.com/groups/afforai" target="_blank">
                <div className="text-grey font-12">Facebook Group</div>
              </a>
              <a href="https://linkedin.com/company/afforai/" target="_blank">
                <div className="text-grey font-12">LinkedIn</div>
              </a>
              <a href="https://twitter.com/afforai/" target="_blank">
                <div className="text-grey font-12">Twitter</div>
              </a>
              <a href="https://medium.com/@alec-afforai" target="_blank">
                <div className="text-grey font-12">Medium Blog</div>
              </a>
            </div>
            <div className="d-flex flex-column flex-b-160 gap-16">
              <div className="font-weight-500 font-16">Language</div>
              <div className="text-color-bright-purple font-12">English</div>
              <div className="text-grey font-12">Vietnamese</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
