import React, { useState } from 'react';

const BMIForm = ({ calculateBMI }) => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (height && weight) {
      calculateBMI(height, weight);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bmi-form">
      <div className="form-group">
        <label>Height (cm)</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter height in cm"
        />
      </div>
      <div className="form-group">
        <label>Weight (kg)</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter weight in kg"
        />
      </div>
      <button type="submit" className="calculate-btn">
        Calculate BMI
      </button>
    </form>
  );
};

export default BMIForm;

