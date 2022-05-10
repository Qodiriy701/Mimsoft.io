import Image from 'next/image'
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useTranslation } from "react-i18next";
import Head from "next/head";
import { AuthContext } from "../utils/authContext";
import Header from "../components/layout/header";
import HomeBox from "../components/layout/homeBox";
import ConnectBox from "../components/layout/connectBox";
import Footer from "../components/layout/footer";
import MobileAppCard from "../components/card/mobileAppCard";

function ServicesPage() {
    const { t, i18n } = useTranslation();
    const { BASE_URL } = useContext(AuthContext);
    const { BASE_IMG } = useContext(AuthContext);

    const [data, setData] = useState('');
    const [tabIndex, setTabIndex] = useState(0)

    useEffect(() => {
        axios
            .get(`${BASE_URL}services`)
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

        const url = new URL(window.location)
        const currentTab = url.searchParams.get('tab')
        if (currentTab) {
            setTabIndex(+currentTab)
        }

    }, [BASE_URL]);

    const onChangeClick = (index) => {
        setTabIndex(index)
        const url = new URL(window.location)
        url.searchParams.set('tab', index)
        window.history.pushState(null, document.title, url);
    }

    return (
        <div>
            <Head>
                <title>Mimsoft</title>
                <link rel="icon" href="/favicon.ico" />

                <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
            </Head>
            <div className="flex flex-col min-h-screen">
                <Header />
                <HomeBox name={t('services')} title={t('servicesSlogan')} page={t('services')} />
                <div className="flex-auto">
                    <div className="bg-bggray pt-20 md:pt-30 lg:pt-40 pb-40 md:pb-60 lg:pb-80">
                        <div className="container">
                            {data.length ?
                                <Tabs className="flex flex-col md:flex-row gap-y-30" selectedIndex={tabIndex} onSelect={index => onChangeClick(index)}>
                                    <TabList className="w-full md:w-270 flex flex-col md:shrink-0">
                                        {
                                            data.map((question) => {
                                                return (
                                                    <Tab key={question.id} className="p-16 text-white text-base font-medium"><h1 className="cursor-pointer">{question.title[i18n.language]}</h1></Tab>
                                                )
                                            })
                                        }
                                    </TabList>

                                    <div className="bg-bgblack p-20 md:p-30 lg:p-40 w-full md:rounded-r-7px md:rounded-bl-7px">
                                        {data.length > 0 &&
                                            data.map((question) => {
                                                const imageDesc = BASE_IMG + question.imageDesc;
                                                return (
                                                    <TabPanel key={question.id} className="relative">
                                                        <p className="text-white text-lg md:text-xl wolkway">{t('serviceQuality')}</p>
                                                        <div className="w-full h-120 md:h-160 lg:h-200 relative  my-20">
                                                            <Image src={imageDesc} layout="fill" alt="" />
                                                        </div>
                                                        <p
                                                            className="text-white text-base mb-80"
                                                            dangerouslySetInnerHTML={{ __html: question.description[i18n.language] }}>
                                                        </p>

                                                        <p className="text-white text-lg md:text-xl mb-20 wolkway">{t('serviceWork')}</p>

                                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
                                                            {question.portfolios.map((data, index) => {
                                                                return <MobileAppCard key={index} question={data} />;
                                                            })}
                                                        </div>
                                                    </TabPanel>
                                                )
                                            })}
                                    </div>
                                </Tabs> : null
                            }
                        </div>
                    </div>
                </div>
                <ConnectBox />
                <Footer />
            </div>
        </div>
    );
}

export default ServicesPage;