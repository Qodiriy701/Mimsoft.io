import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import arrowImg from "../../images/arrow.png";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../../utils/authContext";

function MobileAppCard({ question }) {
    const { i18n } = useTranslation()
    const { BASE_IMG } = useContext(AuthContext);
    return (
        <div
            // to={`/portfolio/${question.id}`}
            className="relative w-full rounded-7px border max-h-222 min-h-235 md:max-h-254 border-white overflow-hidden bg-bggray">
            <Image src={`${BASE_IMG}${question.image}`} layout='fill' objectFit='cover' alt="" />
            <div className="bg-bgblack absolute bottom-20 left-20 right-40 p-10 md:p-16 lg:p-20 rounded-7px flex justify-between items-center">
                <p className="text-white text-base">{question.name[i18n.language]}</p>
                <Image src={arrowImg} alt="" />
            </div>
        </div>
    );
}

export default MobileAppCard;