import Link from "next/link";
import Image from 'next/image'
import { useContext } from "react";
import Arrow from "../layout/arrow";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../../utils/authContext";

function PortfolioCard({ question }) {
    const { i18n } = useTranslation()
    const { BASE_IMG } = useContext(AuthContext);
    const img = BASE_IMG + question.image;
    return (
        <div
            // to={`/portfolio/${question.id}`}
            className="w-full">
            <div className="relative pb-180 md:pb-205 lg:pb-210 w-full">
                <div className="rounded-7px overflow-hidden w-full max-h-200 md:max-h-285 lg:max-h-370 min-h-180 md:min-h-270 lg:min-h-350 relative">
                    <Image src={img} layout="fill" alt="" />
                </div>
                <div className="absolute bottom-0 w-85%">
                    <p className="font-medium text-xs md:text-sm py-6 md:py-8 lg:py-10 px-10 md:px-16 lg:px-20 inline-block rounded-t-7px text-white bg-buttonbg">{question.title[i18n.language]}</p>
                    <div className="bg-bgblack rounded-b-7px rounded-tr-7px text-white p-20 md:p-30 lg:p-40">
                        <p className="font-semibold text-lg md:text-xl lg:text-xxl mb-10 text-white line-clamp-1">{question.name[i18n.language]}</p>
                        <p className="text-sm md:text-base mb-30 md:mb-36 lg:mb-40 text-white line-clamp-4 md:line-clamp-3 lg:line-clamp-2 h-84 md:h-75 lg:h-50 overflow-hidden">{question.description[i18n.language]}</p>
                        <div className="inline-block" ><Arrow /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioCard;