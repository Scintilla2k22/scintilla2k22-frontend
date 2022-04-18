import React from "react";
import "./headSection.scss";
import Particles from "react-tsparticles";

import {
  particlePreset,
  particleStatic,
  particleTwinkle,
} from "../../../utils/particle";
import { asset } from "../../../utils";
import Asteroids from "../../Arts/asteroids";

const particlesInit = (main) => {
  console.log(main);
};
const particlesLoaded = (container) => {
  console.log(container);
};

const HeadSection = () => {

  return (
    <>
      <section className="head-container ">
        <div className="head-dust">
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{ ...particlePreset }}
          />
        </div>

        <div className="head-bg">
          {[1, 2, 4, 5, 1, 2, 4, 5, 1, 2, 4].map(() => (
            <Asteroids />
          ))}
          {/* <div className="head-planet"></div> */}
          <img src={`${asset}/image/head-left-image.png`} />

          <img src={`${asset}/image/head-right-image.png`} />
        </div>
        <div className="row head-content m-0">
          <div className="col-md-12 col-md-6 head-left ">
            <div className="head-box">
              <div className="text-1">
                <span>S</span>
                <span>c</span>
                <span>i</span>
                <span>n</span>
                <span>t</span>
                <span>i</span>
                <span>l</span>
                <span>l</span>
                <span>a</span>
              </div>

              <p className="text-2">2K22</p>
              <a
                href="https://www.youtube.com/channel/UC-NYMUWDLUwxruNUzpOzO4g/about?app=desktop"
                target="_blank"
              >
                <button className="teaser">Explore Treasure</button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6  head-right"></div>
      </section>
      <div className="wave-box bg-light">
        <img src={`${asset}/image/curves.svg`} />
      </div>
    </>
  );
};

export default HeadSection;
