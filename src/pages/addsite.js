import React, { useState } from "react";
import { db } from "@/firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import Button from "@mui/material/Button";
import Styles from "./addsite.module.css";

function AddSite() {
  const posts = collection(db, "sites");
  const [site, addSite] = useState({
    area: "",
    contact: "",
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

  const [siteErr, setSiteErr] = useState({
    area: false,
    contact: false,
    district: false,
    pic1: false,
    pic2: false,
    price: false,
    sqft: false,
    state: false,
    thaluk: false,
  });

  const [validated, setValidated] = useState(false);

  const add = async () => {
    const err = {};
    if (!site.area) {
      err.area = true;
    }

    if (!site.thaluk) {
      err.thaluk = true;
    }

    if (!site.state) {
      err.state = true;
    }

    if (!site.district) {
      err.district = true;
    }

    if (!site.price) {
      err.price = true;
    }

    if (!site.contact) {
      err.contact = true;
    }

    if (!site.sqft) {
      err.sqft = true;
    }

    if (!site.pic1) {
      err.pic1 = true;
    }

    if (!site.pic2) {
      err.pic2 = true;
    }

    setSiteErr(err);

    if(!err.area && !err.thaluk && !err.district && !err.state && !err.price && !err.sqft && !err.pic1 && !err.pic2){
      setValidated(true)
    }

    if (validated) {
      await addDoc(posts, site);
      addSite({
        area: "",
        contact: "",
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
      console.log("site is ",site)
      window.location.href=window.location.href;
      alert("site uploaded successfully !!")
    }
  };

  const onDataChange = (e) => {
    addSite({ ...site, [e.target.name]: e.target.value });
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
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.inputmain}>
        <div className={Styles.addsite}>
          {" "}
          <span>Add Site</span>
        </div>
        <div className={Styles.inputboxcontainer}>
          <div>
            <div className={Styles.label}> Enter Area*</div>
            <input
              className={Styles.input}
              type="text"
              label="Area"
              name="area"
              value={site.area}
              onChange={(e) => onDataChange(e)}
              required
            />
            {siteErr.area && <div className={Styles.errormsg}>Area is required</div>}
          </div>

          <div>
            <div className={Styles.label}> Enter Thaluk*</div>
            <input
              className={Styles.input}
              type="text"
              name="thaluk"
              onChange={(e) => onDataChange(e)}
              required
              label="Thaluk"
              value={site.thaluk}
            />
            {siteErr.thaluk && (
              <div className={Styles.errormsg}>Thaluk is required!!</div>
            )}
          </div>
        </div>
        <div className={Styles.inputboxcontainer}>
          <div>
            {" "}
            <div className={Styles.label}> Enter State*</div>
            <input
              className={Styles.input}
              type="text"
              name="state"
              onChange={(e) => onDataChange(e)}
              required
              value={site.state}
              label="State"
            />
            {siteErr.state && (
              <div className={Styles.errormsg}>state is required</div>
            )}
          </div>

          <div>
            <div className={Styles.label}> Enter district*</div>
            <input
              className={Styles.input}
              type="text"
              name="district"
              value={site.district}
              onChange={(e) => onDataChange(e)}
              required
              label="SqFt"
            />
            {siteErr.district && (
              <div className={Styles.errormsg}>Destrict is required</div>
            )}
          </div>
        </div>{" "}
        <div className={Styles.inputboxcontainer}>
          <div>
            <div className={Styles.label}> Enter Price*</div>
            <input
              className={Styles.input}
              type="text"
              name="price"
              value={site.price}
              onChange={(e) => onDataChange(e)}
              required
              label="price"
            />
            {siteErr.price && (
              <div className={Styles.errormsg}>Price is required</div>
            )}
          </div>

          <div>
            <div className={Styles.label}> Enter Contact No*</div>
            <input
              className={Styles.input}
              type="text"
              name="contact"
              value={site.contact}
              onChange={(e) => onDataChange(e)}
              required
              label="Contact No"
            />
            {siteErr.contact && (
              <div className={Styles.errormsg}>Contact is required</div>
            )}
          </div>
        </div>
        <div className={Styles.inputboxcontainer}>
          <div>
            <div className={Styles.label}> Enter Sqft*</div>
            <input
              className={Styles.input}
              type="text"
              name="sqft"
              value={site.sqft}
              onChange={(e) => onDataChange(e)}
              required
              label="SqFt"
            />
            {siteErr.sqft && (
              <div className={Styles.errormsg}>SqFt is required</div>
            )}
          </div>
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
        <div className={Styles.addpicture}>
          {" "}
          <span>Add Pictures</span>
        </div>
        <div className={Styles.inputboxcontainer}>
          <div>
            <div className={Styles.labelx}> Image 1*</div>
            <input name="pic1" onChange={(e) => onFileChange(e)} type="file" />
            {siteErr.pic1 && (
              <div className={Styles.errormsgx}>Picure is required</div>
            )}
          </div>
          <div>
            <div className={Styles.labelx}> Image 2*</div>
            <input name="pic2" onChange={(e) => onFileChange(e)} type="file" />
            {siteErr.pic2 && (
              <div className={Styles.errormsgx}>Picture is required</div>
            )}
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
            type="submit"
            onClick={(e) => add()}
            variant="contained"
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
