import {Router} from 'express';
import { getPortfolio } from '../controllers/portfolioController';

const router = Router();
router.get('/portfolio', getPortfolio);

export default router;