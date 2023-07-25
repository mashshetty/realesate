import React, { useEffect, useState } from 'react'
import { db } from '@/firebase-config'
import {collection, getDocs} from "firebase/firestore"
import Styles from "./sites.module.css"

function Sites() {
    const posts = collection(db,"sites")
    const [sites,setSites]=useState([])

    useEffect(()=>{
        const fn =async()=>{
            const data = await getDocs(posts)
            setSites(data.docs.map((doc)=>({...doc.data()})))
        }

        fn()
    },[])
    console.log("data is ",sites)
  return (
  <div>
    <h1 className={Styles.heading}>search results {sites.length} | site for sale in karkala</h1>
    {
      sites.map((site,index)=>{
        return(
        <div className={Styles.sitescontainer} key={index}>
          <div className={Styles.leftsite}>
            <img className={Styles.img} src="https://res.cloudinary.com/ddq3nzfq8/image/upload/v1690282269/property_vmds1r.png" alt="image" />
          </div>
          <div className={Styles.rightsite}>
            <div><h3>price {site.price}</h3></div>
            <div>Site for sale in {site.area}, {site.thaluk}, {site.state}</div>
            <div>Plot Area : {site.sqft} sqft</div>
          
          </div>

        </div>
        )
      })
    }
  </div>
  )
}

export default Sites