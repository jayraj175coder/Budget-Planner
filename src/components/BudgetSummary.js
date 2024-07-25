import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import BudgetContext from '../context/BudgetContext';
import './BudgetSummary.css';

const BudgetSummary = () => {
  const { userInfo, incomeExpenses, summary, setStep } = useContext(BudgetContext);
  const [exchangeRate, setExchangeRate] = useState(1);
  const [convertedIncome, setConvertedIncome] = useState(0);
  const [convertedExpenses, setConvertedExpenses] = useState(0);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get(`https://v6.exchangerate-api.com/v6/63839cfd9cd83eb102fd3678/latest/USD`);
        const rate = response.data.conversion_rates[userInfo.currency];
        setExchangeRate(rate);
        setConvertedIncome(incomeExpenses.income * rate);
        setConvertedExpenses(incomeExpenses.expenses.reduce((total, expense) => total + expense.amount, 0) * rate);
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
      }
    };

    fetchExchangeRate();
  }, [userInfo.currency, incomeExpenses.income, incomeExpenses.expenses]);

  const handleNext = () => setStep(4);
  const handleBack = () => setStep(2);

  return (
    <div className="budget-summary">
      <h2>Budget Summary</h2>
      <div className="summary-card">
        <div className="summary-item">
          <h3>Income and Expenses</h3>
          <p><strong>Monthly Income:</strong> {userInfo.currency} {convertedIncome.toFixed(2)}</p>
          <p><strong>Total Expenses:</strong> {userInfo.currency} {convertedExpenses.toFixed(2)}</p>
        </div>
      </div>
      <div className="navigation-buttons">
        <button onClick={handleBack} className="btn btn-back">Back</button>
        <button onClick={handleNext} className="btn btn-next">Next</button>
      </div>
    </div>
  );
};

export default BudgetSummary;
