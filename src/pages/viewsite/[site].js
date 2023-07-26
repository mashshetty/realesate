import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { db } from "@/firebase-config";
import { doc, getDoc } from "firebase/firestore";
import Styles from "../../components/slug.module.css";

const DynamicPage = ({ data }) => {
  const [selSite, setSite] = useState(data);

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
      <div className={Styles.priceandsqft}>
        <div className={Styles.price}>Price : <strong> {selSite.price}</strong> </div>
        <div className={Styles.area}>Plot : <strong> {selSite.sqft} sqft</strong> </div>
      </div>
      {selSite.description && (
        <div>
          <p className={Styles.desc}>{selSite.description}</p>
        </div>
      )}
      <div>
        <p className={Styles.contact}>Contact Details : {selSite.contact}</p>
      </div>
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
