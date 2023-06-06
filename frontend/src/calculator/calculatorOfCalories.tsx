import React, {FC, useMemo, useState} from 'react';
import GenderSection from './genderSection';
import BmrForm from "./bmrForm";
import { IBMR } from '../models/IBMR';
import ActivityFormComponent from "./activityFormComponent";
import GoalWeighAndDate from "./goalWeighAndDate";

const CalculatorOfCalories: FC = () => {
    const [gender, setGender] = useState<string>("");
    const [bmr,setBmr] = useState<number>(0);
    const [tdee,setTdee] = useState<number>(0);
    const [goalWeight, setGoalWeight] = useState<number>(0);
    const [goalDate, setGoalDate] = useState<number>();


    const handleGenderChange = (message: string): void => {
        setGender(message);
        console.log(message);
    }
    const backToBMR= () : void =>{
        setBmr(0);
        setTdee(0);
    }
    const getBMR= (bmrObject : IBMR) : void =>{
        if (gender === 'M') {
            setBmr((10 * bmrObject.weight) + (6.25 * bmrObject.height) - (5 * bmrObject.age) + 5);
        } else if (gender === 'F') {
            setBmr( (10 * bmrObject.weight) + (6.25 * bmrObject.height) - (5 * bmrObject.age) - 161);
        } else {
            alert("Something went wrong");
        }
    }
    const getTDEE= (activity: number) : void =>{
        setTdee(activity);
        console.log(activity);
    }
    const getGoalDateAndWeight= (goalWeight:number, goalDate:Date) : void =>{
        setGoalWeight(goalWeight);
        const temporary = new Date();
        setGoalDate(goalDate.getDate() - temporary.getDate());
    }

    const goToTdee = () => {
        setTdee(0)
        setGoalWeight(0)

    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-12">Calculator of calories</h1>
            {gender=="" && <GenderSection onMessage={handleGenderChange} />}
            {bmr===0 && gender!==""&& <BmrForm goBack={()=>setGender("")} sendBMR={getBMR} />}
            {bmr!==0 && tdee==0 &&  <ActivityFormComponent onMessage={getTDEE} goBack={backToBMR}/>}
            {tdee!==0 && goalWeight==0 &&<GoalWeighAndDate goBack={goToTdee} sendDateAndWeight={getGoalDateAndWeight}/>}

        </div>
    );
};

export default React.memo(CalculatorOfCalories);
