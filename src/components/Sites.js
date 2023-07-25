import React, { useEffect, useState } from 'react'
import { db } from '@/firebase-config'
import {collection, getDocs} from "firebase/firestore"

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
    <h1>Site for sale in karkala</h1>
    {
      sites.map((site,index)=>{
        return(
        <div key={index}>
          <div>
            <img src={site.pic1} alt="image" />
          </div>
          <div>
            <div>Site for sale in {site.area}</div>
            <div> state {site.destrict} thaluk {site.thaluk}</div>
            <div>sqft {site.sqft}</div>
            <div>price {site.price}</div>
          </div>

        </div>
        )
      })
    }
  </div>
  )
}

export default Sites