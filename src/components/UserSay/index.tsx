import { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import PhReview from "assets/img/icons/ph-review.webp";
import Producthunt from "assets/img/icons/producthunt.svg";
import User from "assets/img/icons/user.webp";
import { UserType, users1, users2 } from "constants/index";
import "./index.css";

const render = (user: UserType) => (
  <div className="feedback-wrapper" key={user.name}>
    <div className="body">
      <div className="feedback-content">{user.content}</div>
      <div className="feeback-user-wrapper">
        <div className="align-center flex">
          <img src={User} width={32} height={32} />
          &nbsp;
          <span style={{ color: "rgb(82, 82, 82)", fontSize: "14px" }}>
            {user.name}
          </span>
        </div>
        <a href="" className="contact">
          <img src={Producthunt} width={16} height={16} />
          View on Product Hunt
        </a>
      </div>
    </div>
  </div>
);

export const UserSay = () => {
  const swipe = (selector: string, dir: number = 1) => {
    const slider: HTMLElement = document.querySelector(selector)!;
    let isDown: boolean = false;
    let startX: number;
    let scrollLeft: number;

    slider.scrollLeft = 3000;

    slider.addEventListener("mousedown", (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => {
      isDown = false;
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
    });
    slider.addEventListener("mousemove", (e: MouseEvent) => {
      if (!isDown) return;

      const x: number = e.pageX - slider.offsetLeft;
      const walk: number = x - startX;

      slider.scrollLeft = scrollLeft - walk;
      if (slider.scrollLeft === 0) {
        slider.scrollLeft = 4340;
      } else if (slider.scrollLeft >= 7200) {
        slider.scrollLeft = 2900;
      }
    });

    setInterval(() => {
      if (!isDown) {
        slider.scrollLeft += dir;
        console.log(slider.scrollLeft);
        if (slider.scrollLeft >= 7200) {
          slider.scrollLeft = 2900;
        }
      }
    }, 40);
  };

  useEffect(() => {
    swipe(".swipe1", -1);
    swipe(".swipe2", 1);
  }, []);

  return (
    <div className="self-container">
      <Grid container>
        <Grid
          container
          justifyContent="center"
          mt={45}
          flexDirection="column"
          gap={1}
          mb={4}
        >
          <Grid item container justifyContent="center">
            <a style={{ width: 170, borderTopLeftRadius: 10 }}>
              <picture>
                <source srcSet={PhReview} type="image/webp" />
                <img
                  width="100%"
                  src={PhReview}
                  alt="Afforai support multiple document formats"
                  data-xblocker="passed"
                />
              </picture>
            </a>
          </Grid>
          <Grid item container justifyContent="center">
            <Typography
              textAlign="center"
              color="color: rgb(34, 34, 34)"
              fontWeight={600}
              lineHeight="130%"
              fontSize={36}
            >
              See what our users say
            </Typography>
          </Grid>
          <Grid item container justifyContent="center">
            <Typography
              textAlign="center"
              maxWidth={556}
              color="color: rgb(82, 82, 82)"
              fontWeight={400}
              lineHeight="130%"
              fontSize={16}
            >
              Loved by thousands, all around the World
            </Typography>
          </Grid>
        </Grid>

        {/* left flow Carousel */}
        <Grid container mb={1}>
          <div className="infinite-scroll-loop-outer swipe1">
            <div className="infinite-scroll-loop-inner">
              <div style={{ display: "inline-block" }}>
                <div style={{ display: "inline" }}>
                  {users1.map((user) => render(user))}
                </div>
              </div>
            </div>
            <div className="infinite-scroll-loop-inner">
              <div style={{ display: "inline-block" }}>
                <div style={{ display: "inline" }}>
                  {users1.map((user) => render(user))}
                </div>
              </div>
            </div>
          </div>
        </Grid>

        {/* right flow Carousel */}
        <Grid container mb={1}>
          <div className="infinite-scroll-loop-outer swipe2">
            <div className="infinite-scroll-loop-inner">
              <div style={{ display: "inline-block" }}>
                <div style={{ display: "inline" }}>
                  {users2.map((user) => render(user))}
                </div>
              </div>
            </div>
            <div className="infinite-scroll-loop-inner">
              <div style={{ display: "inline-block" }}>
                <div style={{ display: "inline" }}>
                  {users2.map((user) => render(user))}
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
