import Image from 'next/image';
import { useEffect, useState } from "react";
import phone from '../../images/conPhone.png';
import navigate from '../../images/conNavigate.png';
import styles from '../../styles/contact.module.css';


function Contacts() {
    const [active, setActive] = useState(false);
    const [tab1, setTab1] = useState('');
    const [tab2, setTab2] = useState('');

    useEffect(() => {
        setTab1(document.querySelector('#tab1'));
        setTab2(document.querySelector('#tab2'));
    }, [setTab1])

    function OpenCity(params) {
        if (params == 'uzb') {
            setActive(true);
            tab1.classList.remove('tabBorder');
            tab1.classList.add('tabBorderNone');
            tab2.classList.add('tabBorder');
            tab2.classList.remove('tabBorderNone');
        } 
        if (params == 'usa') {
            setActive(false)
            tab1.classList.add('tabBorder');
            tab1.classList.remove('tabBorderNone');
            tab2.classList.remove('tabBorder');
            tab2.classList.add('tabBorderNone');
        }
    }

    return (
        <div className="py-20 md:py-30 lg:py-40 bg-bggray">
            <div className="container relative space-y-20">
                <div className="md:pb-350">
                    {active ? 
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.5877008039074!2d69.29998923785148!3d41.3178321540106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b7d761732dd%3A0x7b7e5180fa504771!2sIT%20Unity%20Academy!5e0!3m2!1sru!2s!4v1652113416420!5m2!1sru!2s" 
                            className='w-full h-400 md:h-463 lg:h-500' loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                        :
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198678.89633864383!2d-87.87239081133158!3d41.83364743148599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2z0KfQuNC60LDQs9C-LCDQmNC70LvQuNC90L7QudGBLCDQodCo0JA!5e1!3m2!1sru!2s!4v1652114263453!5m2!1sru!2s" 
                            className='w-full h-400 md:h-463 lg:h-500' loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    }
                </div>
                <div className="inline-flex flex-col gap-80 p-20 md:p-30 lg:p-40 bg-bgblack md:absolute md:bottom-120">
                    <div className={styles.tab}>
                        <div className="inline-flex gap-40 border-b-2 border-bggray">
                            <button id="tab1" onClick={() => OpenCity('usa')} className="border-b-2 tabBorder">United States</button>
                            <button id="tab2" onClick={() => OpenCity('uzb')} className="border-b-2 tabBorderNone">Uzbekistan</button>
                        </div>
                    </div>

                    <div id="tab1Content" className='text-white'>
                        <div className='space-y-40'>
                            <div className='flex items-center gap-20'>
                                <div className='w-50 h-50 lg:w-62 lg:h-62 inline-flex rounded-7px shrink-0 items-center justify-center bg-bggray'>
                                    <Image src={navigate} alt="" />
                                </div>
                                <div>
                                    <p className='text-lg md:text-xl lg:text-xxl leading-9'>Address</p>
                                    <div className='text-sm md:text-base leading-7'>
                                        {active ? 
                                            <p>Ziyolilar ko`chasi 4G, Tashkent</p>
                                            :
                                            <p>9485 Main Ave Cincinnati, OH</p>
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center gap-20'>
                                <div className='w-50 h-50 lg:w-62 lg:h-62 inline-flex rounded-7px shrink-0 items-center justify-center bg-bggray'>
                                    <Image src={phone} alt="" />
                                </div>
                                <div>
                                    <p className='text-lg md:text-xl lg:text-xxl leading-9'>Phone number</p>
                                    <div className='text-sm md:text-base leading-7'>
                                        {active ? 
                                            <p>+998 97-000-1551</p>
                                            :
                                            <p>+1 415-797-3154</p>
                                        }
                                    </div>
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