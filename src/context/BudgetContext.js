import React, { createContext, useState, useEffect } from 'react';

const BudgetContext = createContext();

const BudgetProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [userInfo, setUserInfo] = useState({ name: '', email: '', currency: 'USD' });
  const [incomeExpenses, setIncomeExpenses] = useState({ income: 0, expenses: [] });
  const [summary, setSummary] = useState({ totalIncome: 0, totalExpenses: 0, remainingBudget: 0 });

  useEffect(() => {
    const totalExpenses = incomeExpenses.expenses.reduce((total, expense) => total + expense.amount, 0);
    const remainingBudget = incomeExpenses.income - totalExpenses;
    setSummary({
      totalIncome: incomeExpenses.income,
      totalExpenses,
      remainingBudget,
    });
  }, [incomeExpenses]);

  const nextStep = () => setStep(prevStep => prevStep + 1);
  const prevStep = () => setStep(prevStep => prevStep - 1);

  return (
    <BudgetContext.Provider value={{ step, setStep, userInfo, setUserInfo, incomeExpenses, setIncomeExpenses, summary, setSummary, nextStep, prevStep }}>
      {children}
    </BudgetContext.Provider>
  );
};

export { BudgetProvider };
export default BudgetContext;
