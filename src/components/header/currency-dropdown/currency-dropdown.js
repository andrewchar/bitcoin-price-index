import React from 'react';

const currencyData = require('../../data/currency-data.json');

const CurrencyDropdown = () => {
  return (
    <div>
      <label for="currency">Choose currency:</label>
      <select id="currency">
        <option value="">--Please choose an option--</option>
        {currencyData.map(obj => {
          return (
            <option value="{obj.currency}" key="{obj.currency}">
              {obj.currency}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CurrencyDropdown;
