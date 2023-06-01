import React, { FC, useState } from 'react';
import GenderSection from './genderSection';
import BmrForm from "./bmrForm";
import { IBMR } from '../models/IBMR';
import ActivityFormComponent from "./activityFormComponent";

const CalculatorOfCalories: FC = () => {
    const [gender, setGender] = useState<string>("");
    const [findBrm, setFindBrm] = useState<boolean>(false);
    const [bmr,setBmr] = useState<number>(0);
    const [tdee,setTdee] = useState<number>()

    const handleGenderChange = (message: string): void => {
        setGender(message);
        console.log(message);
        setFindBrm(true);
    }
    const backToGender= () : void =>{
        setGender("");
        setFindBrm(false);
    }
    const backToBMR= () : void =>{
        setBmr(0);
        setTdee(0);
    }
    const getBMR= (bmrObject : IBMR) : void =>{
        console.log(bmrObject);
        if (gender==="M") setBmr((10 * bmrObject.weight) + (6.25 * bmrObject.height) - (5 * bmrObject.age) + 5);
        else if (gender==="F") setBmr((10 * bmrObject.weight) + (6.25 * bmrObject.height) - (5 * bmrObject.age) -161);
        else alert("Error appears");
    }
    const getTDEE= (activity: number) : void =>{
        setTdee(activity);
        console.log(activity);
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-12">Calculator of calories</h1>
            {gender==="" && <GenderSection onMessage={handleGenderChange} />}
            {bmr===0 && gender!==""&& <BmrForm goBack={backToGender} sendBMR={getBMR} />}
            {bmr!==0 &&<ActivityFormComponent onMessage={getTDEE} goBack={backToBMR}></ActivityFormComponent>}

        </div>
    );
};

export default React.memo(CalculatorOfCalories);
