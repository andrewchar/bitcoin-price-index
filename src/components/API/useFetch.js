import React, { useState, useEffect } from 'react';

const useFetch = url => {
  console.log('useFetch fired');
  const [data, setData] = useState(null);

  async function fetchData() {
    console.log('async fetchData fired');
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return data;
};

export default useFetch;
