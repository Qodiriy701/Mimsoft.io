import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
import { AuthContext } from "../../utils/authContext";
// import CustomizedAccordions from "../card/questionCard";

function QuestionBox() {
    // const { t } = useTranslation();
    const { BASE_URL } = useContext(AuthContext)
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`${BASE_URL}questions`)
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);


    return (
        <div className="bg-bggray py-80 md:py-120 lg:py-160">
            <div className="container">
                <p className="text-xxl leading-9 mb-20 text-white wolkway">questions</p>
                <div className="grid mt-20 grid-cols-1 rounded-7px overflow-hidden gap-y-2">
                    {/* {data.length > 0 && <CustomizedAccordions data={data} />} */}
                </div>
            </div>
        </div>
    )
}

export default QuestionBox;