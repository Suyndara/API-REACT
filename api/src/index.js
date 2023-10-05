import 'dotenv/config';
import cors from 'cors';
import express from 'express';


import FuncController from './Controller/FuncController.js'



const servidor = express();
servidor.use(express.json());
servidor.use(cors());


servidor.use(FuncController)


servidor.listen(process.env.PORT, () => console.log('API Subiu'));