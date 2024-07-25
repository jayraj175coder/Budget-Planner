import React, { useContext, useState } from 'react';
import BudgetContext from '../context/BudgetContext';
import './IncomeExpenses.css';

const IncomeExpenses = () => {
  const { incomeExpenses, setIncomeExpenses, nextStep, prevStep } = useContext(BudgetContext);
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');

  const handleAddExpense = () => {
    if (expenseName && expenseAmount) {
      setIncomeExpenses({
        ...incomeExpenses,
        expenses: [...incomeExpenses.expenses, { name: expenseName, amount: parseFloat(expenseAmount) }]
      });
      setExpenseName('');
      setExpenseAmount('');
    }
  };

  const handleChangeIncome = (e) => {
    setIncomeExpenses({ ...incomeExpenses, income: parseFloat(e.target.value) });
  };

  const handleRemoveExpense = (index) => {
    const updatedExpenses = incomeExpenses.expenses.filter((_, i) => i !== index);
    setIncomeExpenses({ ...incomeExpenses, expenses: updatedExpenses });
  };

  return (
    <div className="income-expenses">
      <h2>Step 2: Income and Expenses</h2>
      <form className="form">
        <div className="form-group">
          <label htmlFor="income">Monthly Income:</label>
          <input
            type="number"
            id="income"
            value={incomeExpenses.income}
            onChange={handleChangeIncome}
            placeholder="Enter your monthly income"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expense-name">Expense Name:</label>
          <input
            type="text"
            id="expense-name"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
            placeholder="Enter expense name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expense-amount">Expense Amount:</label>
          <input
            type="number"
            id="expense-amount"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
            placeholder="Enter expense amount"
            required
          />
        </div>
        <button type="button" className="add-expense-button" onClick={handleAddExpense}>
          Add Expense
        </button>
        <div className="expense-list">
          {incomeExpenses.expenses.length === 0 ? (
            <p>No expenses added yet.</p>
          ) : (
            incomeExpenses.expenses.map((expense, index) => (
              <div key={index} className="expense-item">
                <span>{expense.name}: ${expense.amount.toFixed(2)}</span>
                <button type="button" className="remove-expense-button" onClick={() => handleRemoveExpense(index)}>
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
        <div className="buttons">
          <button type="button" className="back-button" onClick={prevStep}>Back</button>
          <button type="button" className="next-button" onClick={nextStep}>Next</button>
        </div>
      </form>
    </div>
  );
};

export default IncomeExpenses;
