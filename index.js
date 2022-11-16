import express from 'express';
import cors from 'cors';
import PetRoute from './routes/PetRoute.js';
import ProductRoute from './routes/ProductRoute.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(PetRoute);
app.use(ProductRoute);


app.listen(8080, () => console.log('Server running on port 8080'));