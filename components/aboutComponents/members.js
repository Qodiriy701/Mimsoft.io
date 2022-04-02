import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../utils/authContext";
import MembersCard from "../card/membersCard";

function TeamMembers() {
    const { BASE_IMG } = useContext(AuthContext);
    const { BASE_URL } = useContext(AuthContext);

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`${BASE_URL}staffs`)
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <div className="bg-bggray">
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-16 lg:gap-20">
                    {data.length > 0 &&
                        data.map((question, index) => {
                            return (
                                <MembersCard key={index} question={question} IMG={BASE_IMG} />
                            )
                        })}
                </div>
            </div>
        </div>
    );
}

export default TeamMembers;