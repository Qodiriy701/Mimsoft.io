import axios from "axios";
import Link from "next/link";
import Image from 'next/image';
import { useTranslation } from "react-i18next";
import styles from '../../styles/home.module.css';
import { AuthContext } from "../../utils/authContext";
import React, { useContext, useEffect, useState } from "react";

function MainAbout() {
    const { t } = useTranslation();
    const { BASE_URL } = useContext(AuthContext)
    const { BASE_IMG } = useContext(AuthContext)
    const [data, setData] = useState([]);
    const timImg = BASE_IMG + data.timImage

    useEffect(() => {
        axios
            .get(`${BASE_URL}about`)
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <div className="before">
            <div className="before-anchor" id="aboutMain"></div>
            <div className="bg-bggray relative">
                {data.timImage &&
                    <div className="max-w-1366 min-h-370 md:min-h-570 lg:min-h-800 mx-auto relative">
                        <Image className="w-full h-full object-cover block" src={timImg} layout="fill" alt="" />
                        <div className={styles.AboutPositionBox}>
                            <div className="container">
                                <Link href={"/about"}>
                                    <a className="p-20 rounded-7px inline-block bg-bgblack drop-shadow-xl md:bg-transparent">
                                        <p className="wolkway text-xxl mb-10 text-white">{t('about')}</p>
                                        <p className="text-sm md:text-base mb-24 text-white">{t('aboutTeam')}</p>
                                        <div className="flex">
                                            <div className="w-40 h-40 md:w-52 md:h-52 flex items-center justify-center rounded-full border border-white">
                                                <i className="ri-arrow-right-up-line text-lg text-white"></i>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default MainAbout;