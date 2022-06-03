import Head from 'next/head';
import Layout from '../components/layout';
import { useTranslation } from "react-i18next";
import HomeBox from '../components/layout/homeBox';
import ConnectBox from '../components/layout/connectBox';
import PartnersBox from '../components/swiper/scrollBar';
import AboutMain from '../components/aboutComponents/main';
import TeamMembers from '../components/aboutComponents/members';
import FeedbackBox from '../components/homeComponents/feedbacks';
import Evaluation from "../components/aboutComponents/evaluation";

function AboutUsPage() {
    const { t } = useTranslation();
    return (
        <div>
            <Head>
                <title>Mimsoft - Custom Software, Mobile&Web App Development</title>
                <link rel="icon" href="/favicon.ico" />

                <meta name="type" content="website" />
                <meta name="og:type" content="website" />

                <meta name="author" content="Mimsoft" />
                <meta name="og:author" content="Mimsoft" />

                <meta name="url" content="mimsoft.io/about" />
                <meta name="og:url" content="mimsoft.io/about" />

                <meta name="site_name" content="mimsoft.io" />
                <meta name="og:site_name" content="mimsoft.io" />

                <meta name="image" content="%PUBLIC_URL%/logo192.png" />
                <meta name="og:image" content="%PUBLIC_URL%/logo192.png" />

                <meta name="title" content="Biznes muammolarga zamonaviy, qulay va kreativ yechimlar" />
                <meta name="og:title" content="Biznes muammolarga zamonaviy, qulay va kreativ yechimlar" />

                <meta name="keywords" content="mimsoft, Mimsoft, mimsoft io, best it company, IT, IT company, IT kompaniya, tashkent it company," />
                <meta name="og:keywords" content="mimsoft, Mimsoft, mimsoft io, best it company, IT, IT company, IT kompaniya, tashkent it company," />

                <meta name="description" content="Mimsoft - biznes muammolarga zamonaviy, qulay va kreativ yechim taklif qila oladigan ko'ptarmoqli IT kompaniya" />
                <meta name="og:description" content="Mimsoft - biznes muammolarga zamonaviy, qulay va kreativ yechim taklif qila oladigan ko'ptarmoqli IT kompaniya" />

                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" />
            </Head>

            <Layout>
                <HomeBox name={t('about')} title={t('aboutTeam')} page={t('about')} />
                <AboutMain />
                <TeamMembers />
                <Partners />
                <FeedbackBox />
                <Evaluation />
                <ConnectBox />
            </Layout>
        </div>
    );
}

export default AboutUsPage;



function Partners() {
    const { t } = useTranslation();
    return (
        <div className="py-40 md:py-60 lg:py-80 bg-bggray">
            <div className="container">
                <p className="text-xxl mb-20 text-white wolkway">{t('partners')}</p>
                <PartnersBox />
            </div>
        </div>
    )
}