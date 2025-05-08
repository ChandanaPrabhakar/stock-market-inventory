import {Router} from 'express';
import { getPortfolio, getSectorSummary } from '../controllers/portfolioController';

const router = Router();
router.get('/portfolio', getPortfolio);
router.get('/sectorsummary', getSectorSummary);

export default router;