import  express  from "express";
import { createEmployee } from "../Controllers/empController.js";

const router = express.Router();



router.post('/create',createEmployee) ;
router.get('/create',createEmployee) ;


export  default router;