import express from "express"
import cors from "cors" 
import env from 'dotenv'
import dbConn from "./config/db.js"
import userRouter from "./routes/userRouter.js";

env.config();

const app = express();
app.use(cors());
app.use(express.json())

dbConn.connect((error)=>{
    if(error){
        console.log('Database connection failed', error);
        return;
    }
    console.log('Database connected successfully');
});

// Routes
app.use('/api/users', userRouter);


const port = process.env.PORT || 5000;
app.listen(port,(error)=>{
    if(error) return error;
    console.log(`Server running on port ${port}`);
});