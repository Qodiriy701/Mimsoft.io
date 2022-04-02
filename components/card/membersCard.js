// import { useTranslation } from "react-i18next";

function MembersCard({ question, IMG }) {
    // const { i18n } = useTranslation()
    return (
        <div className="w-full relative bg-bgblack rounded-7px overflow-hidden h-210 md:h-285 lg:h-357">
            <img className="w-full h-full object-cover" src={`${IMG}${question.image}`} alt="" />
            <div className="absolute bottom-0 w-full p-10 pt-20 md:p-16 md:pt-30 lg:p-20 lg:pt-40 gradient-card">
                <p className="font-semibold text-base md:text-lg text-white break-words" dangerouslySetInnerHTML={{ __html: question.name }}></p>
                <p className="text-xs md:text-sm text-white break-all">{question.occupation.uz}</p>
            </div>
        </div>
    );
}

export default MembersCard;