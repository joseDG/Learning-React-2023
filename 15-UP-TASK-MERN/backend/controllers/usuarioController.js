import Usuario from "../models/Usuario.js";

const registrar = async (req, res) => {
  //Evitar registros duplicados
  const { email } = req.body;
  const existeUsuario = await Usuario.findOne({ email })

  if(existeUsuario){
    const error = new Error("Usuarios ya registrado");
    return res.status(400).json({ msg: error.message });
  }

  try{

    const usuario = new Usuario(req.body);
    const usuarioAlmacenado = await usuario.save();
    res.json(usuarioAlmacenado);
  }catch(error){
    console.log(error)
  }

  res.json({msg: "Creando Usuario" });
};




export { registrar }