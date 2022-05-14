import "swiper/css";
import axios from "axios";
import "swiper/css/pagination";
import Image from 'next/image';
import { Pagination, Autoplay } from "swiper";
import FeedbackCard from "../card/feedbackCard";
import { Swiper, SwiperSlide } from "swiper/react";
import Qoshtirnoq from "../../images/qoshtirnoq.png";
import { AuthContext } from "../../utils/authContext";
import React, { useContext, useEffect, useState } from "react";

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
    }, [BASE_URL]);

    return (
        <div className="bg-bgblack">
            <div className="container">
                <div className="relative max-w-830 py-40 md:py-60 lg:py-80 px-20 md:px-44 lg:px-64 my-0 mx-auto">
                    <div className="absolute left-0 top-245">
                    <Image src={Qoshtirnoq} alt="" />
                    </div>
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