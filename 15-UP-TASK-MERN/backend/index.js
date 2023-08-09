import express from "express";
import conectarDB from "./config/db.js";
import dotenv from "dotenv";

import usuarioRoutes from './routes/usuarioRoutes.js'
import proyectoRoutes from "./routes/proyectoRoutes.js"

const app = express();
//procesa la informacion tipo json
app.use(express.json());

dotenv.config();
conectarDB();

//Routing
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/proyectos", proyectoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});