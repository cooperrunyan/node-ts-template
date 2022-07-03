import express from 'express';
import { tempRoute } from './routes/temp-route/route';

export const app = express();

app.use(express.json());
app.get('/ping', async (req, res) => res.status(200).send('pong'));
app.use(tempRoute);
