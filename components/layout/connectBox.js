import axios from "axios";
import { useRef } from 'react';
import { IMaskInput } from 'react-imask';
import React, { useContext } from "react";
import { useEffect, useState } from "react";

import tick from "../../images/tick.png"
import { AuthContext } from "../../utils/authContext";
import Image from "next/image";
// import { useTranslation } from 'react-i18next';


function ConnectBox() {
    // const { t, i18n } = useTranslation();
    const { BASE_URL } = useContext(AuthContext)

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    // const [companyName, setCompanyName] = useState('');
    const [aboutProject, setAboutProject] = useState('');

    const [selectValue, setSelectValue] = useState('');
    const [data, setData] = useState([]);

    let checkboxDiv;
    let checkbox;
    let nameInp;
    let phoneInp;

    useEffect(() => {
        let mySelect = document.getElementById('select');
        setSelectValue(mySelect.value);

        checkboxDiv = document.getElementById('checkboxDiv');
        checkbox = document.getElementById('checkbox');

        nameInp = document.getElementById('name');
        phoneInp = document.getElementById('phone');

        // console.log(checkboxDiv);
        // console.log(checkbox);

    })


    useEffect(() => {
        axios
            .get(`${BASE_URL}services`)
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    const ref = useRef(null);

    const changeName = (e) => {
        setName(e.target.value);
    }
    const changeProject = (e) => {
        setAboutProject(e.target.value);
    }

    const checkClick = () => {
        if (checkbox.checked) {
            checkbox.checked = false;
        } else {
            checkbox.checked = true;
        }
    }

    const checkboxClick = () => {
        if (checkbox.checked) {
            checkbox.checked = false;
        } else {
            checkbox.checked = true;
        }
    }


    function tekshirish(element, values, name) {
        if (values === '') {
            element.classList.add('input-check')
            element.value = `included ${name}`;
            setTimeout(() => {
                element.value = '';
                element.classList.remove('input-check')
            }, 2000)
        }
    }

    function raqamTekshirish(element) {
        element.classList.add('input-check')
        setTimeout(() => {
            element.classList.remove('input-check')
        }, 2000)
    }

    const OnSubmit = (e) => {
        e.preventDefault();

        tekshirish(nameInp, name, 'Name');

        if (phone.length == 0) {
            tekshirish(phoneInp, phone, 'Num');
        }

        if (phone.length < 12) {
            raqamTekshirish(phoneInp);
        }

        if (name === '' || phone.length < 12 || selectValue === '') {
            const onConnect = document.getElementById('connect');
            onConnect.classList.add('animate__animated', 'animate__shakeX');
            setTimeout(() => {
                onConnect.classList.remove('animate__animated', 'animate__shakeX');
            }, 1000)
        }

        if (name !== '' && phone !== '' && phone.length > 11 && selectValue !== '') {
            axios
                .post(`${BASE_URL}claim`, {
                    serviceId: selectValue.trim(),
                    name: name.trim(),
                    phone: phone,
                    description: aboutProject.trim(),
                    nda: checkbox.checked == true ? 1 : 0
                })
                .then(() => {
                    const message = document.createElement('p');
                    message.classList.add('connect-messege');
                    message.innerText = 'message';
                    document.querySelector('body').append(message);
                    setTimeout(() => {
                        message.innerText = '';
                        message.classList.remove('connect-messege');
                    }, 2500);
                })
                .catch(function (error) {
                    const message = document.createElement('p');
                    message.classList.add('error-messege');
                    message.innerText = 'contactError';
                    document.querySelector('body').append(message);
                    setTimeout(() => {
                        message.innerText = '';
                        message.classList.remove('error-messege');
                    }, 2500);
                });

            setName('');
            setPhone('')
            setAboutProject('');
            checkbox.checked = false;
        }
    }

    return (
        <div className="before">
            <div className="before-anchor" id="connect-box"></div>
            <div className="bg-bgblack py-40 md:py-60 lg:py-80">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-60">
                        <div className="w-full">
                            <p className="text-xxl mb-40 md:mb-60 lg:mb-80 text-white wolkway">connectTitle</p>
                            <div className="space-y-40">
                                <div className="flex items-center gap-10">
                                    <div className="w-24 h-24 overflow-hidden shrink-0 rounded-full">
                                        <Image className="w-full h-full object-cover" src={tick} alt="" />
                                    </div>
                                    <p className="text-base text-white font-normal">connectDetail1</p>
                                </div>

                                <div className="flex items-center gap-10">
                                    <div className="w-24 h-24 overflow-hidden shrink-0 rounded-full">
                                        <Image className="w-full h-full object-cover" src={tick} alt="" />
                                    </div>
                                    <p className="text-base text-white font-normal">connectDetail2</p>
                                </div>

                                <div className="flex items-center gap-10">
                                    <div className="w-24 h-24 overflow-hidden shrink-0 rounded-full">
                                        <Image className="w-full h-full object-cover" src={tick} alt="" />
                                    </div>
                                    <p className="text-base text-white font-normal">connectDetail3</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full border border-white p-20 md:p-30 lg:p-40 rounded-14px md:rounded-17px">
                            <form className="grid grid-cols-1 gap-20 lg:gap-26">
                                <input
                                    id="name" type="text"
                                    className="text-base outline-none text-placeholderColor py-10 md:py-16 lg:py-20 border-b-2 bg-transparent border-placeholderColor w-full"
                                    value={name}
                                    onChange={changeName}
                                    placeholder="phoneName"
                                />

                                <IMaskInput
                                    id='phone'
                                    mask={Number}
                                    radix="."
                                    value={phone}
                                    mask='+{998} (00) 000 00 00'
                                    unmask={true}
                                    ref={ref}
                                    onAccept={
                                        (value, mask) => setPhone(value)
                                    }
                                    placeholder="phoneNum"
                                    className="text-base outline-none text-placeholderColor py-10 md:py-16 lg:py-20 border-b-2 bg-transparent border-placeholderColor w-full"
                                />

                                <div
                                    className="selectdiv">
                                    <label>
                                        <select id="select" className="text-base outline-none text-placeholderColor py-10 md:py-16 lg:py-20 border-b-2 bg-transparent border-placeholderColor w-full">
                                            {data.length > 0 &&
                                                data.map((question) => {
                                                    return (
                                                        <option key={question.id} value={question.id} className="bg-bggray">{question.title.uz}</option>
                                                    )
                                                })}
                                        </select>
                                    </label>
                                </div>

                                <input
                                    className="text-base outline-none text-placeholderColor py-10 md:py-16 lg:py-20 border-b-2 bg-transparent border-placeholderColor w-full  resize-none"
                                    value={aboutProject}
                                    onChange={changeProject}
                                    id="loyiha-haqida"
                                    placeholder="phoneDescription"
                                />

                                <div
                                    id='checkboxDiv'
                                    onClick={checkClick}
                                    className=" flex gap-20 items-center cursor-pointer">
                                    <input
                                        id='checkbox'
                                        onClick={checkboxClick}
                                        className="w-20 h-20 bg-placeholderColor outline-none"
                                        type="checkbox"
                                    />
                                    <p className="text-placeholderColor text-sm md:text-base">phoneNDA</p>
                                </div>

                                <div>
                                    <input
                                        id="connect"
                                        className="font-medium text-sm text-white bg-buttonbg rounded-7px py-14 px-30 cursor-pointer"
                                        type="submit"
                                        value="contact"
                                        onClick={OnSubmit}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConnectBox;