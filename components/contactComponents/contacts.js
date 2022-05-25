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
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1564.156952935377!2d69.3295807113147!3d41.33730779771465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b82b9216771%3A0xd19634d7a12e177a!2sMimsoft!5e1!3m2!1sru!2s!4v1653515203931!5m2!1sru!2s" 
                            className='w-full h-400 md:h-463 lg:h-500' loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                        :
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3227.4809099834492!2d-84.3266618!3d39.2279997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8840545993fdba49%3A0xa89cdaf70e730d52!2zOTQ4NSBNYWluIEF2ZSwgQ2luY2lubmF0aSwgT0ggNDUyNDIsINCh0KjQkA!5e1!3m2!1sru!2s!4v1653515777862!5m2!1sru!2s" 
                            className='w-full h-400 md:h-463 lg:h-500' loading="lazy" referrerpolicy="no-referrer-when-downgrade">
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
                                            <p>+1 415-712-40-59</p>
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