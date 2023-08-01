import React from 'react'
import Styles from "./addsite.module.css"
import Link from "next/link";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



function Aboutus() {
  return (
       <div className={Styles.about}>
        <h3 className={Styles.abouthead}>About Us</h3>
        <div className={Styles.goback}><Link href="/">  <ArrowBackIcon className={Styles.gobackicn}/>  Go to home</Link> </div>

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
  )
}

export default Aboutus