import { Request, Response } from "express";
import { getCachedPortfolio, sectorSummaryService } from "../services/getPortfolioService";

export const getPortfolio = async(req: Request, res: Response) => {
    try{
        const portfolio = await getCachedPortfolio;
        res.status(200).json({portfolio});
    } catch(error){
        console.error("Error fetching data", error);
        res.status(500).json({message: 'Internal server error'});
    }
}

export const getSectorSummary = async(req: Request, res: Response) => {
    try{
        const summary = await sectorSummaryService();
        res.status(200).json({summary});
    } catch(error){
        console.error("Error fetching data", error);
        res.status(500).json({message: 'Internal server error'});
    }
}