import React, { useState } from "react";
import Styles from "./sites.module.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Link from "next/link";
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Sites(props) {
  const [sites, setSites] = useState(props.sites);
  const handleShare = async () => {
    try {
      if (navigator.share) {
        // Use the Web Share API if available
        await navigator.share({
          title: "Website Title",
          text: "Check out this awesome website!",
          url: window.location.href,
        });
      } else {
        // Fallback for browsers that do not support the Web Share API
        // You can implement your custom sharing functionality here
        alert("Sharing is not supported in this browser.");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <div className={Styles.topcontainer}>
      <p className={Styles.nav}>Home / Udupi / karkala / Site for sale</p>
      <h1 className={Styles.heading}>
        search results {sites?.length} | Land for sale in karkala, udupi
      </h1>
      <div className={Styles.searchbox}>
        <input
          placeholder="search here"
          className={Styles.search}
          type="search"
        />{" "}
        <input className={Styles.searchbtn} type="button" value="search" />
      </div>

      {sites?.map((site, index) => {
        return (
          <div key={index}>
           
              {" "}
              <div className={Styles.mainsitecontainer}>
              <Link href={`/viewsite/${site.id}`}>
                <div className={Styles.sitescontainer}>
                  <div className={Styles.leftsite}>
                    <img
                      className={Styles.img}
                      src={
                        site.pic1
                          ? site.pic1
                          : "https://res.cloudinary.com/ddq3nzfq8/image/upload/v1690282269/property_vmds1r.png"
                      }
                      alt="image"
                    />
                  </div>
                  <div className={Styles.rightsite}>
                    <div>
                      <h3 className={Styles.price}>
                        {" "}
                        <span className={Styles.pricebox}>
                          <CurrencyRupeeIcon
                            fontSize="small"
                            className={Styles.priceicn}
                          />{" "}
                          {site.price}
                        </span>{" "}
                      </h3>
                    </div>
                    <div>
                      {" "}
                      <span className={Styles.residential}>
                        Residential Plot / Land
                      </span>{" "}
                      for sale in {site.area}, {site.thaluk}, {site.state}
                    </div>
                    <div>
                      Plot Area : <strong> {site.sqft} </strong> sqft
                    </div>
                  </div>
                </div>
              {site.description &&  <p className={Styles.sitedesc}> {site.description}</p>}
                </Link>
                <div className={Styles.contactholder}>
       <div  className={Styles.contactbox}><a  href={`tel:${site.contact}`}> <span className={Styles.contact}>Call <AddIcCallIcon className={Styles.callicn} fontSize="small"/> </span> </a></div> 
       <div className={Styles.contactboxx} ><a  href="https://wa.me/+919741104490"> <span className={Styles.contactx}>whatsapp <WhatsAppIcon className={Styles.callicnx} fontSize="small"/> </span> </a></div> 
      </div>
      <div>
        <button onClick={handleShare} type="button">share</button>
      </div>
              </div>
           
          </div>
        );
      })}
    </div>
  );
}

export default Sites;
