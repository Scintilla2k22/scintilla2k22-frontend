import React from 'react'
import EventCard from './EventCard'
import './ListOfEvent.scss';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

function EventDesktopCard(props) {

    const {
        data
    } = props || []
    return (
        <div>
            <Swiper className='swiper'
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
            >
                { data && data.length && data.map( ( item, ind) => {
                    return (
                        <SwiperSlide  > <EventCard data = {item} key = {ind} /></SwiperSlide>
                    )
                }) }
            </Swiper>
        </div>
    )
}

export default EventDesktopCard