
import { db } from "@/firebase-config";
import { collection, getDocs } from "firebase/firestore";

export default async function getData() {
    const posts = collection(db, "sites");
    const data = await getDocs(posts); 
    const sites =[]
    data.docs.map((doc) => {(sites.push({ ...doc.data(),id:doc.id }))})
  return sites
}








