import { useTranslation } from "react-i18next";


function Evaluation() {
    const { t } = useTranslation();
    return (
        <div className="py-80 md:py-120 lg:py-160 bg-bggray">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div className="text-white p-40 md:p-60 lg:p-80 flex flex-col justify-center border" id="evaBg1">
                        <p className="text-xxl tracking-wider leading-8 mb-10">Jamoamiz bilan tanish bo‘lsangiz bizni baholash imkoniga egasiz!</p>
                        <p className="text-placeholderColor md:w-60% leading-5 mb-85">Quyidagi saytlarda mimsoft o’z profiliga ega!</p>
                        <div className="grid grid-cols-2 gap-20">
                            <a href="" className="flex items-center space-x-10">
                                <i className="w-36 h-36 flex items-center justify-center rounded-full bg-bgblack ri-external-link-line text-white"></i>
                                <p className="underline underline-offset-1">Glassdoor</p>
                            </a>
                        </div>
                    </div>
                    <div className="text-white p-40 md:p-60 lg:p-80 flex flex-col justify-center border" id="evaBg2">
                        <p className="text-xxl tracking-wider leading-8 mb-10">Mimsoftning ijtimoiy tarmoqlardagi sahifalari</p>
                        <p className="text-placeholderColor md:w-80% leading-5 mb-40">Doimiy yangiliklardan xabardor bo‘lib turish uchun obuna bo‘ling</p>
                        <div className="grid grid-cols-2 gap-20">
                            <a href="" className="flex items-center space-x-10">
                                <i className="w-36 h-36 flex items-center justify-center rounded-full bg-bgblack ri-external-link-line text-white"></i>
                                <p className="underline underline-offset-1">Glassdoor</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Evaluation;