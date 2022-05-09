import React, { useState } from 'react';
import Link from "next/link";
import Image from 'next/image'
import LogoD from "../../images/logoL.png";
import MobileMenu from './mabileMenu';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';



const Header = () => {
    const { t } = useTranslation();
    const [isMobileMenu, setIsMobileMenu] = useState(false);
    // const [localLang, setLocalLang] = useState(localStorage.getItem('lang'));

    const openMobileMenu = () => {
        setIsMobileMenu(true);
    };

    return (
        <header className="z-20 sticky top-0 bg-red-500">
            <div className="py-20 bg-opacity-100 bg-bgblack w-full">
                <div className="container">
                    <div className="flex justify-between items-center md:space-x-10">
                        <div className="flex items-center">
                            <Logo />
                            <NavLinks />
                        </div>
                        <div className="flex items-center text-white space-x-20">
                            {/* <a href="tel:+998970001551" className="text-base text-white hidden md:inline-block">+998 (97) 000-15-51</a> */}
                            <a href="#contact" className="font-medium text-base text-white py-13 px-30 bg-buttonbg rounded-7px hidden md:block">{t('contact')}</a>
                            <button
                                onClick={openMobileMenu}
                                type="button"
                                className="lg:hidden text-white"
                                aria-expanded="false">
                                <svg className="h-30 w-30" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {isMobileMenu && <MobileMenu setIsMobileMenu={setIsMobileMenu} />}
            </div>
        </header>
    );
};

export default Header;

export function Logo() {
    return (
        <div className="">
            <Link href="/">
                <a className="flex items-end gap-x-12 mr-60">
                    <div className="w-44 h-44 flex items-center justify-center">
                        <Image className="" src={LogoD} alt="logo" />
                    </div>
                </a>
            </Link>
        </div>
    );
}

const NavLinks = () => {
    return (
        <nav className="hidden lg:flex gap-x-40">
            <Link href={"/services"}>
                <a className="text-lg text-white active:text-buttonbg">{t('services')}</a>
            </Link>
            <Link href={"/portfolio"}>
                <a className="text-lg text-white active:text-buttonbg">{t('portfolio')}</a>
            </Link>
            <Link href={"/about"}>
                <a className="text-lg text-white active:text-buttonbg">{t('about')}</a>
            </Link>
            <Link href={"/contact"}>
                <a className="text-lg text-white active:text-buttonbg">{t('contacts')}</a>
            </Link>

        </nav>
    );
};