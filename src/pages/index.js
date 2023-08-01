import Head from "next/head";
import { Inter } from "next/font/google";
import HomePage from "@/components/home-page";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import getData from "@/components/getDoc";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  const [mob, setMob] = useState(true);
  // useEffect(() => {
  //   const findDevice = () => {
  //     const userAgent =
  //       window.navigator === "undefined" ? "" : navigator.userAgent;
  //     const mobile = Boolean(
  //       userAgent.match(
  //         /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  //       )
  //     );

  //     if (mobile) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   };

  //   findDevice();
  //   setMob(findDevice());
  //   localStorage.setItem("isMobile", findDevice());
  // }, []);

  return (
    <>
      <Head>
        <title>find site for sale in karkala, udupi and mangalore at unbeatable price </title>
        <meta
          name="google-site-verification"
          content="GH11khUZvxYUlyWl-B2R9DhgACjCTdf5UgB8_BIYIJ0"
        />
        {/* <meta name="description" content="land for sale in udupi and karkala" /> */}
        <meta
          name="description"
          content="Find the top land, plot, house and site for sale in Karkala, Udupi, and Mangalore. Get your dream property at fair price"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/ddq3nzfq8/image/upload/v1690821983/Buy-Propertyx_gnhvxy.png"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.maincontainer}>
         <HomePage sites={data} />
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const data = await getData();
  return { props: { data: data } };
}
