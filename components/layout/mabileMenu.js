import { useTranslation } from "react-i18next";
import Link from "next/link";
import { Logo } from "./header";

const MobileMenu = ({ setIsMobileMenu }) => {
    const { t } = useTranslation();
    const closeMobileMenu = () => {
        setIsMobileMenu(false);
    };

    return (
        <div className="fixed inset-0 lg:hidden min-h-screen">
            <div className="bg-bgblack w-full h-full">
                <div className="container">
                    <div className="flex items-center justify-between py-20">
                        <Logo />
                        <button
                            onClick={closeMobileMenu}
                            type="button"
                            className="p-1 inline-flex items-center justify-center text-white">
                            <span className="sr-only">Close menu</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-26 w-26" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-16">
                        <nav className="flex flex-col text-center space-y-20">
                            <a href="tel:+998970001551" className="text-base text-white my-20">+998 (97) 000-15-51</a>
                            <Link href={"/services"}>
                                <a className="text-white text-lg">{t('services')}</a>
                            </Link>
                            <Link href={"/portfolio"}>
                                <a className="text-white text-lg">{t('portfolio')}</a>
                            </Link>
                            <Link href={"/about"}>
                                <a className="text-white text-lg">{t('about')}</a>
                            </Link>
                            <Link href={"/contact"}>
                                <a className="text-white text-lg">{t('contacts')}</a>
                            </Link>
                            
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;
