import { Request, Response } from "express";
import { getCachedPortfolio, portfolioService } from "../services/getPortfolioService";
import { holdings } from "../models/portfolioModel";

export const getPortfolio = async(req: Request, res: Response) => {
    try{
        const portfolio = await getCachedPortfolio;
        res.status(200).json({portfolio});
    } catch(error){
        console.error("Error fetching data", error);
        res.status(500).json({message: 'Internal server error'});
    }
}