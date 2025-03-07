import '../app/globals.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <Head>
                {/* Link to Google Fonts */}
                <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap" rel="stylesheet" />
            </Head>
            <Component {...pageProps} /> {/* Renders the current page */}
        </>
    );
}

export default MyApp;
