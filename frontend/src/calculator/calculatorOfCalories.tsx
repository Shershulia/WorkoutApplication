import React, { FC, useState } from 'react';
import GenderSection from './genderSection';
import BmrForm from "./bmrForm";
import { IBMR } from '../models/IBMR';
import ActivityFormComponent from "./activityFormComponent";

const CalculatorOfCalories: FC = () => {
    const [gender, setGender] = useState<string>("");
    const [findBrm, setFindBrm] = useState<boolean>(false);
    const [bmr,setBmr] = useState<number>(0);

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
        if (gender==="M") setBmr((10 * bmrObject.weight) + (6.25 * bmrObject.height) - (5 * bmrObject.age) + 5);
        else if (gender==="F") setBmr((10 * bmrObject.weight) + (6.25 * bmrObject.height) - (5 * bmrObject.age) -161);
        else alert("Error appears");
    }
      
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-12">Calculator of calories</h1>
            <ActivityFormComponent></ActivityFormComponent>
            {gender!=="" && <GenderSection onMessage={handleGenderChange} />}
            {findBrm && <BmrForm goBack={backToGender} sendBMR={getBMR} />}

        </div>
    );
};

export default React.memo(CalculatorOfCalories);
