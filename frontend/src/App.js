import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import MyHoldings from './components/MyHoldings/MyHoldingsTable';
import SectorSummary from './components/SectorSummary/SectorSummary';
import PieChart from './components/PieChart/PieChart';

// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

// export default App;

function App() {
  const [data, setData] = useState({ portfolio: [] });
  const [summaryData, setSummaryData] = useState({summary: []});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [portfolioRes, summaryRes] = await Promise.all([
          axios.get('http://localhost:8080/api/portfolio'),
          axios.get('http://localhost:8080/api/sectorsummary')
        ]);
  
        setData(portfolioRes.data);
        setSummaryData(summaryRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div className="p-6 font-sans">
      <h1 className="text-xl font-bold mb-4 ">Investments Portfolio Dashboard</h1>
      <PortfolioSummary portfolioData={data?.portfolio}/>
      <SectorSummary summaryData = {summaryData?.summary} />
      <PieChart summaryData={summaryData?.summary}/>
      <MyHoldings portfolioData={data?.portfolio}/> 
    </div>
  );
}

export default App;

