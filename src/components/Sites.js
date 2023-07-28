import React, { useState } from "react";
import Styles from "./sites.module.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Link from "next/link";
import Head from "next/head";
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ShareIcon from '@mui/icons-material/Share';

function Sites(props) {
  const [sites, setSites] = useState(props.sites);
  const [search,setSearch]=useState("")

  
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



  const handleSearch =async(e)=>{
    
    setSearch(e)
    if(e==""){
      setSites(props.sites)
      return
    }

    let temp = []; 

    if(sites.length != 0){
      temp=sites; 
    }else{
      temp=props.sites
    }
      
    const fData = temp.filter((item,index)=>{
      if(item?.area?.includes(e) || item?.thaluk?.includes(e) || item?.district?.includes(e) || item?.state?.includes(e) || item?.price?.includes(e) || item?.sqft?.includes(e)){
        return item;
      }
    })
    setSites(fData)
  }

  return (
    <div className={Styles.topcontainer}>
      <Head>
        <title>Buy land, site, or house in Karakala, Udupi & Mangalore</title>
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content="Find the incomparable pricing on the land, site, house, or property of your dreams. We save you money by locating the ideal house. Check out the amazing bargains right away."/>
      </Head>
      <p className={Styles.nav}>Home / Udupi / karkala / Site for sale</p>
      <h1 className={Styles.heading}>
        search results {sites?.length} | Land for sale in karkala, udupi
      </h1>
      <div className={Styles.searchbox}>
        <input
        value={search} onChange={e=>handleSearch(e.target.value)} 
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
                  <span className={Styles.share} onClick={handleShare} ><ShareIcon/> </span>
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
      
              </div>
           
          </div>
        );
      })}
    </div>
  );
}

export default Sites;
