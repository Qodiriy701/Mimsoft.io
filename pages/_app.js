import '../i18n'
import Head from 'next/head';
import '../styles/index.css';
import '../styles/globals.css';
import { useTranslation } from 'react-i18next'
import AuthProvider from '../utils/authContext';


function MyApp({ Component, pageProps }) {
  const { i18n } = useTranslation();

  // useEffect(() => {
  //   const getData = async () => {
  //     // const lang = localStorage.getItem("lang");

  //   //   if (lang) {
  //   //     i18n.changeLanguage(lang);
  //   //   } else {
  //   //     localStorage.setItem('lang', 'eng');

  //   //     // const res = await axios.get('https://ip-geolocation.whoisxmlapi.com/api/v1?apiKey=at_yz0CE3Rg5rmazH0lsGkUbUcfZMgJZ')

  //   //     // if (res.data.location.country === 'UZ') {
  //   //     //   i18n.changeLanguage("uz");
  //   //     //   localStorage.setItem('lang', 'uz');
  //   //     // } else {
  //   //     //   i18n.changeLanguage("eng");
  //   //     //   localStorage.setItem('lang', 'eng');
  //   //     // }
  //   //   }

  //   // }


  //   // const firebaseConfig = {
  //   //   apiKey: "AIzaSyCZDZ2qG5oM6o60vgQh5bVPnuGQ5XpZ_cw",
  //   //   authDomain: "mimsoftio.firebaseapp.com",
  //   //   projectId: "mimsoftio",
  //   //   storageBucket: "mimsoftio.appspot.com",
  //   //   messagingSenderId: "728300835525",
  //   //   appId: "1:728300835525:web:663f20a8a4117b0df816ac",
  //   //   measurementId: "G-8QQWF9TBC7"
  //   // };

  //   // const app = initializeApp(firebaseConfig);
  //   // const analytics = getAnalytics(app);

  //   getData();
  // }, []);

  return (
    <>
      <Head>

        <script type="application/ld+json">
          {`
            "@context": "https://schema.org",
            "@type": "Organization",
            "url": "https://mimsoft.io",
           "logo": "https://mimsoft.io/images/logo.png"
        `}
        </script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  )
}

export default MyApp
