import Image from "next/image";
import { useState } from "react";
import Mouse from "../../images/mouse.png";
import playImg from "../../images/play.png";
import { useTranslation } from "react-i18next";
import mainImg from "../../images/mainImg.png";
import styles from '../../styles/home.module.css';
// import njn from "../../images/bmw.mp4"

function MainSection() {
    const { t } = useTranslation();
    const [active, setActive] = useState(false)

    const closeFunction = () => {
        setActive(false)
    }

    const openFunction = () => {
        setActive(true)
        console.log("True");
    }

    return (
        <div className={`bg-bgblack bg-main-home bg-no-repeat bg-right flex-auto ${styles.homeMain}`}>
            <div className="container h-full">
                <div id="head-main" className="md:grid grid-cols-8">
                    <div className="col-span-5 flex flex-col justify-between">
                        <div className="flex-auto flex items-center">
                            <div className="">
                                <h1 id="about" className="text-xxl md:text-xxxl lg:text-v mb-10 text-white wolkway">{t('slogan')}</h1>
                                <h3 className="max-w-350 text-base text-white mb-40 md:m-0 leading-7">{t('solution')}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center col-span-3 overflow-hidden">
                        <div className={`relative scale-110 flex items-center justify-center`}>
                            <Image src={mainImg} alt="" />
                            <div className={`absolute w-full h-full flex items-center justify-center`}>
                                <Image className="scale-90 hover:scale-95 cursor-pointer transition-all" onClick={openFunction} src={playImg} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="hidden md:flex gap-x-10 animate-bounce">
                    <p className="text-white font-medium text-base">{t('down')}</p>
                    <Image src={Mouse} alt="mouse" />
                </div>
            </div>
            {active &&
                <div className={`fixed top-0 h-screen w-full overflow-hidden z-30 ${styles.videBox}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={closeFunction} className="h-40 w-40 text-white absolute top-5 right-5 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="w-full md:w-90% lg:w-70% h-auto lg:h-80%">
                            <video className="w-full h-full" src="https://mimsoft.uz/images/video.mp4" autoPlay controls></video>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default MainSection;