import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import HomePage from "@/components/home-page";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="land for sale in udupi and karkala" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div >
          <HomePage />
        </div>
      </main>
    </>
  );
}
