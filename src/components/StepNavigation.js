import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import BudgetContext from '../context/BudgetContext';

const StepNavigation = () => {
  const { step, nextStep, prevStep } = useContext(BudgetContext);
  const navigate = useNavigate();

  const handleNext = () => {
    nextStep();
    if (step === 1) navigate('/income-expenses');
    if (step === 2) navigate('/budget-summary');
    if (step === 3) navigate('/review-save');
  };

  const handleBack = () => {
    prevStep();
    if (step === 2) navigate('/');
    if (step === 3) navigate('/income-expenses');
    if (step === 4) navigate('/budget-summary');
  };

  return (
    <div>
      {step > 1 && <button onClick={handleBack}>Back</button>}
      {step < 4 && <button onClick={handleNext}>Next</button>}
    </div>
  );
};

export default StepNavigation;
