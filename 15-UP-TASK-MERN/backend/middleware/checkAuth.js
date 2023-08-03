import jwt from 'jsonwebtoken'


//next -> permite continuar con el otro middleware
const checkAuth = (req, res, next) => {

  let token;

  // if (
  //   //  req.headers.authorization && 
  //   //  req.headers.authorization.startsWith("Bearer")
  // ){
  //   try {

  //     // token = req.headers.authorization.split(" ")[1];

  //     // const decoded = jwt.verify(token, process.env.JWT_SECRET)

  //     // console.log(decoded)
      
  //   } catch (error) {
      
  //   }
  // } 
  next();
}

export default checkAuth;