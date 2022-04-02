import Image from 'next/image'
import Mouse from "../../images/mouse.png";
import mainImg from "../../images/main img.png";
// import { useTranslation } from "react-i18next";

function HomeMain() {
    // const { t } = useTranslation();

    return (
        <div className="p-80 bg-bgblack bg-main-home bg-no-repeat bg-right">
            <div className="container">
                <div className="md:grid grid-cols-8">
                    <div className="col-span-5 flex flex-col justify-between">
                        <div className="flex-auto flex items-center">
                            <div className="">
                                <p id="about" className="text-xxl md:text-xxxl lg:text-v mb-10 text-white wolkway">slogan</p>
                                <p className="max-w-350 text-base text-white mb-40 leading-7">solution</p>
                            </div>
                        </div>
                        <div className="hidden md:flex gap-x-10 animate-bounce">
                            <p className="text-white font-medium text-base">down</p>
                            <Image src={Mouse} alt="mouse" />
                        </div>
                    </div>
                    <div className="flex items-center justify-center col-span-3 overflow-hidden">
                        <div className="md:relative pt-10 scale-110">
                            <Image className="md:scale-110" src={mainImg} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeMain;