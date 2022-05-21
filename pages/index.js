import Head from 'next/head'
import MainAbout from '../components/homeComponents/about'
import HomeMain from '../components/homeComponents/main'
import Services from '../components/homeComponents/services'
import Layout from '../components/layout'
import 'remixicon/fonts/remixicon.css'
import PartnersBox from '../components/swiper/scrollBar'
import MainPortfolio from '../components/homeComponents/portfolio'
import FeedbackBox from '../components/homeComponents/feedbacks'
import ConnectBox from '../components/layout/connectBox'
import { useTranslation } from "react-i18next";
import { t } from 'i18next'
import QuestionBox from '../components/homeComponents/question'

export default function Home() {
  return (
    <div>
      <Head>
        <title>mimsoft</title>
        <link rel="icon" href="/favicon.ico" />

        <meta property="type" content="website"/>
        <meta property="og:type" content="website"/>
        
        <meta property="author" content="Mimsoft"/>
        <meta property="og:author" content="Mimsoft"/>

        <meta property="site_name" content="mimsoft.io"/>
        <meta property="og:site_name" content="mimsoft.io"/>

        <meta property="url" content="https://mimsoft.io"/>
        <meta property="og:url" content="https://mimsoft.io"/>
        
        <meta property="image" content="%PUBLIC_URL%/logo192.png" />
        <meta property="og:image" content="%PUBLIC_URL%/logo192.png" />

        <meta property="title" content="Biznes muammolarga zamonaviy, qulay va kreativ yechimlar"/>
        <meta property="og:title" content="Biznes muammolarga zamonaviy, qulay va kreativ yechimlar"/>

        <meta property="keywords" content="mimsoft, Mimsoft, mimsoft io, best it company, IT, IT company, IT kompaniya, tashkent it company,"/>
        <meta property="og:keywords" content="mimsoft, Mimsoft, mimsoft io, best it company, IT, IT company, IT kompaniya, tashkent it company,"/>

        <meta property="description" content="Mimsoft - biznes muammolarga zamonaviy, qulay va kreativ yechim taklif qila oladigan ko'ptarmoqli IT kompaniya"/>
        <meta property="og:description" content="Mimsoft - biznes muammolarga zamonaviy, qulay va kreativ yechim taklif qila oladigan ko'ptarmoqli IT kompaniya"/>

        <link href="https://unpkg.com/aos@next/dist/aos.css" rel="stylesheet" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        <link href="https://www.w3schools.com/w3css/4/w3.css" rel="stylesheet" />
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
