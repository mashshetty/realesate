import React, { useState } from "react";
import Styles from "./sites.module.css";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Link from "next/link";

function Sites(props) {
  const [sites, setSites] = useState(props.sites);
  
  return (
    <div className={Styles.topcontainer}>
      <p className={Styles.nav}>Home / Udupi / karkala / Site for sale</p>
      <h1 className={Styles.heading}>
        search results {sites?.length} | Land for sale in karkala, udupi
      </h1>
      <div className={Styles.searchbox}>
        <input placeholder="search here"  className={Styles.search} type="search" /> <input className={Styles.searchbtn} type="button" value="search" />
      </div>

      {sites?.map((site, index) => {
        return (
        <Link href={`/viewsite/${site.id}`} key={index}>  <div  className={Styles.mainsitecontainer}>
            <div className={Styles.sitescontainer} >
            <div className={Styles.leftsite}>
              <img
                className={Styles.img}
                src={site.pic1?site.pic1: "https://res.cloudinary.com/ddq3nzfq8/image/upload/v1690282269/property_vmds1r.png"}
                alt="image"
              />
            </div>
            <div className={Styles.rightsite}>
              <div>
                <h3 className={Styles.price}> <span className={Styles.pricebox}><CurrencyRupeeIcon fontSize="small" className={Styles.priceicn}/> {site.price}</span> </h3>
              </div>
              <div>
                {" "}
                <span className={Styles.residential}>
                  Residential Plot / Land
                </span>{" "}
                for sale in {site.area}, {site.thaluk}, {site.state}
              </div>
              <div>Plot Area : <strong> {site.sqft} </strong> sqft</div>
            </div>
          </div>
        <p>  {site.description}</p>
        <p>Contact : {site.contact}</p>
          </div></Link>
        );
      })}
    </div>
  );
}



export default Sites;


