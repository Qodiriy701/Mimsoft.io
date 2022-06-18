import axios from "axios"
import Image from 'next/image'
import { useTranslation } from "react-i18next"
import { AuthContext } from "../../utils/authContext"
import { useContext, useState, useEffect } from "react"
import Script from "next/script"
import BTImg from '../../images/BT_Img.png'

function Footer() {
    const { t } = useTranslation();
    const { BASE_URL } = useContext(AuthContext);
    const { BASE_IMG } = useContext(AuthContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`${BASE_URL}socials`)
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [BASE_URL]);

    const clickTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className="py-40 bg-bgblack">
            <div className="container">
                <div className="gap-40 grid lg:grid-cols-2 items-center">
                    <div className="md:flex gap-x-20 gap-y-10 space-y-30 md:space-y-0 items-center justify-between">
                        <div className="flex flex-col gap-10 w-full">
                            <div><p onClick={clickTop} className="text-xl text-white wolkway cursor-pointer inline">mimsoft</p></div>
                            <p className="text-sm w-full text-placeholderColor">{t('copyRight')}</p>
                        </div>
                        <div className="inline-flex md:justify-center">
                            <Script type="text/javascript" src="https://widget.clutch.co/static/js/widget.js"></Script>
                            <div
                                className="clutch-widget"
                                data-nofollow="true"
                                data-widget-type="1"
                                data-darkbg="true"
                                data-height="40"
                                data-url="https://widget.clutch.co"
                                data-clutchcompany-id="1950883">
                            </div>
                        </div>
                    </div>
                    <div className="md:flex gap-x-20 gap-y-10 space-y-30 md:space-y-0 items-center justify-between">
                        <a href="https://techbehemoths.com/company/mimsoft" target="_blank" rel="noopener noreferrer"><Image src={BTImg} width={160} height={50} alt="" /></a>

                        <div className="flex justify-start lg:justify-end gap-20">
                            {data.length > 0 &&
                                data.map((question) => {
                                    return (
                                        <a key={question.id} className="w-28 h-28" href={`${question.url}`} target="_blank" rel="noopener noreferrer">
                                            <Image src={`${BASE_IMG}${question.icon}`} width={28} height={28} alt="" />
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;