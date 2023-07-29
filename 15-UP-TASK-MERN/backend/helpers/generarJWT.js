import jwt  from "jsonwebtoken";


const generarJWT = (id) => {
  //el id se va mostrar el id de el usuario
  return jwt.sign({ id }, "" + process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export default generarJWT;