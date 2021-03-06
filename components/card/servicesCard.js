import Link from "next/link"
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../utils/authContext';
import Arrow from "../layout/arrow";
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import AOS from 'aos';
import 'aos/dist/aos.css';

function ServicesCard({ question, index }) {
    useEffect(() => {
        AOS.init();
    }, [])

    const { i18n } = useTranslation()
    const { BASE_IMG } = useContext(AuthContext);
    return (
        <Link href={`/services?tab=${question.slug}`}>
            <a
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="500"
                data-aos-easing="ease-in"
                data-aos-mirror="true"
                data-aos-once="true" 
                className="p-20 md:p-30 lg:p-40 rounded-7px overflow-hidden bg-bgblack flex flex-col gap-40 relative">
                <div className="absolute top-0 right-0">
                    <Image src={`${BASE_IMG}${question.imageBg}`} width={178} height={183} alt="" />
                </div>
                <div className="flex items-center gap-20">
                    <div className="w-72 h-72 shrink-0 rounded-7px overflow-hidden bg-bggray flex items-center justify-center relative">
                        <Image className="max-w-72 max-h-72 object-cover" src={`${BASE_IMG}${question.image}`} width={32} height={32} alt="" />
                    </div>
                    <p className="font-semibold text-xl flex items-center text-white line-clamp-2 z-10">{question.title[i18n.language]}</p>
                </div>
                <div className="flex flex-col gap-20">
                    <p className="text-base text-white line-clamp-2 h-50 overflow-hidden z-10">{question.body[i18n.language]}</p>
                    <div className="inline-block" ><Arrow /></div>
                </div>
            </a>
        </Link>
    );
}

export default ServicesCard;