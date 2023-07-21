import React, { useEffect } from 'react'
import { db } from '@/firebase-config'
import {collection, getDocs} from "firebase/firestore"

function Sites() {
    const posts = collection(db,"sites")

    useEffect(()=>{
        const fn =async()=>{
            const data = await getDocs(posts)
            console.log("data is ",data.docs[0]._document.data.value.mapValue.fields)
        }

        fn()
    },[])
  return (
    <div>Sites</div>
  )
}

export default Sites