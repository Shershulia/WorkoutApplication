import React, {FC, memo, useMemo, useState} from 'react';
import MicronutriciosCalc from "./micronutriciosCalc";

interface IResult {
    bmr: number;
    tdee: number;
    weighDifference: number;
    goalDate: number;
    reset : () => void;
}

const ResultPage: FC<IResult> = ({ bmr, tdee, weighDifference, goalDate, reset }) => {
    const tdee_calories = useMemo(() => tdee * bmr, [tdee, bmr]).toFixed(2);
    const calculation = useMemo(() => weighDifference * 7700 / goalDate, [weighDifference, goalDate]).toFixed(2);

    const [isH2Visible, setIsH2Visible] = useState<boolean>(false);
    const [isH22Visible, setIsH22Visible] = useState<boolean>(false);
    const [isH23Visible, setIsH23Visible] = useState<boolean>(false);
    const [openMacrosCalc, setOpenMacrosCalc] = useState<boolean>(false);

    const handleDivClick = () => {
        setIsH2Visible(!isH2Visible);
    };
    const handleDiv2Click = () => {
        setIsH22Visible(!isH22Visible);
    };
    const handleDiv3Click = () => {
        setIsH23Visible(!isH23Visible);
    };

    return (
        <div>
            <div onClick={handleDivClick} className="flex flex-col justify-center items-center mb-12">
                <h1 className="text-3xl mb-2">Your BMR: {bmr}</h1>
                <div className="relative max-w-xl text-center" >
                    <h2
                        className={`${
                            isH2Visible ? 'h-0 opacity-0' : 'h-auto opacity-100'
                        } transition-all ease-in-out duration-300`}
                    >
                        You burn calories even when resting through basic life-sustaining functions like breathing, circulation, nutrient processing, and cell production. This is known as basal metabolic rate (BMR).
                    </h2>
                </div>            </div>
            <div onClick={handleDiv2Click} className="flex flex-col justify-center items-center my-1.5">
                <h1 className="text-3xl mb-2">Your TDEE calories: {tdee_calories}</h1>
                <h2
                    className={`${
                        isH22Visible ? 'h-0 opacity-0' : 'h-auto opacity-100'
                    } transition-all ease-in-out duration-300 max-w-xl text-center`}
                >TDEE (Total Energy Expenditure) is the total number of calories you should be consuming during the day based on your activity.</h2>
            </div>
                { goalDate!==0 &&
                <div onClick={handleDiv3Click}>
                    <h1 className="text-3xl">Your calories per day to get the weight: {tdee_calories+calculation}</h1>
                    <h2
                        className={`${
                            isH23Visible ? 'h-0 opacity-0' : 'h-auto opacity-100'
                        } transition-all ease-in-out duration-300`}
                    >This is the number of calories you should consume per day in order to achieve your weight goal.</h2>
                </div>}
            <div className='flex flex-col items-center'>
                <button
                    onClick={reset}
                    className="max-w-xs relative inline-flex items-center justify-center p-0.5 mt-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-500 to-gray-900 group-hover:from-red-500 group-hover:to-gray-900 hover:text-white
                            dark:text-white focus:ring-4 focus:outline-none focus:ring-red-400 dark:focus:ring-pink-800 "
                >
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-xl">
                                Start again
                            </span>
                </button>
            </div>
            {openMacrosCalc && <MicronutriciosCalc/>}
            <div className='flex flex-col items-center'>
                <button
                    type="reset"
                    onClick={()=>setOpenMacrosCalc(!openMacrosCalc)}
                    className="max-w-xs relative inline-flex items-center justify-center p-0.5 mt-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-500 to-gray-400 group-hover:from-blue-500 group-hover:to-gray-400 hover:text-white
                        dark:text-white focus:ring-4 focus:outline-none "
                >
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-xl">
                        Open macros
                      </span>
                </button>
            </div>

        </div>
    );
};

export default memo(ResultPage);
