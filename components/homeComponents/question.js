import axios from "axios";
import Head from 'next/head'
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../../utils/authContext";
import QuestionCard from "../card/questionCard";
import Script from 'next/script'


function QuestionBox() {
    const { i18n, t } = useTranslation();
    const { BASE_URL } = useContext(AuthContext)
    const [data, setData] = useState([]);
    const [active, setActive] = useState(true)

    useEffect(() => {
        axios
            .get(`${BASE_URL}questions`)
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [BASE_URL]);
    return (
        <>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
            </Head>
            <div className="bg-bggray py-80 md:py-120 lg:py-160">
                <div className="container">
                    <p className="text-xxl leading-9 mb-20 text-white wolkway bgred">{t('questions')}</p>
                    <div className="grid mt-20 grid-cols-1 rounded-7px overflow-hidden gap-y-2">
                        <div className="accordion accordion-flush space-y-2 bg-transparent" id="accordionFlushExample">
                            {data.length > 0 &&
                                data.map((question, index) => {
                                    return (
                                        <QuestionCard key={index} question={question} index={index} />
                                    )
                                })}
                        </div>
                    </div>
                </div>
            </div>



            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></Script>
        </>
    )
}

export default QuestionBox;