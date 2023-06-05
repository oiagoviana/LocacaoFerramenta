import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import adminController from './controller/adminController.js'

const server = express();
server.use(cors());
server.use(express.json());


server.use(adminController);
server.use("/storage/imagensProduto", express.static("storage/imagensProduto"))



server.listen(process.env.PORT, () => console.log(`API Conectada na Porta ${process.env.PORT}`));