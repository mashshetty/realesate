import React, { useEffect, useState } from "react";
import { db } from "@/firebase-config";
import { doc, getDoc } from "firebase/firestore";
import Head from "next/head";
import Styles from "../../components/slug.module.css";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ShareIcon from "@mui/icons-material/Share";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import getData from "@/components/getDoc";
import Link from "next/link";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Stylesite from "../../components/sites.module.css";

const DynamicPage = ({ data, sites }) => {
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
        <div>
          <p className={Styles.nav}>
            Home / {selSite.destrict ? selSite.destrict : selSite.thaluk} / Site
            for sale
          </p>
        </div>
        <div className={Styles.goback}><Link href="/">  <ArrowBackIcon className={Styles.gobackicn}/>  Go to home</Link> </div>

        <div>
          <h2 className={Styles.heading}>
            Residential site / land for sale in {selSite.area}
            {selSite.area && ","} {selSite.thaluk} {selSite.thaluk && ","}
            {selSite.destrict} {selSite.destrict && ","} {selSite.state},
            covering {selSite.sqft} of area at an unbeatable price of {selSite.price}
          </h2>
        </div>
        {selSite.description && (
          <div>
            <h2 className={Styles.desc}>{selSite.description}</h2>
          </div>
        )}
        <h3 className={Styles.propertyinfox}>Property Pictures</h3>
        <div className={Styles.siteimagesx}>
          {selSite.pic1 && (
            <img
              className={Styles.siteimg}
              src={selSite.pic1}
              alt="land/site for sale in karkala,udupi img"
            />
          )}
          {selSite.pic2 && (
            <img
              className={Styles.siteimg}
              src={selSite.pic2}
              alt="land/site for sale in karkala,udupi img"
            />
          )}
          {selSite.pic3 && (
            <img
              className={Styles.siteimg}
              src={selSite.pic3}
              alt="land/site for sale in karkala,udupi img"
            />
          )}
          {selSite.pic4 && (
            <img
              className={Styles.siteimg}
              src={selSite.pic4}
              alt="land/site for sale in karkala,udupi img"
            />
          )}
          {selSite.pic5 && (
            <img
              className={Styles.siteimg}
              src={selSite.pic5}
              alt="land/site for sale in karkala,udupi img"
            />
          )}
          {selSite.pic6 && (
            <img
              className={Styles.siteimg}
              src={selSite.pic6}
              alt="land/site for sale in karkala,udupi img"
            />
          )}
        </div>
        <h3 className={Styles.propertyinfo}>Property Information</h3>
        
        <div className={Styles.priceandsqft}>
          <div className={Styles.price}>
            {" "}
            <strong> {selSite.price}</strong>{" "}
            <span className={Styles.ps}>Price</span>{" "}
          </div>
          <div className={Styles.area}>
            {" "}
            <strong> {selSite.sqft}</strong>{" "}
            <span className={Styles.ps}>Size</span>{" "}
          </div>
        </div>

        <h3 className={Styles.propertyinfo}>Reach Us</h3>
        <div className={Styles.contactholder}>
          <div className={Styles.contactbox}>
            <a href={`tel:${selSite.contact}`}>
              {" "}
              <span className={Styles.contact}>
                Call{" "}
                <AddIcCallIcon className={Styles.callicn} fontSize="small" />{" "}
              </span>{" "}
            </a>
          </div>
          <div className={Styles.contactboxx}>
            <a href="https://wa.me/+919741104490">
              {" "}
              <span className={Styles.contactx}>
                whatsapp{" "}
                <WhatsAppIcon className={Styles.callicnx} fontSize="small" />{" "}
              </span>{" "}
            </a>
          </div>
        </div>
        <span className={Styles.share} onClick={handleShare}>
          <ShareIcon />{" "}
        </span>
      </div>
      <h3 className={Styles.propertyinfoxx}>
        Take a quick look at other available sites / land for sale.
      </h3>
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
                  <a href="https://wa.me/+919741104490">
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

export default DynamicPage;

export async function getServerSideProps(context) {
  const documentRef = doc(db, "sites", context.query.site);
  const documentSnapshot = await getDoc(documentRef);
  const data = { ...documentSnapshot.data() };
  const sites = await getData();
  return { props: { data: data, sites: sites } };
}
