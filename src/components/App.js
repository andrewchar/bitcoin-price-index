import React, { useState, useEffect } from 'react';

// custom Hooks
import useFetch from './API/useFetch';

// components
import Chart from './chart/chart';

import '../styles/normalize.css';
// import styles from "./App.module.css";

function App() {
  const [bitcoinData, setBitcoinData] = useState(null);
  const data = useFetch(
    'https://api.coindesk.com/v1/bpi/historical/close.json'
  );

  if (!data) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <Chart data={data} />
      </div>
    );
  }
}

export default App;
