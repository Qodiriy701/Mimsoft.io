import { useContext } from "react";
import { AuthContext } from "../../utils/authContext";

function PartnersCard({question}) {
    const { BASE_IMG } = useContext(AuthContext);
    return ( 
        <div className="shrink-0 w-172 h-172 rounded-7px bg-bgblack flex items-center justify-center overflow-hidden">
            <img className="max-w-100% max-h-100% object-cover" src={`${BASE_IMG}${question.image}`} alt={question.name} />
        </div>
     );
}

export default PartnersCard;
