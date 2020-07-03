const usersCtrl = {};

const passport = require('passport');




const User = require('../models/users');

usersCtrl.renderlogin = (req, res) =>{
    res.render('users/login');
}

usersCtrl.register=async (req, res) =>{
    const errors = [];
   const {username, password, confirm_password} = req.body;
   if(password != confirm_password){
      errors.push({text: 'Las contraseñas no coinciden'});
   }

   if(errors.length>0){
       res.render('users/register',{
           errors,
           username,
           password,
           confirm_password
       })
   }else{
   const username =  await User.findOne({username: username});
   if(username){
       req.flash('error_msg', 'Este usuario ya esta registrado en nuestra base de datos.');
       res.redirect('/register');
   }else{
       const newUser = new User({name, email, password});
       newUser.password = await newUser.encryptPassword(password)
       await newUser.save();
       req.flash('success_msg', 'Registrado Correctamente');
       res.redirect('/login');
   }
   }
}


usersCtrl.renderRegister = (req, res) =>{
    res.render('users/register');
}


usersCtrl.postlogin = passport.authenticate('local',{
    failureRedirect: '/login',
    successRedirect: '/index',
    failureFlash: true
})


usersCtrl.logout = (req, res) =>{
    req.logout();
    req.flash('success_msg', 'Cierre de sesion correcto.');
    res.redirect('signin');
}



module.exports = usersCtrl;