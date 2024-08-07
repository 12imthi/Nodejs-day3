import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/config.js"
import router from "./Routers/empRouter.js"

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json())

connectDB()

const PORT = 4000 || process.env.PORT;

app.use('/api',router)

app.get('/',(req,res)=> {
    res.status(200).send('app is wwwrwwunning')
})

app.listen(PORT,()=> {
    console.log(`app is running ${PORT}`);
})