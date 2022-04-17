import React from 'react'
import './eventmobilecard.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper";

import EventCard from './EventCard'

function EventMobileCard() {
    return (
        <div>
            <Swiper
                effect={"flip"}
                grabCursor={true}
                pagination={true}
                navigation={true}
                modules={[EffectFlip, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><EventCard /></SwiperSlide>
                <SwiperSlide><EventCard /></SwiperSlide>
                <SwiperSlide><EventCard /></SwiperSlide>
                <SwiperSlide><EventCard /></SwiperSlide>
                <SwiperSlide><EventCard /></SwiperSlide>
                <SwiperSlide><EventCard /></SwiperSlide>
                <SwiperSlide><EventCard /></SwiperSlide>
                <SwiperSlide><EventCard /></SwiperSlide>
                <SwiperSlide><EventCard /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default EventMobileCard