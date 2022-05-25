import Head from 'next/head';
import dynamic from 'next/dynamic';
import 'remixicon/fonts/remixicon.css';
import Layout from '../components/layout';
import { useTranslation } from "react-i18next";
const ConnectBox = dynamic(() => import('../components/layout/connectBox'));
const HomeMain = dynamic(() => import('../components/homeComponents/main'));
const PartnersBox = dynamic(() => import('../components/swiper/scrollBar'));
const MainAbout = dynamic(() => import('../components/homeComponents/about'));
const Services = dynamic(() => import('../components/homeComponents/services'));
const QuestionBox = dynamic(() => import('../components/homeComponents/question'));
const FeedbackBox = dynamic(() => import('../components/homeComponents/feedbacks'));
const MainPortfolio = dynamic(() => import('../components/homeComponents/portfolio'));

// import { t } from 'i18next'
// import styles from '../styles/index.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mimsoft - Custom Software, Mobile&Web App Development</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="type" content="website" />
        <meta name="og:type" content="website" />

        <meta name="author" content="Mimsoft" />
        <meta name="og:author" content="Mimsoft" />

        <meta name="site_name" content="mimsoft.io" />
        <meta name="og:site_name" content="mimsoft.io" />

        <meta name="url" content="https://mimsoft.io" />
        <meta name="og:url" content="https://mimsoft.io" />

        <meta name="image" content="%PUBLIC_URL%/logo192.png" />
        <meta name="og:image" content="%PUBLIC_URL%/logo192.png" />

        <meta name="title" content="Biznes muammolarga zamonaviy, qulay va kreativ yechimlar" />
        <meta name="og:title" content="Biznes muammolarga zamonaviy, qulay va kreativ yechimlar" />

        <meta name="keywords" content="mimsoft, Mimsoft, mimsoft io, best it company, IT, IT company, IT kompaniya, tashkent it company," />
        <meta name="og:keywords" content="mimsoft, Mimsoft, mimsoft io, best it company, IT, IT company, IT kompaniya, tashkent it company," />

        <meta name="description" content="Mimsoft - biznes muammolarga zamonaviy, qulay va kreativ yechim taklif qila oladigan ko'ptarmoqli IT kompaniya" />
        <meta name="og:description" content="Mimsoft - biznes muammolarga zamonaviy, qulay va kreativ yechim taklif qila oladigan ko'ptarmoqli IT kompaniya" />

        {/* <link href="https://unpkg.com/aos@next/dist/aos.css" rel="stylesheet" /> */}
        {/* <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" /> */}
        {/* <link href="https://www.w3schools.com/w3css/4/w3.css" rel="stylesheet" /> */}
      </Head>

      <Layout>
        <HomeMain />
        <Services />
        <MainPortfolio />
        <MainAbout />
        <MainPartnersBox />
        <FeedbackBox />
        <QuestionBox />
        <ConnectBox />
      </Layout>
    </div>
  )
}

function MainPartnersBox() {
  const { t } = useTranslation();
  return (
    <div className="py-80 md:py-120 lg:py-160 bg-bggray">
      <div className="container">
        <p className="text-xxl mb-20 text-white wolkway">{t('partners')}</p>
        <PartnersBox />
      </div>
    </div>
  )
}
