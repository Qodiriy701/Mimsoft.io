import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar } from "swiper";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../utils/authContext";
import axios from "axios";
import PartnersCard from "../card/partnersCard";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import "./style.css";


function PartnersBox() {
    const { BASE_URL } = useContext(AuthContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`${BASE_URL}partners`)
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [BASE_URL]);

    return (
        <>
            <Swiper
                spaceBetween={20}
                freeMode={true}
                pagination={{
                    clickable: true
                }}
                breakpoints={{
                    1090: {
                        slidesPerView: 6,
                    },
                    920: {
                        slidesPerView: 5,
                    },
                    750: {
                        slidesPerView: 4,
                    },
                    560: {
                        slidesPerView: 3,
                    },
                    350: {
                        slidesPerView: 2,
                    }
                  }}
                modules={[FreeMode, Scrollbar]}
                className="mySwiper"
            >
                {data.length > 0 &&
                    data.map((question, index) => {
                        return (
                            <SwiperSlide key={index}><PartnersCard key={index} question={question} /></SwiperSlide>
                        )
                    })}
            </Swiper>
        </>
    );
}

export default PartnersBox;
