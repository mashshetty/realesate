import React, { useEffect, useState } from "react";
import { db } from "@/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import Styles from "./sites.module.css";

export default async function getData() {
    const posts = collection(db, "sites");
    const data = await getDocs(posts); 
    const sites =[]
    data.docs.map((doc) => (sites.push({ ...doc.data() })))
  return sites
}








