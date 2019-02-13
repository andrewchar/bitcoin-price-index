import React, { useState, useEffect } from 'react';

import useFetch from './API/useFetch';

import '../styles/normalize.css';
// import styles from "./App.module.css";

function App() {
  const [bitcoinData, setBitcoinData] = useState(null);
  // const [data, setData] = useState(useFetch());
  const data = useFetch(
    'https://api.coindesk.com/v1/bpi/historical/close.json'
  );
  // const data = useFetch();

  // useEffect(() => {
  // setData(useFetch());
  // });

  if (!data) {
    return <div>Loading...</div>;
  } else {
    console.log(data, data.bpi);
    return Object.keys(data.bpi).map((el, i) => {
      console.log(`index #${i}: element: ${el}`);
      return (
        <div>
          {el} {data.bpi[el]}
        </div>
      );
    });
    // return <div>there is data</div>;
    // data.map(el => {
    // return <span>{el}</span>;
    // });
  }
  // return (
  //   {if (data) {

  //   }}
  //   <div>
  //     <p>
  //       <a
  //         href="https://www.coindesk.com/price/bitcoin"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Powered by CoinDesk
  //       </a>
  //     </p>
  //     {data.map(el => {
  //       return <span>{el}</span>;
  //     })}
  //   </div>
  // );
}

export default App;
