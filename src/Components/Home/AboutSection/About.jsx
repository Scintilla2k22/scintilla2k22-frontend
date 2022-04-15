import React from "react";
import Planet from "../../Arts/planet";
import "./style.scss";
import Ripples from "../../Arts/ripples";

export default function About() {
  return (
    <div id='about' className="container-fluid  about-container">
      <div className="row">
        <div className="col-md-6">

        </div>
        <div className="col-md-12 col-lg-6 d-flex justify-content-center">
          <div className="  about-text">
            <h4 className="heading1" >About </h4>
            <div className="description">
              <p>
                {" "}
                Scintilla has succeeded in all its endeavours of promoting
                cultural events. The festival is organised in the college
                premises every year. It consists of a large number of cultural
                and non cultural events where students from every year
                participate to showcase their talent. It is one of the biggest
                events organised by the students with the cooperation of the
                college faculty each year. Last Scintilla organised by the
                students was in 2019, which was a great success. There was a
                mindblowing participation of the students in all cultural and
                non-cultural events which brought a new level of energy in the
                whole campus.
              </p>
              <p>
                Unfortunately due to the Covid outbreak of 2019, Scintilla could
                not be carried forward in 2020 and 2021. Now, after two years of
                pandemic, the situation is under control and normalised. Hence
                now we have the opportunity to organise Scintilla 2022 and make
                it a grand success. Also there is a strong need to organise this
                event to boost the energy levels of the students. Scintilla 2022
                aims to promote extracurricular activities where students can
                participate and interact with each other.The theme for the
                festival is Seized by Stardust.
              </p>
            </div>
          </div>
        </div>
      </div>
      {
        [2, 2, 2].map((id) => <Planet />)
      }

    </div>
  );
}
