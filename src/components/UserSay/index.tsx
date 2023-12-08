import Marquee from "react-fast-marquee";
import PhReviews from "assets/img/icons/ph-review.webp";
import User from "assets/img/icons/user.webp";
import ProductHunt from "assets/img/icons/producthunt.svg";
import "./index.css";

export const UserSay = () => {
  return (
    <div className="container-fluid user-say-contain">
      <div className="row">
        <div className="d-flex flex-column justify-content-center col">
          <div className="d-flex flex-column align-items-center container">
            <a
              className="mb-2"
              href="https://www.producthunt.com/products/afforai/"
              target="_blank"
            >
              <img
                src={PhReviews}
                className="img-fluid"
                alt="Product Hunt Review 4.9/5"
                width="170px"
              />
            </a>
            <div className="text-center mb-2 font-weight-600 font-30">
              See what our users say
            </div>
            <div className="text-center mb-2 users-say-subtitle">
              Loved by thousands, all around the World
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="m-t-4">
          <Marquee>
            <div className="users-say-card">
              <div className="d-flex flex-column rounded-3 users-say-card-inline">
                <div className="flex-grow-1 text-wrap users-say">
                  AMAZING PRODUCT!, especially for low-tech but love new tech
                  person like me!! Used it to craft emails because I spend wayyy
                  too much time writing.
                </div>
                <div className="d-flex justify-content-between align-items-center pt-4">
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src={User}
                      className="img-fluid w-32 h-32"
                      alt="Thuy Nguyen, CEO Assistance"
                    />
                    <div className="user">Thuy Nguyen, CEO Assistance</div>
                  </div>
                  <a
                    href="#"
                    target="_blank"
                    className="d-md-inline-flex d-none align-items-center rounded-3 px-3 px-md-2 py-1 user-link"
                  >
                    <div className="d-inline-flex align-items-center gap-1">
                      <img
                        src={ProductHunt}
                        alt="Product Hunt logo"
                        height="16"
                      />
                      <span className="product-hunt">View on Product Hunt</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="users-say-card">
              <div className="d-flex flex-column rounded-3 users-say-card-inline">
                <div className="flex-grow-1 text-wrap users-say">
                  AMAZING PRODUCT!, especially for low-tech but love new tech
                  person like me!! Used it to craft emails because I spend wayyy
                  too much time writing.
                </div>
                <div className="d-flex justify-content-between align-items-center pt-4">
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src={User}
                      className="img-fluid w-32 h-32"
                      alt="Thuy Nguyen, CEO Assistance"
                    />
                    <div className="user">Thuy Nguyen, CEO Assistance</div>
                  </div>
                  <a
                    href="#"
                    target="_blank"
                    className="d-md-inline-flex d-none align-items-center rounded-3 px-3 px-md-2 py-1 user-link"
                  >
                    <div className="d-inline-flex align-items-center gap-1">
                      <img
                        src={ProductHunt}
                        alt="Product Hunt logo"
                        height="16"
                      />
                      <span className="product-hunt">View on Product Hunt</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="users-say-card">
              <div className="d-flex flex-column rounded-3 users-say-card-inline">
                <div className="flex-grow-1 text-wrap users-say">
                  AMAZING PRODUCT!, especially for low-tech but love new tech
                  person like me!! Used it to craft emails because I spend wayyy
                  too much time writing.
                </div>
                <div className="d-flex justify-content-between align-items-center pt-4">
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src={User}
                      className="img-fluid w-32 h-32"
                      alt="Thuy Nguyen, CEO Assistance"
                    />
                    <div className="user">Thuy Nguyen, CEO Assistance</div>
                  </div>
                  <a
                    href="#"
                    target="_blank"
                    className="d-md-inline-flex d-none align-items-center rounded-3 px-3 px-md-2 py-1 user-link"
                  >
                    <div className="d-inline-flex align-items-center gap-1">
                      <img
                        src={ProductHunt}
                        alt="Product Hunt logo"
                        height="16"
                      />
                      <span className="product-hunt">View on Product Hunt</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="users-say-card">
              <div className="d-flex flex-column rounded-3 users-say-card-inline">
                <div className="flex-grow-1 text-wrap users-say">
                  AMAZING PRODUCT!, especially for low-tech but love new tech
                  person like me!! Used it to craft emails because I spend wayyy
                  too much time writing.
                </div>
                <div className="d-flex justify-content-between align-items-center pt-4">
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src={User}
                      className="img-fluid w-32 h-32"
                      alt="Thuy Nguyen, CEO Assistance"
                    />
                    <div className="user">Thuy Nguyen, CEO Assistance</div>
                  </div>
                  <a
                    href="#"
                    target="_blank"
                    className="d-md-inline-flex d-none align-items-center rounded-3 px-3 px-md-2 py-1 user-link"
                  >
                    <div className="d-inline-flex align-items-center gap-1">
                      <img
                        src={ProductHunt}
                        alt="Product Hunt logo"
                        height="16"
                      />
                      <span className="product-hunt">View on Product Hunt</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </Marquee>
        </div>
        <div className="m-t-4">
          <Marquee direction="right">
            <div className="users-say-card">
              <div className="d-flex flex-column rounded-3 users-say-card-inline">
                <div className="flex-grow-1 text-wrap users-say">
                  AMAZING PRODUCT!, especially for low-tech but love new tech
                  person like me!! Used it to craft emails because I spend wayyy
                  too much time writing.
                </div>
                <div className="d-flex justify-content-between align-items-center pt-4">
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src={User}
                      className="img-fluid w-32 h-32"
                      alt="Thuy Nguyen, CEO Assistance"
                    />
                    <div className="user">Thuy Nguyen, CEO Assistance</div>
                  </div>
                  <a
                    href="#"
                    target="_blank"
                    className="d-md-inline-flex d-none align-items-center rounded-3 px-3 px-md-2 py-1 user-link"
                  >
                    <div className="d-inline-flex align-items-center gap-1">
                      <img
                        src={ProductHunt}
                        alt="Product Hunt logo"
                        height="16"
                      />
                      <span className="product-hunt">View on Product Hunt</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="users-say-card">
              <div className="d-flex flex-column rounded-3 users-say-card-inline">
                <div className="flex-grow-1 text-wrap users-say">
                  AMAZING PRODUCT!, especially for low-tech but love new tech
                  person like me!! Used it to craft emails because I spend wayyy
                  too much time writing.
                </div>
                <div className="d-flex justify-content-between align-items-center pt-4">
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src={User}
                      className="img-fluid w-32 h-32"
                      alt="Thuy Nguyen, CEO Assistance"
                    />
                    <div className="user">Thuy Nguyen, CEO Assistance</div>
                  </div>
                  <a
                    href="#"
                    target="_blank"
                    className="d-md-inline-flex d-none align-items-center rounded-3 px-3 px-md-2 py-1 user-link"
                  >
                    <div className="d-inline-flex align-items-center gap-1">
                      <img
                        src={ProductHunt}
                        alt="Product Hunt logo"
                        height="16"
                      />
                      <span className="product-hunt">View on Product Hunt</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="users-say-card">
              <div className="d-flex flex-column rounded-3 users-say-card-inline">
                <div className="flex-grow-1 text-wrap users-say">
                  AMAZING PRODUCT!, especially for low-tech but love new tech
                  person like me!! Used it to craft emails because I spend wayyy
                  too much time writing.
                </div>
                <div className="d-flex justify-content-between align-items-center pt-4">
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src={User}
                      className="img-fluid w-32 h-32"
                      alt="Thuy Nguyen, CEO Assistance"
                    />
                    <div className="user">Thuy Nguyen, CEO Assistance</div>
                  </div>
                  <a
                    href="#"
                    target="_blank"
                    className="d-md-inline-flex d-none align-items-center rounded-3 px-3 px-md-2 py-1 user-link"
                  >
                    <div className="d-inline-flex align-items-center gap-1">
                      <img
                        src={ProductHunt}
                        alt="Product Hunt logo"
                        height="16"
                      />
                      <span className="product-hunt">View on Product Hunt</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="users-say-card">
              <div className="d-flex flex-column rounded-3 users-say-card-inline">
                <div className="flex-grow-1 text-wrap users-say">
                  AMAZING PRODUCT!, especially for low-tech but love new tech
                  person like me!! Used it to craft emails because I spend wayyy
                  too much time writing.
                </div>
                <div className="d-flex justify-content-between align-items-center pt-4">
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src={User}
                      className="img-fluid w-32 h-32"
                      alt="Thuy Nguyen, CEO Assistance"
                    />
                    <div className="user">Thuy Nguyen, CEO Assistance</div>
                  </div>
                  <a
                    href="#"
                    target="_blank"
                    className="d-md-inline-flex d-none align-items-center rounded-3 px-3 px-md-2 py-1 user-link"
                  >
                    <div className="d-inline-flex align-items-center gap-1">
                      <img
                        src={ProductHunt}
                        alt="Product Hunt logo"
                        height="16"
                      />
                      <span className="product-hunt">View on Product Hunt</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};
