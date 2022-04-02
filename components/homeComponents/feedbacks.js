import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import "swiper/css";
import "swiper/css/pagination";
import Qoshtirnoq from "../../images/qoshtirnoq.png"
import { AuthContext } from "../../utils/authContext";
import FeedbackCard from "../card/feedbackCard";

function FeedbackBox() {
    const { BASE_URL } = useContext(AuthContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`${BASE_URL}feedbacks`)
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <div className="bg-bgblack">
            <div className="container">
                <div className="relative max-w-830 py-40 md:py-60 lg:py-80 px-20 md:px-44 lg:px-64 my-0 mx-auto">
                    <img className="absolute left-0 top-245" src={Qoshtirnoq} alt="" />
                    <Swiper
                        spaceBetween={30}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: true,
                        }}
                        pagination={{
                            dynamicBullets: true,
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        {data.length > 0 &&
                            data.map((question, index) => {
                                return (
                                    <SwiperSlide key={index}><FeedbackCard key={index} question={question} /></SwiperSlide>
                                )
                            })}
                    </Swiper>
                </div>
            </div>
        </div>

    );
}

export default FeedbackBox;