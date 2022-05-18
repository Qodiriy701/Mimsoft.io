import axios from "axios";
import Link from "next/link";
import { useRef } from 'react';
import Image from "next/image";
import { IMaskInput } from 'react-imask';
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { AuthContext } from "../../utils/authContext";

import tick from "../../images/tick.png"

function ConnectBox() {
    const { t, i18n } = useTranslation();
    const { BASE_URL } = useContext(AuthContext)

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [aboutProject, setAboutProject] = useState('');

    // const [selectValue, setSelectValue] = useState('');  //
    const [data, setData] = useState([]);
    const [checkbox, setCheckbox] = useState('');
    const [security, setSecurity] = useState('');

    const [tabPanel1, setTabPanel1] = useState('');
    const [tabPanel2, setTabPanel2] = useState('');

    const [nextButton, setNextButton] = useState('');
    const [submitButton, setSubmitButton] = useState('');

    const [tab1, setTab1] = useState('');
    const [tab2, setTab2] = useState('');

    const [nameInp, setNameInp] = useState('');
    const [phoneInp, setPhoneInp] = useState('');

    const [emailInp, setEmailInp] = useState('');
    const [companyInp, setCompanyInp] = useState('');

    useEffect(() => {
        setCheckbox(document.getElementById('checkbox'));
        setSecurity(document.getElementById('security'));

        setTabPanel1(document.querySelector('#tabPanel1'));
        setTabPanel2(document.querySelector('#tabPanel2'));

        setNextButton(document.querySelector('#nextButton'));
        setSubmitButton(document.querySelector('#connect'));

        setTab1(document.querySelector('#tab1'));
        setTab2(document.querySelector('#tab2'));

        setNameInp(document.getElementById('name'));
        setPhoneInp(document.getElementById('phone'));

        setEmailInp(document.getElementById('email'));
        setCompanyInp(document.getElementById('company'));
    }, [setCheckbox])


    useEffect(() => {
        axios
            .get(`${BASE_URL}services`)
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [BASE_URL])

    const ref = useRef(null);

    const changeName = (e) => {
        setName(e.target.value);
    }
    const changeEmail = (e) => {
        setEmail(e.target.value);
    }
    const changeCompany = (e) => {
        setCompany(e.target.value);
    }
    const changeProject = (e) => {
        setAboutProject(e.target.value);
    }


    function tekshirish(element, value, name) {
        if (value === '') {
            element.classList.add('input-check')
            element.value = `${t('included')} ${name}`;
            setTimeout(() => {
                element.value = '';
                element.classList.remove('input-check')
            }, 1200)
        }
    }

    function raqamTekshirish(element) {
        // console.log(element);
        element.classList.add('input-check')
        setTimeout(() => {
            element.classList.remove('input-check')
        }, 1200)
    }

    const NextButtonClick = (e) => {
        e.preventDefault();

        tekshirish(nameInp, name, t('Name'));
        tekshirish(emailInp, email, t('Email'));

        if (phone.length === 0) {
            tekshirish(phoneInp, phone, t('Num'));
        }

        if (phone.length < 12 && phone.length !== 0) {
            raqamTekshirish(phoneInp);
        }

        if (name === '' || phone.length < 12 || email === '') {
            nextButton.classList.add('animate__animated', 'animate__shakeX');
            setTimeout(() => {
                nextButton.classList.remove('animate__animated', 'animate__shakeX');
            }, 1000)
        }

        if (name !== '' && phone.length === 12 && email !== '') {

            tab1.firstElementChild.classList.toggle('bg-buttonbg')
            tab1.firstElementChild.classList.toggle('bg-bggray')
            tab1.lastElementChild.classList.toggle('text-white')

            tab2.firstElementChild.classList.toggle('bg-buttonbg')
            tab2.firstElementChild.classList.toggle('bg-bggray')
            tab2.lastElementChild.classList.toggle('text-white')

            tabPanel1.classList.toggle('tabClick');
            tabPanel2.classList.toggle('tabClick');

            setTimeout(() => {
                tabPanel1.classList.toggle('hidden');
                tabPanel1.classList.toggle('grid');
                tabPanel2.classList.toggle('hidden');
                tabPanel2.classList.toggle('grid');
            }, 10);
        }
    }

    const SubmitButton = (e) => {
        e.preventDefault();

        if (security.checked) {
            tekshirish(companyInp, company, t('company'));
        }

        if (company === '' && security.checked) {
            submitButton.classList.add('animate__animated', 'animate__shakeX');
            setTimeout(() => {
                submitButton.classList.remove('animate__animated', 'animate__shakeX');
            }, 1000)
        }

        if (company !== '' && security.checked) {
            axios
                .post(`${BASE_URL}claim`, {
                    name: name.trim(),
                    status: 1,
                    phone: phone,
                    email: email.trim(),
                    companyName: company.trim(),
                    description: aboutProject.trim(),
                    nda: checkbox.checked === true ? 1 : 0
                })
                .then((response) => {
                    const message = document.createElement('p');
                    message.classList.add('connect-messege');
                    message.innerText = t('message');
                    document.querySelector('body').append(message);
                    setTimeout(() => {
                        message.innerText = '';
                        message.classList.remove('connect-messege');
                    }, 2500);
                })
                .catch(function (error) {
                    const message = document.createElement('p');
                    message.classList.add('error-messege');
                    message.innerText = t('contactError');
                    document.querySelector('body').append(message);
                    setTimeout(() => {
                        message.innerText = '';
                        message.classList.remove('error-messege');
                    }, 2500);
                });

            tab1.firstElementChild.classList.toggle('bg-buttonbg')
            tab1.firstElementChild.classList.toggle('bg-bggray')
            tab1.lastElementChild.classList.toggle('text-white')

            tab2.firstElementChild.classList.toggle('bg-buttonbg')
            tab2.firstElementChild.classList.toggle('bg-bggray')
            tab2.lastElementChild.classList.toggle('text-white')

            setTimeout(() => {
                tabPanel1.classList.toggle('hidden');
                tabPanel1.classList.toggle('grid');
                tabPanel2.classList.toggle('hidden');
                tabPanel2.classList.toggle('grid');
            }, 10);

            setName('');
            setPhone('');
            setEmail('');
            setCompany('');
            setAboutProject('');
            checkbox.checked = false;
            security.checked = false;
            submitButton.classList.remove('bg-buttonbg');
            submitButton.classList.add('bg-bggray');
        }
    }
    
    const checkSubmit = () => {
        if (security.checked) {
            submitButton.classList.remove('bg-bggray');
            submitButton.classList.add('bg-buttonbg');
        } else {
            submitButton.classList.remove('bg-buttonbg');
            submitButton.classList.add('bg-bggray');
        }
    }

    return (
        <div className="before">
            <div className="before-anchor" id="contact"></div>
            <div className="bg-bgblack py-40 md:py-60 lg:py-80">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-60">
                        <div className="w-full">
                            <p className="text-xxl mb-40  text-white wolkway">{t('connectTitle')}</p>
                            <p className="text-sm mb-10 text-placeholderColor">{t('formFill')}</p>
                            <div className="space-y-40">
                                <div className="flex items-center gap-10">
                                    <div className="w-24 h-24 overflow-hidden shrink-0 rounded-full">
                                        <Image className="w-full h-full object-cover" src={tick} alt="" />
                                    </div>
                                    <p className="text-base text-white font-normal">{t('connectDetail1')}</p>
                                </div>

                                <div className="flex items-center gap-10">
                                    <div className="w-24 h-24 overflow-hidden shrink-0 rounded-full">
                                        <Image className="w-full h-full object-cover" src={tick} alt="" />
                                    </div>
                                    <p className="text-base text-white font-normal">{t('connectDetail2')}</p>
                                </div>

                                <div className="flex items-center gap-10">
                                    <div className="w-24 h-24 overflow-hidden shrink-0 rounded-full">
                                        <Image className="w-full h-full object-cover" src={tick} alt="" />
                                    </div>
                                    <p className="text-base text-white font-normal">{t('connectDetail3')}</p>
                                </div>

                                <div className="">
                                    <p className="text-sm text-placeholderColor">{t('writeUs')}</p>
                                    <a className="text-base text-white" href="mailto:hello@mimsoft.uz">hello@mimsoft.io</a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full overflow-hidden">
                            <div className="flex justify-center">
                                <div className="block space-y-10 md:inline-flex items-center gap-26 md:gap-32 lg:gap-40 mb-20 md:mb-30 lg:mb-40">
                                    <div id='tab1' className="inline-flex items-center gap-10 text-placeholderColor">
                                        <button className="bg-buttonbg w-46 h-46 flex items-center justify-center shrink-0 text-white rounded-full">1</button>
                                        <span className="text-white text-base">{t('perInfor')}</span>
                                    </div>
                                    <div id='tab2' className="inline-flex items-center gap-10 text-placeholderColor">
                                        <button className="bg-bggray w-46 h-46 flex items-center justify-center shrink-0 text-white rounded-full">2</button>
                                        <span className="text-base">{t('proInfor')}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full border border-white p-20 md:p-30 lg:p-40 rounded-14px md:rounded-17px">
                                <form id='tabPanel1' className="grid grid-cols-1 gap-20 md:gap-30 lg:gap-40">
                                    <input
                                        id="name" type="text"
                                        className="text-base outline-none text-placeholderColor py-10 md:py-16 lg:py-20 border-b-2 bg-transparent border-placeholderColor w-full"
                                        value={name}
                                        onChange={changeName}
                                        placeholder={t('phoneName')}
                                    />

                                    <IMaskInput
                                        id='phone'
                                        value={phone}
                                        mask='+{998} (00) 000 00 00'
                                        unmask={true}
                                        ref={ref}
                                        onAccept={
                                            (value, mask) => setPhone(value)
                                        }
                                        placeholder={t('phoneNum')}
                                        className="text-base outline-none text-placeholderColor py-10 md:py-16 lg:py-20 border-b-2 bg-transparent border-placeholderColor w-full"
                                    />

                                    <input
                                        id="email" type="email"
                                        className="text-base outline-none text-placeholderColor py-10 md:py-16 lg:py-20 border-b-2 bg-transparent border-placeholderColor w-full"
                                        value={email}
                                        onChange={changeEmail}
                                        placeholder={t('emailInp')}
                                    />

                                    <div>
                                        <input
                                            id="nextButton"
                                            className="font-medium text-sm text-white bg-buttonbg rounded-7px py-14 px-30 cursor-pointer"
                                            type="submit"
                                            value={t('next')}
                                            onClick={NextButtonClick}
                                        />
                                    </div>
                                </form>
                                <form id='tabPanel2' className="grid-cols-1 gap-20 md:gap-30 lg:gap-40 hidden">
                                    <input
                                        id="company" type="text"
                                        className="text-base outline-none text-placeholderColor py-10 md:py-16 lg:py-20 border-b-2 bg-transparent border-placeholderColor w-full"
                                        value={company}
                                        onChange={changeCompany}
                                        placeholder={t('companyInp')}
                                    />

                                    <input
                                        id="project" type="text"
                                        className="text-base outline-none text-placeholderColor py-10 md:py-16 lg:py-20 border-b-2 bg-transparent border-placeholderColor w-full  resize-none"
                                        value={aboutProject}
                                        onChange={changeProject}
                                        placeholder={t('phoneDescription')}
                                    />

                                    <div className=" flex gap-20 items-center">
                                        <input
                                            id='checkbox' type="checkbox"
                                            className="w-20 h-20 outline-none"
                                        />
                                        <label htmlFor="checkbox" className="text-placeholderColor text-sm md:text-base">{t('phoneNDA')}</label>
                                    </div>

                                    <div className=" flex gap-20 items-center">
                                        <input
                                            onClick={checkSubmit}
                                            id='security' type="checkbox"
                                            className="w-20 h-20 outline-none"
                                        />
                                        <p className="text-white text-sm md:text-base"><Link href="/privacy"><a className="underline underline-offset-1"target="_blank" rel="noopener noreferrer">{t('privacy')}</a></Link> {t('phoneSecurity')}</p>
                                    </div>

                                    <div>
                                        <input
                                            id="connect"
                                            className="font-medium text-sm text-white bg-bggray rounded-7px py-14 px-30 cursor-pointer"
                                            type="submit"
                                            value={t('contact')}
                                            onClick={SubmitButton}
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConnectBox;