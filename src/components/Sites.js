import React, { useState } from "react";
import Styles from "./sites.module.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Link from "next/link";
import Head from "next/head";
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ShareIcon from '@mui/icons-material/Share';
import moment from 'moment';


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
      
    const fData = await props.sites.filter((item,index)=>{
      if(item?.area.toLowerCase()?.includes(e.toLowerCase()) || item?.thaluk.toLowerCase()?.includes(e.toLowerCase()) || item?.district.toLowerCase()?.includes(e.toLowerCase()) || item?.state.toLowerCase()?.includes(e.toLowerCase()) || item?.price.toLowerCase()?.includes(e.toLowerCase()) || item?.sqft.toLowerCase()?.includes(e.toLowerCase())){
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
       Find {sites?.length} + Land / House / Site for sale in Karkala, Udupi and Mangalore at unbeatable price !!.
      </h1>

      <h3 className={Styles.details}>Welcome to our premier real estate website, where your dream property awaits in the charming towns of Karkala,<Link href="/property-for-sale-in-udupi"> Udupi</Link>, and <Link href="/property-for-sale-in-mangalore"> Mangalore</Link> for sale. </h3>

      <div className={Styles.searchbox}>
        <input
        value={search} onChange={e=>handleSearch(e.target.value)} 
          placeholder="search here"
          className={Styles.search}
          type="search"
        />{" "}
        <input className={Styles.searchbtn} type="button" value="search" />
      </div>
      {sites.length == 0 && <div className={Styles.notfound}> <p >No sites found!!</p></div>}

      {sites?.map((site, index) => {
        let dateString = site.date?site.date:'Tue Jul 18 2023'
        const months = {
          Jan: '01',
          Feb: '02',
          Mar: '03',
          Apr: '04',
          May: '05',
          Jun: '06',
          Jul: '07',
          Aug: '08',
          Sep: '09',
          Oct: '10',
          Nov: '11',
          Dec: '12',
        };
        const formattedDate = `${dateString.slice(-4)}-${months[dateString.slice(4, 7)]}-${dateString.slice(8, 10)}`;
        const momentDate = moment(formattedDate, 'YYYY-MM-DD');
        const agoText = momentDate.fromNow();
        let count = 0;
       
          if(site.pic1){
            count++
          }
          if(site.pic2){
            count++
          }
          if(site.pic3){
            count++
          }
          if(site.pic4){
            count++
          }
          if(site.pic5){
            count++
          }
          if(site.pic6){
            count++
          }
     
        return (
          <div key={index}>
           
              {" "}
              <div className={Styles.mainsitecontainer}>
              <Link href={`/site-for-sale-in-karkala-udupi/${site.id}`}>
                <div className={Styles.sitescontainer}>
                  <div className={Styles.leftsite}>
                   
                    <div className={Styles.picholder}>
                    <span className={Styles.imagetag}>1/{count}</span>
                  <p className={Styles.agotext}>posted {agoText}</p>
                    <img
                      className={Styles.img}
                      src={
                        site.pic1
                          ? site.pic1
                          : "https://res.cloudinary.com/ddq3nzfq8/image/upload/v1690282269/property_vmds1r.png"
                      }
                      alt="land/site for sale in karkala,udupi img"
                    />
                    </div>
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
                      Plot Area : <strong> {site.sqft} </strong>
                      
                    </div>



                  </div>
                </div>
                {site.description &&  <p className={Styles.sitedesc}> {site.description}</p>}
                
                </Link>
                
                <div className={Styles.contactholder}>
       <div  className={Styles.contactbox}><a  href={`tel:${site.contact}`}> <span className={Styles.contact}>Call <AddIcCallIcon className={Styles.callicn} fontSize="small"/> </span> </a></div> 
       <div className={Styles.contactboxx} ><a  href="https://wa.me/+919611457603"> <span className={Styles.contactx}>whatsapp <WhatsAppIcon className={Styles.callicnx} fontSize="small"/> </span> </a></div> 
      </div>
      
              </div>
           
          </div>
        );
      })}
    </div>
  );
}

export default Sites;
