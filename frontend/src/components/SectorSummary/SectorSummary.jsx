import React from 'react';
import './SectorSummary.css';

const SectorSummary = ({ summaryData }) => {
  if (!summaryData || summaryData.length === 0) {
    return <p className="no-data-message">No sector summary data available.</p>;
  }

  return (
    <div className="sector-container">
      <h2 className="sector-title">Sector Summary</h2>
      <div className="cards-wrapper">
        {summaryData.map((item, index) => (
          <div
            key={index}
            className={`card card-color-${(index % 6) + 1}`}
          >
            <h3 className="card-title">{item.sector}</h3>
            <p className="card-text">Total Investment: ₹{item.totalInvestment.toLocaleString()}</p>
            <p className="card-text">Present Value: ₹{item.totalPresentValue.toLocaleString()}</p>
            <p
              className={`card-gain-loss ${
                item.totalGainLoss >= 0 ? 'gain' : 'loss'
              }`}
            >
              Gain/Loss: ₹{item.totalGainLoss.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectorSummary;