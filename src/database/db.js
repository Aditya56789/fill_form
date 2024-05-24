const mongoose=require("mongoose");
const MONODBB_URI="mongodb+srv://a24619838:aditya123@cluster0.cfkzlb4.mongodb.net/";
const connectToDB =async()=>{
    try {
        
        await mongoose.connect(MONODBB_URI,)
    
        console.log("DB Connected");
       // return output;
    } catch (error) {
        console.log(error);
    }
};

connectToDB();