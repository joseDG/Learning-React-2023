import express from "express";
import conectarDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
conectarDB();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});