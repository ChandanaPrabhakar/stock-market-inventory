import React from 'react';
import './MyHoldings.css';

const MyHoldings = ({ portfolioData }) => {
  const sectorMap = {
    'Financial': 0,
    'Tech': 1,
    'Consumer': 2,
    'Power': 3,
    'Pipe': 4,
    'Others': 5
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Particulars</th>
          <th>Purchase Price</th>
          <th>Quantity</th>
          <th>NSE / BSE</th>
          <th>CMP</th>
          <th>Investment</th>
          <th>Present Value</th>
          <th>Gain / Loss</th>
          <th>Portfolio %</th>
        </tr>
      </thead>
      <tbody>
        {portfolioData?.map((stock, index) => (
          <tr key={index} className={`sector-${sectorMap[stock.sector] || 5}`}>
            <td>{stock.particulars}</td>
            <td>{stock.purchasePrice.toLocaleString()}</td>
            <td>{stock.quantity}</td>
            <td>{stock.nseBse}</td>
            <td>{stock.cmp.toLocaleString()}</td>
            <td>{stock.investment.toLocaleString()}</td>
            <td>{stock.presentValue.toLocaleString()}</td>
            <td className={stock.gainLoss >= 0 ? 'gain' : 'loss'}>{stock.gainLoss.toLocaleString()}</td>
            <td>{stock.portfolioPercentage}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MyHoldings;