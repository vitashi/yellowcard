import express from 'express';
import cors from "cors";
import sequelize from "./db"
import { helloWorld } from './helloworld/views';

const app: express.Application = express();
app.use(cors());
app.use(express.json());

const port: number = 4000;

// sequelize.sync({alter: true})

app.get('/helloworld', helloWorld)


export default app