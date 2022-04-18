import React from 'react'
import Planet from '../../Arts/planet';
import './Events.scss'
import Profile from '../../Contactus/Profile';
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

export default function EventBox(props) {

  const {
    title,
    id,
    subtitle,
    venue,
    date = "Not Scheduled",
    time,
    coordinators,
    desc,
    rules,
    style,
    cls = "default",
    left,
    hexas,
    type = 0
  } = props.data;


  AOS.init();

  return (
    <section data-aos="zoom-in-up"
      data-aos-offset="200"
      data-aos-delay="0"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"

      id={`events-${id}`} className={`container-fluid event-container ${cls}  `}>
      <div className="row   " style={{ zIndex: '2' }}>
        <div className={`col-md-12 col-lg-5 left ${id % 2 ? "order-first" : "order-last"}`} style={{ zIndex: '3' }} >{left}</div>
        <div className="col-sm-12 col-md-12 col-lg-7 right">
          <div className="d-flex flex-column p-3 justify-content-center align-item-center">
            <h2>{title}</h2>
            {date && <h6 style={{ color: style.color.primary }} className="subtitle"> {date}</h6>}
            <p className="desc">{desc}</p>
            <Link to={`/event/info/${id}/${type}`} >
              <button className="teaser position-relative mx-auto my-4">Checkout</button>
            </Link>
            <div className=" cord-block ">
              <p  > Coordinators </p>

              <div className="cord">
                {coordinators &&
                  coordinators.map((co) => (
                    <Profile data={co} />
                  ))}
              </div>

            </div>

          </div>
        </div>
      </div>
      {
        hexas.map((clr, ind) => {
          return (
            <Planet />
          )

        })
      }
    </section >
  )

};
