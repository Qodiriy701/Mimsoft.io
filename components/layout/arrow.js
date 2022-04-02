import arrow from "../../images/arrow.png";
import Image from "next/image"
// import { useTranslation } from 'react-i18next'

function Arrow() {
    // const { t } = useTranslation();
    return (
        <div className="flex items-center space-x-10">
            <p className="font-medium text-base text-white">more</p>
            <div><Image src={arrow} alt="" /></div>
        </div>
    );
}

export default Arrow;