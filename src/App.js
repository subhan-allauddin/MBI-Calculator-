import React, { useState } from 'react';
import BMIForm from './component/BMI/BMIForm';
import BMIDisplay from './component/BMI/BMIDisplay';

import './App.css';

const App = () => {
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = (height, weight) => {
    const bmiValue = (weight / ((height / 100) ** 2)).toFixed(1);
    setBMI(bmiValue);

    let bmiCategory = '';
    if (bmiValue < 18.5) bmiCategory = 'Underweight';
    else if (bmiValue >= 18.5 && bmiValue < 24.9) bmiCategory = 'Normal';
    else if (bmiValue >= 25 && bmiValue < 29.9) bmiCategory = 'Overweight';
    else bmiCategory = 'Obese';

    setCategory(bmiCategory);
  };

  return (
    <div className="app">
      <h1>BMI Calculator</h1>
      <BMIForm calculateBMI={calculateBMI} />
      {bmi && <BMIDisplay bmi={bmi} category={category} />}
    </div>
  );
};

export default App;
