var express = require('express');
var router = express.Router();
const userModel=require('./users');
const passport=require('passport');//imp
/* GET home page. */
const localStatergy=require('passport-local');
passport.use(new localStatergy(userModel.authenticate()));




router.get('/', function(req, res, next) {
  res.render("index");
  // req.session.koj="hwllo ";
});

router.get('/profile',isLoggedIn,function(req,res){
  res.send("welcome to profile");
})

// router.get('/create_task',isLoggedIn,function(req,res){
// var task= 

// });


router.post('/register',function(req,res){
  var userdata = new userModel({
    username:req.body.username,
    secret:req.body.secret
  });

userModel.register(userdata,req.body.password)
.then(function(registereduser){
  passport.authenicate("local")(req,res,function(){
    res.redirect('/profile');
})
})

});

router.post("/login ",passport.authenticate("local",{
  successRedirect:"/profile",
  failureRedirect:"/"
}),function(req,res){})

router.get('/logout',function(req,res,next){
  req.logout(function(err){
    if(err ) return next(err);
    res.redirect('/')
  });
});

function isLoggedIn(req,res,next){
  if(req.isAunthenicated()){
    return next();
 }
 res.redirect("/"); 
}

router.get('/delete',async function(req, res, next) {
  let deleteuser=await userModel.findOneAndDelete({username:"ubed"});
  res.send(deleteuser);
});

router.get('/allusers',async function(req, res, next) {
 let allusers=await userModel.findOne({username:"ubed"});
 res.send(allusers);
});
module.exports = router;
