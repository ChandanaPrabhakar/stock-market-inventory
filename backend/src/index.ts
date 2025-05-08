import express from 'express';
import {config} from 'dotenv';
import { portfolioService } from './services/getPortfolioService';
import routes from './routes/portfolioRoutes';
import { holdings } from './models/portfolioModel';

config();
const app = express();

app.use(express.json());

portfolioService(holdings);
setInterval(() => portfolioService(holdings), 15000);

app.use('/api', routes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})
