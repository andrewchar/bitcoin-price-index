import React from 'react';

import CurrencyDropdown from './currency-dropdown/currency-dropdown';

const Header = () => {
  return (
    <header>
      <h1>Bitcoin Price Index</h1>
      <CurrencyDropdown />
    </header>
  );
};

export default Header;
