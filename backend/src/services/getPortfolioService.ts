import yahooFinance from "yahoo-finance2"
import {PortfolioReport, StockHolding } from "../models/portfolioModel"

export const portfolioService = async (holdings: StockHolding[]): Promise<PortfolioReport[]> => {
    const stockData = await Promise.all(
        holdings.map(async (holding) => {
            const isNumeric = /^\d+$/.test(holding.nseBse);
            const symbol = `${holding.nseBse}.${isNumeric ? "BO" : "NS"}`;

            try {
                const quote = await yahooFinance.quote(symbol);
                const cmp = quote.regularMarketPrice ?? 0;

                const investment = holding.purchasePrice * holding.quantity;
                const presentValue = cmp * holding.quantity;
                const gainLoss = presentValue - investment;

                return {
                    particulars: holding.particulars,
                    sector: holding.sector,
                    purchasePrice: holding.purchasePrice,
                    quantity: holding.quantity,
                    nseBse: holding.nseBse,
                    cmp,
                    investment,
                    presentValue,
                    gainLoss,
                };

            } catch (error) {
                console.error(`Failed to fetch CMP for ${symbol}`, error);
                return {
                    particulars: holding.particulars,
                    sector: holding.sector,
                    purchasePrice: holding.purchasePrice,
                    quantity: holding.quantity,
                    nseBse: holding.nseBse,
                    cmp: 0,
                    investment: 0,
                    presentValue: 0,
                    gainLoss: 0,
                };
            }
        })
    )
    
    const totalPresentValue = stockData.reduce((sum, stock) => sum + stock.presentValue, 0);

    const updatedPortfolio = stockData.map((stock) => ({
        ...stock,
        portfolioPercentage : totalPresentValue > 0 ? Math.round((stock.presentValue / totalPresentValue) * 100 * 100) / 100 : 0,

    }));

    return updatedPortfolio;
}