import React, { useEffect, useState } from "react";
import { db } from "@/firebase-config";
import { doc, getDoc } from "firebase/firestore";
import Styles from "../../components/slug.module.css";
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ShareIcon from '@mui/icons-material/Share';

const DynamicPage = ({ data }) => {

  const [selSite, setSite] = useState(data);

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

  useEffect(() => {
    setSite(data);
  }, [data]);
  return (
    <div className={Styles.container}>
      <div>
        <p className={Styles.nav}>
          {" "}
          Home / {selSite.destrict ? selSite.destrict : selSite.thaluk} / Site
          for sale{" "}
        </p>
      </div>
     
      <div>
        <h2 className={Styles.heading}>
          Residential site / land for sale in {selSite.area}{" "}
          {selSite.area && ","} {selSite.thaluk} {selSite.thaluk && ","}{" "}
          {selSite.destrict} {selSite.destrict && ","} {selSite.state}{" "}
        </h2>
      </div>
      <h3 className={Styles.propertyinfox}>Property Pictures</h3>
      <div>
        {selSite.pic1 && (
          <img className={Styles.siteimg} src={selSite.pic1} alt="image1" />
        )}
        {selSite.pic2 && (
          <img className={Styles.siteimg} src={selSite.pic2} alt="image1" />
        )}
        {selSite.pic3 && (
          <img className={Styles.siteimg} src={selSite.pic3} alt="image1" />
        )}
        {selSite.pic4 && (
          <img className={Styles.siteimg} src={selSite.pic4} alt="image1" />
        )}
        {selSite.pic5 && (
          <img className={Styles.siteimg} src={selSite.pic5} alt="image1" />
        )}
        {selSite.pic6 && (
          <img className={Styles.siteimg} src={selSite.pic6} alt="image1" />
        )}
      </div>
      <h3 className={Styles.propertyinfo}>Property Information</h3>
      {selSite.description && (
        <div>
          <p className={Styles.desc}>{selSite.description}</p>
        </div>
      )}
      <div className={Styles.priceandsqft}>
        <div className={Styles.price}> <strong> {selSite.price}</strong> <span className={Styles.ps}>Price</span> </div>
        <div className={Styles.area}> <strong> {selSite.sqft} sq.ft</strong> <span className={Styles.ps}>Size</span>  </div>
      </div>
      
      <h3 className={Styles.propertyinfo}>Reach Us</h3>
      <div className={Styles.contactholder}>
       <div  className={Styles.contactbox}><a  href={`tel:${selSite.contact}`}> <span className={Styles.contact}>Call <AddIcCallIcon className={Styles.callicn} fontSize="small"/> </span> </a></div> 
       <div className={Styles.contactboxx} ><a  href="https://wa.me/+919741104490"> <span className={Styles.contactx}>whatsapp <WhatsAppIcon className={Styles.callicnx} fontSize="small"/> </span> </a></div> 
      </div>
      <span className={Styles.share} onClick={handleShare} ><ShareIcon/> </span>

    </div>
  );
};

export default DynamicPage;

export async function getServerSideProps(context) {
  const documentRef = doc(db, "sites", context.query.site);
  const documentSnapshot = await getDoc(documentRef);
  const data = { ...documentSnapshot.data() };
  return { props: { data: data } };
}
