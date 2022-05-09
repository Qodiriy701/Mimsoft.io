import Image from "next/image";
import Mouse from "../../images/mouse.png";
import { useTranslation } from "react-i18next";
import mainImg from "../../images/main img.png";
import styles from '../../styles/home.module.css';

function MainSection() {
    const { t } = useTranslation();

    return (
        <div className={`bg-bgblack bg-main-home bg-no-repeat bg-right flex-auto ${styles.homeMain}`}>
            <div className="container h-full">
                <div id="head-main" className="md:grid grid-cols-8">
                    <div className="col-span-5 flex flex-col justify-between">
                        <div className="flex-auto flex items-center">
                            <div className="">
                                <p id="about" className="text-xxl md:text-xxxl lg:text-v mb-10 text-white wolkway">{t('slogan')}</p>
                                <p className="max-w-350 text-base text-white mb-40 md:m-0 leading-7" dangerouslySetInnerHTML={{ __html: t('solution') }}></p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center col-span-3 overflow-hidden pt-20">
                        <div className="md:relative pt-10 scale-110">
                            <Image className="md:scale-110" src={mainImg} />
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex gap-x-10 animate-bounce">
                    <p className="text-white font-medium text-base">{t('down')}</p>
                    <Image src={Mouse} alt="mouse" />
                </div>
            </div>
        </div>
    );
}

export default MainSection;