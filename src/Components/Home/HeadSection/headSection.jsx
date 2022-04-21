import React, {useRef, createRef} from "react";
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

  const rRef = createRef();
  const lRef = createRef();

  const pRef = [createRef(), createRef(), createRef()];

  const headRef = createRef();
  // window.addEventListener('scroll', () => {

  //   let scroll = window.scrollY;
  //   if(rRef && rRef.current){
  //     rRef.current.style.top = `${scroll*0.2}px`;
  
  //   }

  //   if(lRef && lRef.current){
  //     lRef.current.style.top = `${scroll*0.1}px`;
  
  //   }

  //   if(headRef && headRef.current){
  //     headRef.current.style.top = `${scroll*0.4}px`;
  //   }

  //   for(var i=0; i<3; i++){
  //     if(pRef[i] && pRef[i].current){
  //       pRef[i].current.style.top = `calc(50% - 200px + ${scroll*1.8}px )`;
  //     }
  //   }

  // })

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
          {[1, 2, 4, 5, 1, 2, 4, 5, 1, 2, 4, 5, 6,6,6].map(() => (
            <Asteroids />
          ))}
          {/* <div className="head-planet"></div> */}

          <img src={`${asset}/image/p1.svg`}  ref = {pRef[0]} />
          <img src={`${asset}/image/p2.svg`}  ref = {pRef[1]} />
          <img src={`${asset}/image/p3.svg`}  ref = {pRef[2]} />

          <img src={`${asset}/image/head-left-image.png`} ref = {rRef} />

          <img src={`${asset}/image/head-right-image.png`}  ref = {lRef} />

      

        </div>
        <div ref = {headRef} className="row head-content m-0">
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
                <button className="teaser">Explore Teasure</button>
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
