import mail from "../../images/mail.png"
import linkedin from "../../images/linkedin.png"
import facebook from "../../images/facebook.png"
import telegram from "../../images/telegram.png"
import instagram from "../../images/instagram.png"
import twitter from "../../images/twitter.png"
import Image from 'next/image'
// import { useTranslation } from "react-i18next"

function Footer() {
    // const { t } = useTranslation();
    const clickTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className="py-40 bg-bgblack">
            <div className="container">
                <div className="gap-x-20 gap-y-40 grid md:grid-cols-2 items-center">
                    <div className="flex flex-col gap-10 w-full">
                        <p onClick={clickTop} className="text-xl text-white wolkway cursor-pointer">mimsoft</p>
                        <p className="text-sm w-full text-placeholderColor">copyRight</p>
                    </div>
                    <div className="flex justify-start md:justify-end gap-20">
                        <a className="w-28 h-28" target="_blank" href="mailto:hello@mimsoft.uz" > <Image className="max-w-full max-h-full" src={mail} alt="" /> </a>
                        <a className="w-28 h-28" target="_blank" href="https://www.linkedin.com/company/mimsoft" > <Image className="max-w-full max-h-full" src={linkedin} alt="" /> </a>
                        <a className="w-28 h-28" target="_blank" href="https://www.facebook.com/mimsoft.io" > <Image className="max-w-full max-h-full" src={facebook} alt="" /> </a>
                        <a className="w-28 h-28" target="_blank" href="https://t.me/mimsoft_io" > <Image className="max-w-full max-h-full" src={telegram} alt="" /> </a>
                        <a className="w-28 h-28" target="_blank" href="https://instagram.com/mimsoft.io" > <Image className="max-w-full max-h-full" src={instagram} alt="" /> </a>
                        <a className="w-28 h-28" target="_blank" href="https://twitter.com/mimsoft_io" > <Image className="max-w-full max-h-full" src={twitter} alt="" /> </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;