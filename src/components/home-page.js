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
        Karkala, Udupi, or Mangalore. Our real estate website provides a
        hand-picked selection of property that are catered to your interests and
        requirements. Examine a variety of selection of offerings, from opulent
        estates to tranquil country site or property, all expertly curated by our agent.
        Join us as we help you begin your search for the ideal residence in
        these charming coastal villages. Your ideal property is here, just for you!
        </div>
      </div>
    </>
  );
}

export default HomePage;
