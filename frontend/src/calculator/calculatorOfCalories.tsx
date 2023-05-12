import React, { FC, useState } from 'react';
import GenderSection from './genderSection';

const CalculatorOfCalories: FC = () => {
    const [gender, setGender] = useState<string>("");

    const handleGenderChange = (message: string): void => {
        setGender(message);
        console.log(message);
    }
      
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-12">Calculator of calories</h1>
            {gender==="" && <GenderSection onMessage={handleGenderChange} />}
        </div>
    );
};

export default React.memo(CalculatorOfCalories);
