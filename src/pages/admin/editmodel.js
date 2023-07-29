import React, { useState } from "react";
import { db } from "@/firebase-config";
import { collection,doc, addDoc, updateDoc } from "firebase/firestore";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Styles from "./admin.module.css"
import Sites from "@/components/Sites";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "95vw",
  height:"90vh",
  overflow:"scroll",
  bgcolor: 'background.paper',
  border: '2px solid white',
  boxShadow: 24,
 
 
};

function BasicModal(props) {
  console.log("site is",props.site)
  const posts = collection(db, "sites");
  const [open, setOpen] = React.useState(props.open);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {setOpen(false); props.setopen(!props.open)}
  const [site, addSite] = useState({
    area: props.site?.area?props.site.area:"",
    contact: props.site?.contact?props.site?.contact:"",
    description: props.site?.description?props.site.description:"",
    district: props.site?.district?props.site.district:"",
    pic1: props.site?.pic1?props.site.pic1:"",
    pic2: props.site?.pic2?props.site.pic2:"",
    pic3: props.site?.pic3?props.site.pic3:"",
    pic4:props.site?.pic4?props.site.pic4:"",
    pic5:props.site?.pic5?props.site.pic5:"",
    pic6: props.site?.pic6?props.site.pic6:"",
    pic7:props.site?.pic7?props.site?.pic7:"",
    price: props.site?.price?props.site.price:"",
    sqft: props.site?.sqft?props.site.sqft:"",
    state: props.site?.state?props.site?.state:"",
    thaluk: props.site?.thaluk?props.site?.thaluk:"",
    id:props.site?.id?props.site?.id:""
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



  const edit = async () => {
    let val =false;
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
      val=true;
    }

    if (val) {
      console.log("dta is",site.id,site)
      console.log("site is ",site)
      const userDoc = doc(db, "sites", site.id);
      const newFields = site;
      await updateDoc(userDoc, newFields);
      addSite({
        area: "",
        contact: "",
        description: "",
        district: "",
        pic1: "",
        pic2: "",
        pic3: "",
        pic4: "",
        id:props.site.id,
        pic5: "",
        pic6: "",
        pic7: "",
        price: "",
        sqft: "",
        state: "",
        thaluk: "",
        
      });
      
      window.location.href=window.location.href;
      alert("site updated successfully !!")
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
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
            onClick={(e) => edit()}
            variant="contained"
            className={Styles.btn}
          >
            Update
          </Button>
        </div>
      </div>
    </div>
    </Box>
      </Modal>
    </div>
  );
}

export default BasicModal;
