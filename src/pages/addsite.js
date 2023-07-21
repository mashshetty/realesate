import React, { useState } from "react";
import { db } from "@/firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { FormLabel } from "@mui/material";
import Styles from "./addsite.module.css";

function AddSite() {
  const posts = collection(db, "sites");
  const [site, addSite] = useState({
    area: "",
    contact: 0,
    description: "",
    district: "",
    pic1: "",
    pic2: "",
    pic3: "",
    pic4: "",
    pic5: "",
    pic6: "",
    pic7: "",
    price: "",
    sqft: "",
    state: "",
    thaluk: "",
  });

  const add = async () => {
    await addDoc(posts, site);
    addSite({
      area: "",
      contact: 0,
      description: "",
      district: "",
      pic1: "",
      pic2: "",
      pic3: "",
      pic4: "",
      pic5: "",
      pic6: "",
      pic7: "",
      price: "",
      sqft: "",
      state: "",
      thaluk: "",
    })
  };

  const onDataChange = (e) => {
    addSite({ ...site, [e.target.name]: e.target.value });
    console.log(e.target, site);
  };

  const onFileChange = (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "demoapp");
    data.append("cloud_name", "ddq3nzfq8");

    fetch("https://api.cloudinary.com/v1_1/ddq3nzfq8/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        addSite({ ...site, [e.target.name]: data.url });
        console.log("url is", data.url);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={Styles.container}>
        <div className={Styles.inputmain}>
        <div className={Styles.addsite}> <span >Add Site</span></div> 
          <div className={Styles.inputboxcontainer}>
             <div>
             <div className={Styles.label}> Enter Area</div>
            <input
              className={Styles.input}
              type="text"
              label="Area"
              name="area"
              value={site.area}
              onChange={(e) => onDataChange(e)}
              required
            />
             </div>

            <div>
            <div className={Styles.label}> Enter Thaluk</div>
            <input
              className={Styles.input}
              type="text"
              name="thaluk"
              onChange={(e) => onDataChange(e)}
              required
              label="Thaluk"
              value={site.thaluk}
            />
            </div>
          </div>
          <div className={Styles.inputboxcontainer}>
         <div> <div className={Styles.label}> Enter State</div>
            <input
              className={Styles.input}
              type="text"
              name="state"
              onChange={(e) => onDataChange(e)}
              required
              value={site.state}
              label="State"
            /></div>

            <div>
             <div className={Styles.label}> Enter Sqft</div>
            <input
              className={Styles.input}
              type="text"
              name="sqft"
              value={site.sqft}
              onChange={(e) => onDataChange(e)}
              required
              label="SqFt"
            />
            </div>
          </div>{" "}
          <div className={Styles.inputboxcontainer}>
            <div>
            <div className={Styles.label}> Enter Price</div>
            <input
              className={Styles.input}
              type="text"
              name="price"
              value={site.price}
              onChange={(e) => onDataChange(e)}
              required
              label="price"
            />
            </div>

            <div>
            <div className={Styles.label}> Enter Contact No</div>
            <input
              className={Styles.input}
              type="text"
              name="contact"
              value={site.contact}
              onChange={(e) => onDataChange(e)}
              required
              label="Contact No"
            />
            </div>
          </div>
          <div className={Styles.singleinp}>
            <div>
            <div className={Styles.label}> Enter Description</div>
            <textarea
              className={Styles.input}
              onChange={(e) => onDataChange(e)}
              name="description"
              id=""
              cols="30"
              value={site.description}
              rows="3"
            ></textarea>
            </div>
          </div>{" "}
          <div className={Styles.addpicture}> <span >Add Pictures</span></div> 
          <div className={Styles.inputboxcontainer}>
          <div>
          <div className={Styles.label}> Image 1</div>
            <input name="pic1" onChange={(e) => onFileChange(e)} type="file" />
          </div>
          <div>
          <div className={Styles.label}> Image 2</div>
            <input name="pic2" onChange={(e) => onFileChange(e)} type="file" />
          </div>
          </div>
          <div className={Styles.inputboxcontainer}>
          <div>
          <div className={Styles.label}> Image 3</div>
            <input name="pic3" onChange={(e) => onFileChange(e)} type="file" />
          </div>
          <div>
          <div className={Styles.label}> Image 4</div>
            <input name="pic4" onChange={(e) => onFileChange(e)} type="file" />
          </div>
          </div>
          <div className={Styles.inputboxcontainer}>
          <div>
          <div className={Styles.label}> Image 5</div>
            <input name="pic5" onChange={(e) => onFileChange(e)} type="file" />
          </div>
          <div>
          <div className={Styles.label}> Image 6</div>
            <input name="pic6" onChange={(e) => onFileChange(e)} type="file" />
          </div>
          </div>
          <div className={Styles.singleinp}>
          <Button
            onClick={(e) => add()}
            variant="contained"
            endIcon={<SendIcon />}
            className={Styles.btn}
          >
            Add
          </Button>
          </div>
        </div>
      </div>

  );
}

export default AddSite;
