import express from "express"
import nodemailer from "nodemailer"
import cors from "cors" 

const app = express();
app.use(cors());
app.use(express.json())

const transproter = nodemailer.createTransport({
    host:"smtp.hostinger.com",
    port:465,
    secure:true,
    auth:{
        user:"dev@tapabrata.me",
        pass:"tapa8637@A"
    }
});


app.get("/",(req,resp)=>{
    return resp.json({
        message:"Golden is silence"
    })
});

app.post('/mail-send',(req,resp)=>{
    const {firstName, lastName, mail, number, message} = req.body;

    const mailoptions = {
        from:'dev@tapabrata.me',
        to:'dev@tapabrata.me',
        subject: 'Sending Email using Node.js',
        text: `Name: ${firstName} ${lastName}
        Email: ${mail}
        Contact No: ${number}
        Message: ${message}`
    }
    
    transproter.sendMail(mailoptions, (error, info)=>{
        if(error) return error;
        return resp.json({
            status:true,
            response:info,
            message:"Message send sucessfully."
        })
    });
    
});

app.listen(3000,(error)=>{
    if(error) return error;
    console.log(`Server running on port 3000`)
});