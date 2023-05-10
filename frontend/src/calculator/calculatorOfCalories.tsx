import React, { FC, useState } from 'react';
import GenderSection from './genderSection';

const CalculatorOfCalories: FC = () => {
    const [gender, setGender] = useState<string>("M");
    const [genderIsGiven, setGenderIsGiven] = useState<boolean>(false);

    const handleGenderChange = (message: string): void => {
        setGender(message);
        console.log(message);
        setGenderIsGiven(true);
    }
      
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-12">Calculator of calories</h1>
            {!genderIsGiven && <GenderSection onMessage={handleGenderChange} />}
        </div>
    );
};

export default React.memo(CalculatorOfCalories);
