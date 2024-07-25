import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CurrencyConverter = ({ amount, currency }) => {
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const convertCurrency = async () => {
      try {
        const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/USD`);
        const rate = response.data.rates[currency];
        setConvertedAmount(amount * rate);
      } catch (err) {
        setError('Error fetching currency conversion data.');
      }
    };

    convertCurrency();
  }, [amount, currency]);

  if (error) {
    return <p>{error}</p>;
  }

  return <p>Converted Amount in {currency}: {convertedAmount.toFixed(2)}</p>;
};

export default CurrencyConverter;
