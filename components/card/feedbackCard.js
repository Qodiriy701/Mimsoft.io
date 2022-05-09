import Image from 'next/image'
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AuthContext } from "../../utils/authContext";

function FeedbackCard({ question }) {
    const { i18n } = useTranslation();
    const { BASE_IMG } = useContext(AuthContext);
    return (
        <div className="">
            <div className="w-90 h-90 rounded-7px overflow-hidden mx-auto">
                <Image src={`${BASE_IMG}${question.image}`} width={90} height={90} alt="partners" />
            </div>
            <p className="text-xl md:text-xxl text-center mt-20 text-white leading-7 md:leading-9 wolkway">{question.name[i18n.language]}</p>
            <p className="text-sm md:text-base text-center mb-40 text-placeholderColor">{question.position[i18n.language]}</p>
            <div className="w-full">
                <p
                    className="text-base text-left mb-40 text-white"
                    dangerouslySetInnerHTML={{ __html: question.text[i18n.language] }}
                ></p>
            </div>
        </div>
    );
}

export default FeedbackCard;