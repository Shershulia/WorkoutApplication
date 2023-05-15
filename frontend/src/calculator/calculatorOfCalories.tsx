import React, { FC, useState } from 'react';
import GenderSection from './genderSection';
import BmrForm from "./bmrForm";
import { IBMR } from '../models/IBMR';

const CalculatorOfCalories: FC = () => {
    const [gender, setGender] = useState<string>("");
    const [findBrm, setFindBrm] = useState<boolean>(false);

    const handleGenderChange = (message: string): void => {
        setGender(message);
        console.log(message);
        setFindBrm(true);
    }
    const backToGender= () : void =>{
        setGender("");
        setFindBrm(false);
    }
    const getBMR= (bmrObject : IBMR) : void =>{
        console.log(bmrObject);
    }
      
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-12">Calculator of calories</h1>
            {gender==="" && <GenderSection onMessage={handleGenderChange} />}
            {findBrm && <BmrForm goBack={backToGender} sendBMR={getBMR} />}

        </div>
    );
};

export default React.memo(CalculatorOfCalories);
