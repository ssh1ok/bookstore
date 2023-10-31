const mongoose = require('mongoose');
const url = process.env.URL

// const 
async function connect(){
    console.log(url);
    try{
        await mongoose.connect(process.env.URL);
        console.log("connected to mongoDB");
    }catch(error){
        console.error(error);
    }
}

module.exports = connect;