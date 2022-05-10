import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../utils/authContext";
import PortfolioCard from "../card/portfolioCard";

function PortfolioBox() {
    const { BASE_URL } = useContext(AuthContext);
    const [data, setData] = useState([]);


    useEffect(() => {
        axios
            .get(`${BASE_URL}portfolios`)
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [BASE_URL]);


    return (
        <div className="py-40 md:py-60 lg:py-80 bg-bggray">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 widget-list">
                    {data.length > 0 &&
                        data.map((question) => {
                            return <PortfolioCard key={question.id} question={question} />;
                        })}
                </div>
            </div>
        </div>
    );
}

export default PortfolioBox;