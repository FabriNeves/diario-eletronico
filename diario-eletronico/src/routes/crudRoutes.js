import express from "express";
import crudController from "../controllers/crudController.js";


const router = express.Router();

           
router.post("/URI",crudController.create);         //C
router.get("/URI",crudController.read);            //R
router.put("/URI/:id",crudController.update);      //U
router.delete("/URI/:id",crudController.delete);   //D
router.get("/URI/:id",crudController.readById);    //RbI


export default router;

//  => index.js 
