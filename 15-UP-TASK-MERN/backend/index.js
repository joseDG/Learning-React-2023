import express from "express";
import conectarDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";


import usuarioRoutes from './routes/usuarioRoutes.js'
import proyectoRoutes from "./routes/proyectoRoutes.js"
import tareasRoutes from "./routes/tareaRoutes.js"

const app = express();
//procesa la informacion tipo json
app.use(express.json());

dotenv.config();
conectarDB();

//Configurar CORS
//se agrega el dominio del frontend
const whitelist = [process.env.FRONTEND_URL];

const corsOptions = {
  origin: function (origin, callback){
    if( whitelist.includes(origin)){
      //puede consultar API
      callback(null, true)
    }else{
      //No esta permitido
      callback(new Error("Error de Cors"));
    }
  }
}

app.use(cors(corsOptions))

//Routing
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/proyectos", proyectoRoutes);
app.use("/api/tareas", tareasRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// Socket.io
import { Server } from "socket.io";

const io = new Server(servidor, {
  pingTimeout: 60000,
  cors: {
    origin: process.env.FRONTEND_URL,
  },
});

io.on("connection", (socket) => {
  // console.log("Conectado a socket.io");

  // Definir los eventos de socket io
  socket.on("abrir proyecto", (proyecto) => {
    socket.join(proyecto);
  });

  socket.on("nueva tarea", (tarea) => {
    const proyecto = tarea.proyecto;
    socket.to(proyecto).emit("tarea agregada", tarea);
  });

  socket.on("eliminar tarea", (tarea) => {
    const proyecto = tarea.proyecto;
    socket.to(proyecto).emit("tarea eliminada", tarea);
  });

  socket.on("actualizar tarea", (tarea) => {
    const proyecto = tarea.proyecto._id;
    socket.to(proyecto).emit("tarea actualizada", tarea);
  });

  socket.on("cambiar estado", (tarea) => {
    const proyecto = tarea.proyecto._id;
    socket.to(proyecto).emit("nuevo estado", tarea);
  });
});
