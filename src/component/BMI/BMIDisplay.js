import React from 'react';

const BMIDisplay = ({ bmi, category }) => {
  return (
    <div className="bmi-display">
      <h2>Your BMI: {bmi}</h2>
      <p>Category: <strong>{category}</strong></p>
    </div>
  );
};

export default BMIDisplay;
