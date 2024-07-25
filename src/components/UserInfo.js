import React, { useContext } from 'react';
import BudgetContext from '../context/BudgetContext';
import './UserInfo.css';

const UserInfo = () => {
  const { userInfo, setUserInfo, nextStep } = useContext(BudgetContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prevState => ({ ...prevState, [name]: value }));
  };

  const handleNext = () => {
    if (userInfo.name && userInfo.email && userInfo.currency) {
      nextStep(); // Move to the next step
    } else {
      alert("Please fill out all fields");
    }
  };

  return (
    <div className="user-info">
      <h2>Step 1: User Information</h2>
      <form className="form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userInfo.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userInfo.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="currency">Preferred Currency:</label>
          <select
            id="currency"
            name="currency"
            value={userInfo.currency}
            onChange={handleInputChange}
            required
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="INR">INR</option>
            {/* Add more currencies as needed */}
          </select>
        </div>
        <div className="buttons">
          <button type="button" className="next-button" onClick={handleNext}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserInfo;
