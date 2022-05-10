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
                <title>Mimsoft</title>
                <link rel="icon" href="/favicon.ico" />
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