const express = require("express");
const route = express.Router();
const multer = require("multer");
const adminCtl = require("../controller/adminCtl");

const Storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null , "uploads/")
    },
    filename:(req,file,cb)=>{
        cb(null, file.fieldname + "-" + Date.now());
    }
});

const upload = multer({storage:Storage}).single("image");

route.get("/",adminCtl.frist);

route.get("/addData" , adminCtl.Add);

route.post("/addData" ,upload, adminCtl.add);

route.get("/deleteData" , adminCtl.delete);

route.get("/editData" , adminCtl.edit);

route.post("/updateData" ,upload, adminCtl.update);

module.exports = route;