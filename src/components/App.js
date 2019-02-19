import React, { useState, useEffect } from 'react';

// custom Hooks
import useFetch from './API/useFetch';

// components
import Chart from './chart/chart';
import Header from './header/header';
import Footer from './footer/footer';

import '../styles/normalize.css';
import './app.css';

const App = () => {
  const data = useFetch(
    'https://api.coindesk.com/v1/bpi/historical/close.json'
  );

  if (!data) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="app-container">
        <Header />
        <Chart data={data} />
        <Footer />
      </div>
    );
  }
};

export default App;
