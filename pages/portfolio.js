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

                <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
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