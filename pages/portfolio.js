import Head from 'next/head'
import Layout from "../components/layout";
import { useTranslation } from "react-i18next";
import HomeBox from "../components/layout/homeBox";
import ConnectBox from "../components/layout/connectBox";
import PortfolioBox from "../components/portfolioComponents/portfolioBox";

function Portfolio() {
    const { t } = useTranslation();
    return (
        <div>
            <Head>
                <title>Mimsoft</title>
                <link rel="icon" href="/favicon.ico" />

                <meta property="type" content="website" />
                <meta property="og:type" content="website" />

                <meta property="author" content="Mimsoft" />
                <meta property="og:author" content="Mimsoft" />

                <meta property="site_name" content="mimsoft.io" />
                <meta property="og:site_name" content="mimsoft.io" />

                <meta property="image" content="%PUBLIC_URL%/logo192.png" />
                <meta property="og:image" content="%PUBLIC_URL%/logo192.png" />

                <meta property="url" content="https://mimsoft.uz/portfolio" />
                <meta property="og:url" content="https://mimsoft.uz/portfolio" />

                <meta property="title" content="Biznes muammolarga zamonaviy, qulay va kreativ yechimlar" />
                <meta property="og:title" content="Biznes muammolarga zamonaviy, qulay va kreativ yechimlar" />

                <meta property="keywords" content="mimsoft, Mimsoft, mimsoft io, best it company, IT, IT company, IT kompaniya, tashkent it company," />
                <meta property="og:keywords" content="mimsoft, Mimsoft, mimsoft io, best it company, IT, IT company, IT kompaniya, tashkent it company," />

                <meta property="description" content="Mimsoft - biznes muammolarga zamonaviy, qulay va kreativ yechim taklif qila oladigan ko'ptarmoqli IT kompaniya" />
                <meta property="og:description" content="Mimsoft - biznes muammolarga zamonaviy, qulay va kreativ yechim taklif qila oladigan ko'ptarmoqli IT kompaniya" />

                {/* <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" /> */}
            </Head>

            <Layout>
                <HomeBox name={t('portfolio')} title={t('portfolioSlogan')} page={t('portfolio')} />
                <PortfolioBox />
                <ConnectBox />
            </Layout>
        </div>
    );
}

export default Portfolio;