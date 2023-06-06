import React, { FC, memo, useMemo } from 'react';

interface IResult {
    bmr: number;
    tdee: number;
    weighDifference: number;
    goalDate: number;
    reset : () => void;
}

const ResultPage: FC<IResult> = ({ bmr, tdee, weighDifference, goalDate, reset }) => {
    const tdee_calories = useMemo(() => tdee * bmr, [tdee, bmr]);
    const calculation = useMemo(() => weighDifference * 7700 / goalDate, [weighDifference, goalDate]);

    return (
        <div>
            <div>
                <h1>Your BMR: {bmr}</h1>
                <h2>You burn calories even when resting through basic life-sustaining functions like breathing, circulation, nutrient processing, and cell production. This is known as basal metabolic rate (BMR).</h2>
            </div>
            <div>
                <h1>Your TDEE calories: {tdee_calories}</h1>
                <h2>TDEE (Total Energy Expenditure) is the total number of calories you should be consuming during the day based on your activity.</h2>
            </div>
                { goalDate!==0 && <div>
                    <h1>Your calories per day to get the weight: {tdee_calories+calculation}</h1>
                    <h2>This is the number of calories you should consume per day in order to achieve your weight goal.</h2>
                </div>}
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
    );
};

export default memo(ResultPage);
