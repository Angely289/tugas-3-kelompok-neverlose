import express from 'express';
import cors from 'cors';
import PetRoute from './routes/PetRoute.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(PetRoute);


app.listen(8080, () => console.log('Server running on port 8080'));