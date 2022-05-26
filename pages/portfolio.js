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

                <meta name="type" content="website" />
                <meta name="og:type" content="website" />

                <meta name="author" content="Mimsoft" />
                <meta name="og:author" content="Mimsoft" />

                <meta name="site_name" content="mimsoft.io" />
                <meta name="og:site_name" content="mimsoft.io" />

                <meta name="image" content="%PUBLIC_URL%/logo192.png" />
                <meta name="og:image" content="%PUBLIC_URL%/logo192.png" />

                <meta name="url" content="https://mimsoft.io/portfolio" />
                <meta name="og:url" content="https://mimsoft.io/portfolio" />

                <meta name="url" content="https://mimsoft.uz/portfolio" />
                <meta name="og:url" content="https://mimsoft.uz/portfolio" />

                <meta name="title" content="Biznes muammolarga zamonaviy, qulay va kreativ yechimlar" />
                <meta name="og:title" content="Biznes muammolarga zamonaviy, qulay va kreativ yechimlar" />

                <meta name="keywords" content="mimsoft, Mimsoft, mimsoft io, best it company, IT, IT company, IT kompaniya, tashkent it company," />
                <meta name="og:keywords" content="mimsoft, Mimsoft, mimsoft io, best it company, IT, IT company, IT kompaniya, tashkent it company," />

                <meta name="description" content="Mimsoft - biznes muammolarga zamonaviy, qulay va kreativ yechim taklif qila oladigan ko'ptarmoqli IT kompaniya" />
                <meta name="og:description" content="Mimsoft - biznes muammolarga zamonaviy, qulay va kreativ yechim taklif qila oladigan ko'ptarmoqli IT kompaniya" />

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