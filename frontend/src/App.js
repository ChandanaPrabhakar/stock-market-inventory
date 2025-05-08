import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import MyHoldings from './components/MyHoldings/MyHoldingsTable';

// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

// export default App;

function App() {
  const [data, setData] = useState({ portfolio: [] });

  useEffect(() => {
    axios.get('http://localhost:8080/api/portfolio')
      .then(response => {
        console.log('Response from backend:', response.data);
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="p-6 font-sans">
      <h1 className="text-xl font-bold mb-4">Portfolio Response</h1>
      <MyHoldings portfolioData={data?.portfolio}/>
    </div>
  );
}

export default App;

