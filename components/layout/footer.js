import mail from "../../images/mail.png"
import linkedin from "../../images/linkedin.png"
import facebook from "../../images/facebook.png"
import telegram from "../../images/telegram.png"
import instagram from "../../images/instagram.png"
import twitter from "../../images/twitter.png"
import Image from 'next/image'
import { useTranslation } from "react-i18next"
import { useContext, useState, useEffect } from "react"
import { AuthContext } from "../../utils/authContext"
import axios from "axios"

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
                <div className="gap-x-20 gap-y-40 grid md:grid-cols-2 items-center">
                    <div className="flex flex-col gap-10 w-full">
                        <p onClick={clickTop} className="text-xl text-white wolkway cursor-pointer">mimsoft</p>
                        <p className="text-sm w-full text-placeholderColor">{t('copyRight')}</p>
                    </div>
                    <div className="flex justify-start md:justify-end gap-20">
                        {data.length > 0 &&
                            data.map((question) => {
                                return (
                                    <a key={question.id} className="w-28 h-28" href={`${question.url}`}>
                                        <Image src={`${BASE_IMG}${question.icon}`} width={28} height={28} alt="" />
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;