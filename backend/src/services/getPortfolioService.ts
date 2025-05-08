import yahooFinance from "yahoo-finance2"
import {PortfolioReport, StockHolding, SectorSummary } from "../models/portfolioModel"

let cachedPortfolio: PortfolioReport[] = [];
export const getCachedPortfolio = () => cachedPortfolio;

export const portfolioService = async (holdings: StockHolding[]): Promise<PortfolioReport[]> => {
    const stockData = await Promise.all(
        holdings.map(async (holding) => {
            const isNumeric: boolean = /^\d+$/.test(holding.nseBse);
            const symbol: string = `${holding.nseBse}.${isNumeric ? "BO" : "NS"}`;

            try {
                const quote = await yahooFinance.quote(symbol);
                const cmp: number = quote.regularMarketPrice ?? 0;

                const investment: number = holding.purchasePrice * holding.quantity;
                const presentValue: number = cmp * holding.quantity;
                const gainLoss: number = presentValue - investment;

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
    
    const totalPresentValue: number = stockData.reduce((sum, stock) => sum + stock.presentValue, 0);

    cachedPortfolio = stockData.map((stock) => ({
        ...stock,
        portfolioPercentage : totalPresentValue > 0 ? Math.round((stock.presentValue / totalPresentValue) * 100 * 100) / 100 : 0,

    }));

    return cachedPortfolio;
}

export const sectorSummaryService = async (): Promise<SectorSummary[]> => {
    const portfolio = getCachedPortfolio();

    const summaryMap: { [sector: string]: SectorSummary } = {};

    portfolio.forEach(stock => {
        const sector = stock.sector;
        if (!summaryMap[sector]) {
            summaryMap[sector] = {
                sector,
                totalInvestment: 0,
                totalPresentValue: 0,
                totalGainLoss: 0,
            };
        }

        summaryMap[sector].totalInvestment += stock.purchasePrice * stock.quantity;
        summaryMap[sector].totalPresentValue += stock.presentValue;
        summaryMap[sector].totalGainLoss += stock.gainLoss;
    });

    return Object.values(summaryMap).map(data => ({
        sector: data.sector,
        totalInvestment: Math.round(data.totalInvestment * 100) / 100,
        totalPresentValue: Math.round(data.totalPresentValue * 100) / 100,
        totalGainLoss: Math.round(data.totalGainLoss * 100) / 100,
    }));
}
