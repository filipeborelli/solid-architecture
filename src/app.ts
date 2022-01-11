import express from 'express';
import { router } from './router';
import * as dotenv from 'dotenv';
const app = express();
dotenv.config();
app.use(express.json())
app.use(router)

export { app };