import axios from 'axios';
import Link from "next/link"
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../utils/authContext';
import ServicesCard from "../card/servicesCard";
import Arrow from "../layout/arrow";
import { useTranslation } from "react-i18next";

function Services() {
    const { t } = useTranslation();
    const { BASE_URL } = useContext(AuthContext);

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`${BASE_URL}services`)
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [BASE_URL]);

    return (
        <div className="before">
            <div className="before-anchor" id="services"></div>
            <div className="bg-bggray py-40 md:py-60 lg:py-80">
                <div className="container space-y-20">
                    <div className="flex justify-between items-center">
                        <h1 className="text-xxl text-white wolkway">{t('services')}</h1>
                        <Link href={"/services"}>
                            <a className="hidden md:block"><Arrow /></a>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                        {data.length > 0 &&
                            data.map((question, index) => {
                                return <ServicesCard key={question.id} question={question} index={index} />;
                            })}
                    </div>
                    <div className="block md:hidden">
                        <Link href={"/services"}>
                            <a><Arrow /></a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;