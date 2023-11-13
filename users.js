const mongoose=require('mongoose');
const pla=require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/dolist");

const create=mongoose.Schema({
  userid:Number,
  title:String,
  description:String

});

const userSchema=mongoose.Schema({
  username:String,
  password:String,
 secret:String
});

userSchema.plugin(pla);
// mongoose.model("naam",schema);
module.exports=mongoose.model("user",userSchema);
// module.exports=monygoose.model("add",create);
// mongoose.connection.on('connected', function () {  
//   console.log('Mongoose default connection open to ' + 'mongodb://127.0.0.1:27017/sms-dev');
// }); 

// // If the connection throws an error
// mongoose.connection.on('error',function (err) {  
//   console.log('Mongoose default connection error: ' + err);
// }); 
// mongoose.connection.on('disconnected', function () {  
//   console.log('Mongoose default connection disconnected'); 
// });


