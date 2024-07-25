import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserInfo from './components/UserInfo';
import IncomeExpenses from './components/IncomeExpenses';
import BudgetSummary from './components/BudgetSummary';
import ReviewSave from './components/ReviewSave';
import BudgetContext from './context/BudgetContext';
import './App.css';

const App = () => {
  const { step, prevStep, nextStep } = useContext(BudgetContext);

  return (
    <Router>
      <div className="app">
        <h1>Multi-Step Budget Planner</h1>
        <Routes>
          <Route path="/" element={
            <>
              {step === 1 && <UserInfo />}
              {step === 2 && <IncomeExpenses />}
              {step === 3 && <BudgetSummary />}
              {step === 4 && <ReviewSave />}
              <div className="navigation-buttons">
               
              </div>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
