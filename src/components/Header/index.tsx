import LogoNewViolet from "assets/img/icons/logo-new-violet.webp";
import "./index.css";

const Header = () => {
    return (
        <div>
            <nav className="py-0 py-md-4 px-md-5 flex-column navbar navbar-expand-md navbar-light fixed-top">
                <div className="container-fluid nav-container">
                    <div className="w-100 d-flex align-items-center justify-content-between">
                        <a href="/" className="d-flex flex-shrink-1 justify-content-start align-items-center me-0 py-0 navbar-brand afforai" >
                            <img src={LogoNewViolet} alt="Afforai Logo" height="24px" width="24px" />
                            <div className="logo">Afforai</div>
                        </a>
                        <div className="d-md-flex d-none justify-content-center align-items-center navbar-nav">
                            <a href="https://afforai.getrewardful.com/signup" target="_blank" data-rr-ui-event-key="https://afforai.getrewardful.com/signup" className="mx-2 nav-link" >
                                <span className="menu">Affiliate</span>
                            </a>
                            <a href="/pricing" data-rr-ui-event-key="/pricing" className="mx-2 nav-link">
                                <span className="menu">Pricing</span>
                            </a>
                            <a href="/#testimonial" data-rr-ui-event-key="/#testimonial" className="mx-2 nav-link">
                                <span className="menu">Testimonials</span>
                            </a>
                            <a href="https://help.afforai.com/" target="_blank" data-rr-ui-event-key="https://help.afforai.com/" className="mx-2 nav-link" >
                                <span className="menu">Help Center</span>
                            </a>
                        </div>
                        <div className="d-flex flex-row justify-content-end align-items-center gap-2 navbar-nav button-flex">
                            <button type="button" className=" new-btn gray px-2 px-md-3 btn btn-primary fit-content">Log in</button>
                            <button type="button" className="new-btn violet-fill px-2 px-md-3 btn btn-primary try-free fit-content">Try for free</button>
                            <div className="d-block d-md-none navigation-toggler ">
                                {/* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="vertical-align: top;">
                                    <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M96 256h320M96 176h320M96 336h320"></path>
                                </svg> */}
                            </div>
                        </div>
                    </div>
                    <div className="d-none justify-content-start align-items-start navbar-nav">
                        <a href="https://afforai.getrewardful.com/signup" target="_blank" data-rr-ui-event-key="https://afforai.getrewardful.com/signup" className="mx-2 nav-link">
                            <span className="menu">Affiliate</span>
                        </a>
                        <a href="/pricing" data-rr-ui-event-key="/pricing" className="mx-2 nav-link">
                            <span className="menu">Pricing</span>
                        </a>
                        <a href="/#testimonial" data-rr-ui-event-key="/#testimonial" className="mx-2 nav-link">
                            <span className="menu">Testimonials</span>
                        </a>
                        <a href="https://help.afforai.com/" target="_blank" data-rr-ui-event-key="https://help.afforai.com/" className="mx-2 nav-link" >
                            <span className="menu">Help Center</span>
                        </a>
                    </div>
                </div>
            </nav>
            <div className="opacity-0 height-106"></div>
        </div>
    )
}

export default Header;