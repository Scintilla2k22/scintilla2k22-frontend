import React from "react";
import "./headSection.scss";
import Particles from "react-tsparticles";
import { particlePreset, particleStatic, particleTwinkle } from "../../../utils/particle";
import { asset } from "../../../utils";

const particlesInit = (main) => {
  console.log(main);
};
const particlesLoaded = (container) => {
  console.log(container);
};

const HeadSection = () => {
  return (
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
        <img src = {`${asset}/image/head-section-2.png`} />
        <img src = {`${asset}/image/head-right-section-1.png`} />

      </div>
      <div className="row">
        <div className="col col-6 head-left ">
          <div className="head-box">
            
          </div>
        </div>
        <div className="col col-6  head-right">

        </div>
      </div>
    </section>
  );
};

export default HeadSection;
