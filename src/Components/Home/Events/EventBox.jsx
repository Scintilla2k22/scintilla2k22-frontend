import React from 'react'
import Planet from '../../Arts/planet';
import './Events.scss'

export default function EventBox(props) {

  
    const {
      title,
      id,
      subtitle,
      venue,
      date,
      time,
      coordinators,
      desc,
      rules,
      style,
      cls = "default",
      left,
      hexas
    } = props.data;
  
    return (
      <section id={`events-${id}`}   className={`container-fluid event-container ${cls}  `}>
        <div className="row   " style={{ zIndex: '2' }}>
          <div className={`col-md-12 col-lg-5 left ${id % 2 ? "order-first" : "order-last"}`} style={{ zIndex: '3' }} >{left}</div>
          <div className="col-sm-12 col-md-12 col-lg-7 right">
            <div className="d-flex flex-column p-3 justify-content-center align-item-center">
              <h2>{title}</h2>
              {subtitle && <h6 style={{ color: style.color.primary }} className="subtitle"> "{subtitle}"</h6>}
              <p className="desc">{desc}</p>
              <div className=" cord-block ">
                <p style={{ color: style.color.primary }} > Rules : </p>
                <ul className="cord">
                  {rules &&
                    rules.map((rule) => (
                      <li>
                        {rule}
                      </li>
                    ))}
                </ul>
  
                <p style={{ color: style.color.primary }} > coordinators : </p>
                <ul className="cord">
                  {coordinators &&
                    coordinators.map((co) => (
                      <li>
                        <pre>
                          {co.name} ({co.branch} , {co.year})
                        </pre>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {
          hexas.map((clr, ind) => {
            return (
              <Planet  />
            )
  
          })
        }
      </section >
    )
  
};
