import "swiper/css";
import axios from "axios";
import Link from 'next/link';
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import Arrow from "../layout/arrow";
import { FreeMode, Scrollbar } from "swiper";
import { useTranslation } from "react-i18next";
import PortfolioCard from "../card/portfolioCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { AuthContext } from "../../utils/authContext";
import React, { useContext, useEffect, useState } from "react";


function MainPortfolio() {
    const { t } = useTranslation();
    const { BASE_URL } = useContext(AuthContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`${BASE_URL}portfolios`)
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [BASE_URL]);

    return (
        <div className="before">
            <div className="before-anchor" id="portfolio"></div>
            <div className="py-40 md:py-60 lg:py-80 bg-bggray">
                <div className="container overflow-hidden">
                    <div className="flex justify-between items-center mb-20">
                        <p className="text-xxl text-white wolkway">{t('Portfolio')}</p>
                        <Link href={"/portfolio"}>
                            <a className="hidden md:block"><Arrow /></a>
                        </Link>
                    </div>

                    <Swiper
                        spaceBetween={20}
                        freeMode={true}
                        pagination={{
                            clickable: true
                        }}
                        breakpoints={{
                            920: {
                                slidesPerView: 2,
                            },
                            750: {
                                slidesPerView: 2,
                            }
                        }}
                        modules={[FreeMode, Scrollbar]}
                        className="mySwiper"

                        data-aos="fade-left"
                        data-aos-duration="500"
                        data-aos-easing="ease-in"
                        data-aos-mirror="true"
                        data-aos-once="true"
                    >
                        <div>
                            {data.length > 0 &&
                                data.map((question, index) => {
                                    return (
                                        <SwiperSlide key={index}><PortfolioCard key={index} question={question} /></SwiperSlide>
                                    )
                                })}
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default MainPortfolio;