import React, { useState } from "react";
import Styles from "./sites.module.css";
import getData from "./getDoc"

function Sites(props) {
  const [sites, setSites] = useState(props.sites);
  
  return (
    <div>
      <p className={Styles.nav}>Home / Udupi / karkala / Site for sale</p>
      <h1 className={Styles.heading}>
        search results {sites?.length} | Land for sale in karkala, udupi
      </h1>
      {sites?.map((site, index) => {
        return (
          <div key={index} className={Styles.mainsitecontainer}>
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
                <h3>price {site.price}</h3>
              </div>
              <div>
                {" "}
                <span className={Styles.residential}>
                  Residential Plot / Land
                </span>{" "}
                for sale in {site.area}, {site.thaluk}, {site.state}
              </div>
              <div>Plot Area : {site.sqft} sqft</div>
            </div>
          </div>
        <p>  {site.description}</p>
        <p>Contact : {site.contact}</p>
          </div>
        );
      })}
    </div>
  );
}



export default Sites;


