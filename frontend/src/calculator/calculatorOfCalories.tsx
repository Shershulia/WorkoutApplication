import React, { FC, useState } from 'react';
import GenderSection from './genderSection';

const CalculatorOfCalories: FC = () => {
    const [gender, setGender] = useState("M");

    const handleGenderChange = (message) => {
        setGender(message);
        console.log(message);
    }
      
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
        <h1 className="text-3xl font-bold mb-12">Calculator of calories</h1>
        <GenderSection onMessage={handleGenderChange}></GenderSection>
    
    </div>
  );
};

export default React.memo(CalculatorOfCalories);
