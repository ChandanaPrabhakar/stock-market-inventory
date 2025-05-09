import React from 'react';
import './PortfolioSummary.css';

const PortfolioSummary = ({ portfolioData }) => {
  const totalInvested = portfolioData?.reduce((sum, stock) => sum + stock.investment, 0) || 0;
  const numberOfInvestments = portfolioData?.length || 0;

  return (
    <div className="summary-stats">
      <div className="stat">
        <span className="stat-label">Total Invested Amount</span>
        <span className="stat-value">₹{totalInvested.toLocaleString()}</span>
      </div>
      <div className="stat">
        <span className="stat-label">Number of Investments</span>
        <span className="stat-value">{numberOfInvestments}</span>
      </div>
    </div>
  );
};

export default PortfolioSummary;