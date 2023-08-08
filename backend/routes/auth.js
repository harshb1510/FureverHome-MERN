const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require ("bcryptjs");
const jwt = require("jsonwebtoken");
var fetchuser = require("../middleware/fetchuser");


const JWT_SECRET = "ThisIsVeryStrongPass!@#";







// create user

router.post(
  "/createuser",
  [
    body("name").isLength({ min: 3 }),
    body("email").isEmail(),
    body("password").isLength({ min: 6 }),
    
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password,salt) 
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
    });
    const data = {
        user:{
            id:user._id
        }
    }
    const authtoken = jwt.sign(data,JWT_SECRET);

   return res.json({success:true , authtoken:authtoken });
   if(success) {
   return res.redirect('http://localhost:3000/login');
   }
   else{
   return res.redirect('http://localhost:3000/signup');
   }
} catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
}
  }
);




// login user

router.post('/login', [ 
    body('email', 'Enter a valid email').isEmail(), 
    body('password', 'Password cannot be blank').exists(), 
  ], async (req, res) => {
  
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const {email, password} = req.body;
    try {
      let user = await User.findOne({email});
      if(!user){
        return res.status(400).json({error: "Please try to login with correct credentials"});
      }
  
      const passwordCompare = await bcrypt.compare(password, user.password);
      if(!passwordCompare){
        return res.status(400).json({error: "Please try to login with correct credentials"});
      }
  
      const data = {
        user:{
          id: user.id,
        }
      }
      const name = {
        user:{
          name: user.name,
        }
      }

      const authtoken = jwt.sign(data, JWT_SECRET);
      return res.json({success:true , authtoken:authtoken , name:user.name});
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  })



  // get login user details

  router.post('/getuser', fetchuser,  async (req, res) => {

    try {
      let userId = req.user.id;
      const user = await User.findById(userId).select("-password")
      res.send(user)
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
})



module.exports = router;
