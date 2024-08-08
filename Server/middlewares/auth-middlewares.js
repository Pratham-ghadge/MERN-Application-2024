 import jwt from "jsonwebtoken"
 import User from '../Model/user-model.js';
 const authmiddlewares =async (req,res,next) => {
 const token = req.header('Authorization');
 

 if(!token){
    return res 
    .status(401)
    .json({message:"Unauthorized HTTP , token not provided"})
 }
 
 const jwtToken = token.replace("Bearer","").trim();
 console.log(jwtToken)
try {
   const isVerified =jwt.verify(jwtToken,process.env.JWT_SECRET_KEY);
   console.log(isVerified)
   const userData = await User.findOne({email: isVerified.email}).
   select({
      password:0,
   });

   console.log(userData);

   req.user=userData;
   req.token = token;
   req.userID = userData._id;
   next();
} catch (error) {
   return res.status(401).json({message:"Unauthhorized. Invalid Token."})
   
}
 
}

export default authmiddlewares
