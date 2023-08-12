import express from "express";
import conectarDB from "./config/db.js";
import dotenv from "dotenv";

import usuarioRoutes from './routes/usuarioRoutes.js'
import proyectoRoutes from "./routes/proyectoRoutes.js"
import tareasRoutes from "./routes/tareaRoutes.js"

const app = express();
//procesa la informacion tipo json
app.use(express.json());

dotenv.config();
conectarDB();

//Routing
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/proyectos", proyectoRoutes);
app.use("/api/tareas", tareasRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});