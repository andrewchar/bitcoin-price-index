import React, { useState, useEffect } from 'react';

const useFetch = url => {
  console.log('useFetch fired');
  const [data, setData] = useState(null);
  //   const [endPoint, setEndPoint] = useState(
  // "https://api.coindesk.com/v1/bpi/historical/close.json"
  //   );

  async function fetchData() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return data;
};

// function useFetch() {
//   console.log("useFetch()");
//   const [data, setData] = useState(null);
//   const [endPoint, setEndPoint] = useState(
//     "https://api.coindesk.com/v1/bpi/historical/close.json"
//   );

//   async function fetchData(url) {
//     const data = await fetch(url);
//     const dataJSON = await data.json();
//     console.log(dataJSON);
//     setData(dataJSON);

//     // return dataJSON;
//   }

//   useEffect(() => {
//     fetchData(endPoint);
//   }, []);
//   console.log(data);
//   return data;
// }

export default useFetch;
