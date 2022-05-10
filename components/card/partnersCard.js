import Image from 'next/image'
import { useContext } from "react";
import { AuthContext } from "../../utils/authContext";

function PartnersCard({ question }) {
    const { BASE_IMG } = useContext(AuthContext);
    const img = BASE_IMG + question.image;
    return (
        <div className="shrink-0 w-172 h-172 rounded-7px bg-bgblack flex items-center justify-center overflow-hidden relative">
            <div className="max-w-100% max-h-100% object-cover">
                <Image src={img} layout="fill" alt={question.name} />
            </div>
        </div>
    );
}

export default PartnersCard;
