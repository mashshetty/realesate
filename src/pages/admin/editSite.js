import React, { useState } from "react";
import Styles from "./admin.module.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Head from "next/head";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import getData from "@/components/getDoc";
import {deleteDoc,doc } from "firebase/firestore";
import { db } from "@/firebase-config";
import BasicModal from "./editmodel";
function Sites(props) {
  const [sites, setSites] = useState(props.sites);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [eSite,editSite]=useState("")

  const deleteUser = async (id) => {
    const userDoc = doc(db, "sites", id);
    await deleteDoc(userDoc);
    setSearch("")
    const deldata = sites.filter((item)=>{
        if(item.id != id){
            return item;
        }
    })

    setSites(deldata)
  };

  const handleSearch = async (e) => {
    setSearch(e);
    if (e == "") {
      setSites(props.sites);
      return;
    }

    const fData = await props.sites.filter((item, index) => {
      if (
        item?.area.toLowerCase()?.includes(e.toLowerCase()) ||
        item?.thaluk.toLowerCase()?.includes(e.toLowerCase()) ||
        item?.district.toLowerCase()?.includes(e.toLowerCase()) ||
        item?.state.toLowerCase()?.includes(e.toLowerCase()) ||
        item?.price.toLowerCase()?.includes(e.toLowerCase()) ||
        item?.sqft.toLowerCase()?.includes(e.toLowerCase())
      ) {
        return item;
      }
    });
    setSites(fData);
  };

 
  return (
    <div className={Styles.topcontainer}>
      <Head>
        <title>Buy land, site, or house in Karakala, Udupi & Mangalore</title>
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Find the incomparable pricing on the land, site, house, or property of your dreams. We save you money by locating the ideal house. Check out the amazing bargains right away."
        />
      </Head>
      <p className={Styles.nav}>Home / Udupi / karkala / Site for sale</p>
      <h1 className={Styles.heading}>
        search results {sites?.length} | Land for sale in karkala, udupi
      </h1>
      <div className={Styles.searchbox}>
        <input
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
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
            
                <div className={Styles.sitescontainer}>
                  <div className={Styles.leftsite}>
                    <img
                      className={Styles.img}
                      src={
                        site?.pic1
                          ? site?.pic1
                          : "https://res.cloudinary.com/ddq3nzfq8/image/upload/v1690282269/property_vmds1r.png"
                      }
                      alt="image"
                    />
                  </div>
                  <div className={Styles.rightsite}>
                    <span onClick={e=>{setOpen(!open);editSite(sites[index])}}  className={Styles.edit}>
                      <EditIcon />{" "}
                    </span>
                    <span onClick={e=>deleteUser(site?.id)} className={Styles.share}>
                      <DeleteIcon />{" "}
                    </span>
                    <div>
                      <h3 className={Styles.price}>
                        {" "}
                        <span className={Styles.pricebox}>
                          <CurrencyRupeeIcon
                            fontSize="small"
                            className={Styles.priceicn}
                          />{" "}
                          {site?.price}
                        </span>{" "}
                      </h3>
                    </div>
                    <div>
                      {" "}
                      <span className={Styles.residential}>
                        Residential Plot / Land
                      </span>{" "}
                      for sale in {site?.area}, {site?.thaluk}, {site?.state}
                    </div>
                    <div>
                      Plot Area : <strong> {site?.sqft} </strong> sqft
                    </div>
                  </div>
                </div>
                {site?.description && (
                  <p className={Styles.sitedesc}> {site?.description}</p>
                )}
            </div>
          </div>
        );
      })}
      {open && <BasicModal site={eSite} open={open} setopen={setOpen}/>}
    
    </div>
  );
}

export default Sites;
export async function getServerSideProps() {
  const data = await getData();
  return { props: { sites: data } };
}
