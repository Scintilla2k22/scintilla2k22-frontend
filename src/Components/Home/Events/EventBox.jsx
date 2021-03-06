import React from 'react'
import Planet from '../../Arts/planet';
import './Events.scss'
import Profile from '../../Contactus/Profile';
import { Link } from 'react-router-dom';
import { getEventSvg } from '../../../utils/eventImg';
import { getDate } from '../../../utils';


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

export default function EventBox(props) {
  AOS.init();
  const {
    e_name,
    id,
    subtitle,
    venue,
    e_time = "Not Scheduled",
    time,
    co_ord = [],
    e_desc,
    rules,
    style,
    cls = "default",
    left,
    type = 1,
    code = "AYUSH",
    status
  } = props.data;

  return (
    <section data-aos="zoom-in-up" id={`events-${id}`} className={`container-fluid event-container ${cls}`}>
      <div className="row   " style={{ zIndex: '2' }}>
        <div className={`col-md-12 col-lg-5 left ${id % 2 ? "order-first" : "order-last"}`} style={{ zIndex: '3' }} >

          <div
            style={{
              width: "80%",
              height: "100%",
              display: "grid",
              placeItems: "center",
              transform: "scale(1)",

            }}
            className="logoDesign"
          >
            <img
              style={{ width: "100%" }}
              src={getEventSvg(code)}
              alt="LOGO "
            />
          </div>

        </div>
        <div className="col-sm-12 col-md-12 col-lg-7 right">
          <div className="d-flex flex-column p-3 justify-content-center align-item-center">
            <h2>{e_name} {status == 2 ? <span className='live' >LIVE</span> : ""} </h2>
            {<h6 style={{ color: "var(--color_pink)" }} className="subtitle position-relative"> {getDate(e_time)}  </h6>}
            <p className="desc">{e_desc}</p>
            <Link to={`/event/info/${id}/${type}`} >
              <button className="teaser position-relative mx-auto my-4"  >Checkout</button>
            </Link>
            <div className=" cord-block ">
              <p  > Coordinators </p>

              <div className="cord">
                {(co_ord && co_ord.length > 0) && co_ord.map((co) => (
                  <Profile data={co} />
                ))}
              </div>

            </div>

          </div>
        </div>
      </div>
      {
        [1, 2, 3].map((clr, ind) => {
          return (
            <Planet />
          )

        })
      }
    </section >
  )

};

