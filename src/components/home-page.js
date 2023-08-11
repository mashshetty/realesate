import React from "react";
import Sites from "./Sites";
import Styles from "./sites.module.css"
import Link from "next/link";

function HomePage(props) {
  return (
    <>
      <Sites sites={props.sites} />
      <div className={Styles.about}>
        <h3 className={Styles.abouthead}> <Link href="/about-us">About Us</Link> </h3>
        <div className={Styles.abouttext}>
        Find your ideal land, home, or building for sale in the charming towns of
        Karkala, <Link href="/property-for-sale-in-udupi">Udupi</Link>, or <Link href="/property-for-sale-in-mangalore">Mangalore</Link>. Our real estate website provides a
        hand-picked selection of property that are catered to your interests and
        requirements.
        </div>
      </div>
    </>
  );
}

export default HomePage;
