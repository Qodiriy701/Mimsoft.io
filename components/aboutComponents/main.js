import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../utils/authContext";
// import { useTranslation } from "react-i18next";

function AboutMain() {
    // const { t } = useTranslation();
    const { BASE_URL } = useContext(AuthContext);
    const { BASE_IMG } = useContext(AuthContext);

    const [data, setData] = useState({
        projects: 12,
        experience: 3,
        staffs: 5,
        image: "about/2022-02-26-21-03-43-716.png",
        timImage: "about/2022-02-26-21-03-43-716.png"
    });

    useEffect(() => {
        axios
            .get(`${BASE_URL}about`)
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);


    return (
        <div className="py-40 md:py-60 lg:py-80 bg-bggray">
            <div className="container">
                <div className="flex items-end w-full h-463 rounded-7px overflow-hidden relative">
                    <img className="w-full h-full object-cover" src={`${BASE_IMG}${data.image}`} alt="img" />
                    <div className="absolute">
                        <div className="flex flex-col py-40 px-20 gap-40 md:flex-row md:px-30 md:gap-60 lg:p-40 lg:gap-80">
                            <div className="w-130">
                                <p className="text-v text-white font-fredoka">{data.experience}+</p>
                                <p className="font-light text-base text-white">experience</p>
                            </div>
                            <div className="w-200">
                                <p className="text-v text-white font-fredoka">{data.projects}+</p>
                                <p className="font-light text-base text-white">project</p>
                            </div>
                            <div className="w-180">
                                <p className="text-v text-white font-fredoka">{data.staffs} ta</p>
                                <p className="font-light text-base text-white">specialist</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMain;