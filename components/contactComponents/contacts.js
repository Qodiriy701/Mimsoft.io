import Image from 'next/image';
import React, { useContext } from "react";
import { useEffect, useState } from "react";
import mail from '../../images/conMail.png';
import phone from '../../images/conPhone.png';
import navigate from '../../images/conNavigate.png';
import styles from '../../styles/contact.module.css';


function Contacts() {
    const [active, setActive] = useState(true);
    let tab1, tab2;
    let tab1Content, tab2Content;

    useEffect(() => {
        tab1 = document.querySelector('#tab1');
        tab2 = document.querySelector('#tab2');
        tab1Content = document.querySelector('#tab1Content');
        tab2Content = document.querySelector('#tab2Content');
    })

    function OpenCity(params) {
        setActive(!active);
        console.log(active);
        tab1.classList.remove('border-blue');
        tab1.classList.add('border-transparent');
        if (params == 'tab1Content') {
            tab1Content.classList.remove('tabcontent');
            tab2Content.classList.add('tabcontent');
        } else {
            tab1Content.classList.add('tabcontent');
            tab2Content.classList.remove('tabcontent');
        }
    }

    return (
        <div className="py-20 md:py-30 lg:py-40 bg-bggray">
            <div className="container relative space-y-20">
                <div className="md:pb-350">
                    {active ? 
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.5877008039074!2d69.29998923785148!3d41.3178321540106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b7d761732dd%3A0x7b7e5180fa504771!2sIT%20Unity%20Academy!5e0!3m2!1sru!2s!4v1652113416420!5m2!1sru!2s" 
                            className='w-full h-300 md:h-400 lg:h-500' loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                        :
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198678.89633864383!2d-87.87239081133158!3d41.83364743148599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2z0KfQuNC60LDQs9C-LCDQmNC70LvQuNC90L7QudGBLCDQodCo0JA!5e1!3m2!1sru!2s!4v1652114263453!5m2!1sru!2s" 
                            className='w-full h-300 md:h-400 lg:h-500' loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    }
                </div>
                <div className="inline-flex flex-col gap-80 p-20 md:p-30 lg:p-40 bg-bgblack md:absolute md:bottom-120">
                    <div className={styles.tab}>
                        <div className="inline-flex gap-40 border-b-2 border-bggray">
                            <button id="tab1" onClick={() => OpenCity('tab1Content')} className="border-b-2 border-blue">O‘zbekiston</button>
                            <button id="tab2" onClick={() => OpenCity('tab2Content')} className="border-b-2 border-transparent">United States of America</button>
                        </div>
                    </div>

                    <div id="tab1Content" className='text-white'>
                        <div className='space-y-40'>
                            <div className='flex items-center gap-20'>
                                <div className='w-50 h-50 lg:w-62 lg:h-62 inline-flex rounded-7px shrink-0 items-center justify-center bg-bggray'>
                                    <Image src={navigate} />
                                </div>
                                <div>
                                    <p className='text-lg md:text-xl lg:text-xxl leading-9'>Manzil</p>
                                    <p className='text-sm md:text-base leading-7'>86a Mustaqillik shoh ko’chasi, Toshkent</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-20'>
                                <div className='w-50 h-50 lg:w-62 lg:h-62 inline-flex rounded-7px shrink-0 items-center justify-center bg-bggray'>
                                    <Image src={mail} />
                                </div>
                                <div>
                                    <p className='text-lg md:text-xl lg:text-xxl leading-9'>Email</p>
                                    <p className='text-sm md:text-base leading-7'>hello@mimsoft.io</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-20'>
                                <div className='w-50 h-50 lg:w-62 lg:h-62 inline-flex rounded-7px shrink-0 items-center justify-center bg-bggray'>
                                    <Image src={phone} />
                                </div>
                                <div>
                                    <p className='text-lg md:text-xl lg:text-xxl leading-9'>Telefon raqam</p>
                                    <p className='text-sm md:text-base leading-7'>(97) 000 15 51</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="tab2Content" className='tabcontent text-white'>
                        <div className='space-y-40'>
                            <div className='flex items-center gap-20'>
                                <div className='w-50 h-50 lg:w-62 lg:h-62 inline-flex rounded-7px shrink-0 items-center justify-center bg-bggray'>
                                    <Image src={navigate} />
                                </div>
                                <div>
                                    <p className='text-lg md:text-xl lg:text-xxl leading-9'>Address</p>
                                    <p className='text-sm md:text-base leading-7'>86a Mustaqillik shoh ko’chasi, Toshkent</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-20'>
                                <div className='w-50 h-50 lg:w-62 lg:h-62 inline-flex rounded-7px shrink-0 items-center justify-center bg-bggray'>
                                    <Image src={mail} />
                                </div>
                                <div>
                                    <p className='text-lg md:text-xl lg:text-xxl leading-9'>Email</p>
                                    <p className='text-sm md:text-base leading-7'>hello@mimsoft.io</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-20'>
                                <div className='w-50 h-50 lg:w-62 lg:h-62 inline-flex rounded-7px shrink-0 items-center justify-center bg-bggray'>
                                    <Image src={phone} />
                                </div>
                                <div>
                                    <p className='text-lg md:text-xl lg:text-xxl leading-9'>Phone number</p>
                                    <p className='text-sm md:text-base leading-7'>(97) 000 15 51</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;