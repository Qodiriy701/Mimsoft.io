import Head from 'next/head';
import Layout from '../components/layout';
import { useTranslation } from "react-i18next";
import HomeBox from '../components/layout/homeBox';
import Contacts from '../components/contactComponents/contacts';

function Contact() {
    const { t } = useTranslation();
    return(
        <div>
            <Head>
                <title>Mimsoft</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="contact.css"></link>
                <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"></link>
            </Head>

            <Layout>
                <HomeBox name={t('contacts')} title={t('contactSlogan')} page={t('contacts')} />
                <Contacts />
            </Layout>
        </div>
    )
}

export default Contact;