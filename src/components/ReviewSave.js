import React, { useContext, useEffect } from 'react';
import BudgetContext from '../context/BudgetContext';
import './ReviewSave.css';

const ReviewSave = () => {
  const { userInfo, incomeExpenses, summary, setStep } = useContext(BudgetContext);

  useEffect(() => {
    console.log('User Info:', userInfo);
    console.log('Income and Expenses:', incomeExpenses);
    console.log('Summary:', summary);
  }, [userInfo, incomeExpenses, summary]);

  const handleSubmit = () => {
    localStorage.setItem('budgetData', JSON.stringify({ userInfo, incomeExpenses, summary }));
    alert('Budget saved successfully!');
  };

  return (
    <div className="review-save">
      <h2>Review and Save</h2>
      <div className="review-card">
        <div className="review-section">
          <h3>User Information</h3>
          <p><strong>Name:</strong> {userInfo.name}</p>
          <p><strong>Email:</strong> {userInfo.email}</p>
          <p><strong>Preferred Currency:</strong> {userInfo.currency}</p>
        </div>
        <div className="review-section">
          <h3>Financial Details</h3>
          <p><strong>Monthly Income:</strong> {incomeExpenses.income.toFixed(2)}</p>
          <p><strong>Total Expenses:</strong> {incomeExpenses.expenses.reduce((total, expense) => total + expense.amount, 0).toFixed(2)}</p>
        </div>
        <div className="review-section">
          <h3>Summary</h3>
          <p><strong>Total Income:</strong> {summary.totalIncome.toFixed(2)}</p>
          <p><strong>Total Expenses:</strong> {summary.totalExpenses.toFixed(2)}</p>
          <p><strong>Remaining Budget:</strong> {summary.remainingBudget.toFixed(2)}</p>
        </div>
      </div>
      <div className="buttons">
        <button onClick={() => setStep(3)} className="btn btn-back">Back</button>
        <button onClick={handleSubmit} className="btn btn-save">Save</button>
      </div>
    </div>
  );
};

export default ReviewSave;
