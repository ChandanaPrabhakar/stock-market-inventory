import express from 'express';
import {config} from 'dotenv';
import routes from './routes/portfolioRoutes';

config();
const app = express();

app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})
