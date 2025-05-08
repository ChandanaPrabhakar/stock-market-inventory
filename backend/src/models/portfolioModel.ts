export interface StockHolding {
    particulars: string;
    sector: string;
    purchasePrice: number;
    quantity: number;
    nseBse: string;
}

export interface PortfolioReport extends StockHolding {
    investment: number;
    portfolioPercentage: number;
    cmp: number;
    presentValue: number;
    gainLoss: number;
}

export interface SectorSummary {
    sector: string;
    totalInvestment: number;
    totalPresentValue: number;
    totalGainLoss: number;
}


export const holdings: StockHolding[] = [
    // Financial Sector
    { particulars: "HDFC Bank", sector: "Financial", purchasePrice: 1490, quantity: 50, nseBse: "HDFCBANK" },
    { particulars: "Bajaj Finance", sector: "Financial", purchasePrice: 6466, quantity: 15, nseBse: "BAJFINANCE" },
    { particulars: "ICICI Bank", sector: "Financial", purchasePrice: 780, quantity: 84, nseBse: "ICICIBANK" },
    { particulars: "Bajaj Housing", sector: "Financial", purchasePrice: 130, quantity: 504, nseBse: "BAJAJHFL" },
    { particulars: "Savani Financials", sector: "Financial", purchasePrice: 24, quantity: 1080, nseBse: "511577" },
    // Tech Sector
    { particulars: "Affle India", sector: "Tech", purchasePrice: 1151, quantity: 50, nseBse: "AFFLE" },
    { particulars: "LTI Mindtree", sector: "Tech", purchasePrice: 4775, quantity: 16, nseBse: "LTIM" },
    { particulars: "KPIT Tech", sector: "Tech", purchasePrice: 672, quantity: 61, nseBse: "KPITTECH" },
    { particulars: "Tata Tech", sector: "Tech", purchasePrice: 1072, quantity: 63, nseBse: "TATATECH" },
    { particulars: "BLS E-Services", sector: "Tech", purchasePrice: 232, quantity: 191, nseBse: "BLSE" },
    { particulars: "Tanla", sector: "Tech", purchasePrice: 1134, quantity: 45, nseBse: "TANLA" },

    // Consumer Sector
    { particulars: "Dmart", sector: "Consumer", purchasePrice: 3777, quantity: 27, nseBse: "DMART" },
    { particulars: "Tata Consumer", sector: "Consumer", purchasePrice: 845, quantity: 90, nseBse: "TATACONSUM" },
    { particulars: "Pidilite", sector: "Consumer", purchasePrice: 2376, quantity: 36, nseBse: "PIDILITIND" },

    // Power Sector
    { particulars: "Tata Power", sector: "Power", purchasePrice: 224, quantity: 225, nseBse: "TATAPOWER" },
    { particulars: "KPI Green", sector: "Power", purchasePrice: 875, quantity: 50, nseBse: "KPIGREEN" },
    { particulars: "Suzlon", sector: "Power", purchasePrice: 44, quantity: 450, nseBse: "SUZLON" },
    { particulars: "Gensol", sector: "Power", purchasePrice: 998, quantity: 45, nseBse: "GENSOL" },

    // Pipe Sector
    { particulars: "Hariom Pipes", sector: "Pipe", purchasePrice: 580, quantity: 60, nseBse: "HARIOMPIPE" },
    { particulars: "Astral", sector: "Pipe", purchasePrice: 1517, quantity: 56, nseBse: "ASTRAL" },
    { particulars: "Polycab", sector: "Pipe", purchasePrice: 2818, quantity: 28, nseBse: "POLYCAB" },

    // Others Sector
    { particulars: "Clean Science", sector: "Others", purchasePrice: 1610, quantity: 32, nseBse: "CLEAN" },
    { particulars: "Deepak Nitrite", sector: "Others", purchasePrice: 2248, quantity: 27, nseBse: "DEEPAKNTR" },
    { particulars: "Fine Organic", sector: "Others", purchasePrice: 4284, quantity: 16, nseBse: "FINEORG" },
    { particulars: "Gravita", sector: "Others", purchasePrice: 2037, quantity: 8, nseBse: "GRAVITA" },
    { particulars: "SBI Life", sector: "Others", purchasePrice: 1197, quantity: 49, nseBse: "SBILIFE" },
];