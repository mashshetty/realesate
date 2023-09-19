import React, { useEffect, useState } from "react";
import Head from "next/head";
import Styles from "../components/slug.module.css";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ShareIcon from "@mui/icons-material/Share";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import getData from "@/components/getDoc";
import Link from "next/link";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Stylesite from "../components/sites.module.css";

const Mangalore = ({ data, sites }) => {
  const [selSite, setSite] = useState(data);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Website Title",
          text: "Check out this awesome site!",
          url: window.location.href,
        });
      } else {
        alert("Sharing is not supported in this browser.");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  useEffect(() => {
    setSite(data);
  }, [data]);
  return (
    <div className={Styles.topmaincontainer}>
      <div className={Styles.container}>
        <Head>
          <title>view site for sale in karkala, udupi and mangalore</title>
          <meta
            name="description"
            content={`Residential site / land for sale in ${selSite.area}${
              selSite.area && ","
            } ${selSite.thaluk} ${selSite.thaluk && ","}${selSite.district} ${
              selSite.district && ","
            } ${selSite.state}`}
          />
        </Head>
       
        <div className={Styles.goback}><Link href="/">  <ArrowBackIcon className={Styles.gobackicn}/>  Go to home</Link> </div>

        <div>
          <h2 className={Styles.headingx}>
          Explore flexible land options for sale in Udupi, offering the potential for both residential and agricultural use. These plots present a harmonious blend of natural aesthetics and versatility, whether you're envisioning land development or building your dream residence. Take the opportunity to make your mark in Udupi's landscape – secure your plot today and bring your vision to life.
          </h2>
        </div>
   
        
     

  
        
      </div>
    
      {sites?.map((site, index) => {
        return (
          <div key={index}>
            {" "}
            <div className={Stylesite.mainsitecontainer}>
              <Link href={`/site-for-sale-in-karkala-udupi/${site.id}`}>
                <div className={Stylesite.sitescontainer}>
                  <div className={Stylesite.leftsite}>
                    <img
                      className={Stylesite.img}
                      src={
                        site.pic1
                          ? site.pic1
                          : "https://res.cloudinary.com/ddq3nzfq8/image/upload/v1690282269/property_vmds1r.png"
                      }
                      alt="image"
                    />
                  </div>
                  <div className={Stylesite.rightsite}>
                    <span className={Stylesite.share} onClick={handleShare}>
                      <ShareIcon />{" "}
                    </span>
                    <div>
                      <h3 className={Stylesite.price}>
                        {" "}
                        <span className={Stylesite.pricebox}>
                          <CurrencyRupeeIcon
                            fontSize="small"
                            className={Stylesite.priceicn}
                          />{" "}
                          {site.price}
                        </span>{" "}
                      </h3>
                    </div>
                    <div>
                      {" "}
                      <span className={Stylesite.residential}>
                        Residential Plot / Land
                      </span>{" "}
                      for sale in {site.area}, {site.thaluk}, {site.state}
                    </div>
                    <div>
                      Plot Area : <strong> {site.sqft} </strong> sqft
                    </div>
                  </div>
                </div>
                {site.description && (
                  <p className={Stylesite.sitedesc}> {site.description}</p>
                )}
              </Link>
              <div className={Stylesite.contactholder}>
                <div className={Stylesite.contactbox}>
                  <a href={`tel:${site.contact}`}>
                    {" "}
                    <span className={Stylesite.contact}>
                      Call{" "}
                      <AddIcCallIcon
                        className={Stylesite.callicn}
                        fontSize="small"
                      />{" "}
                    </span>{" "}
                  </a>
                </div>
                <div className={Stylesite.contactboxx}>
                  <a href="https://wa.me/+919611457603">
                    {" "}
                    <span className={Stylesite.contactx}>
                      whatsapp{" "}
                      <WhatsAppIcon
                        className={Stylesite.callicnx}
                        fontSize="small"
                      />{" "}
                    </span>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Mangalore;

export async function getServerSideProps(context) {

  const data = {  };
  const sites = await getData();
  return { props: { data: data, sites: sites } };
}
