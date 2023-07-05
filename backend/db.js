const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL);


const Datas=mongoose.model('Datas',{
    prompt:String,
    Response:String

})

module.exports={
    Datas
}