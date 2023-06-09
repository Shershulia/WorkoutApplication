import React, {FC, useState} from 'react';
import Diagram from "./Diagram";
interface Props{
    tdee : number;
}
const MicronutriciosCalc : FC<Props> = ({tdee}) => {

    const [goal,setGoal] = useState<string>("");
    const [protein, setProtein] = useState<number>(30);
    const [carbs, setCarbs] = useState<number>(15);
    const [fats, setFats] = useState<number>(25);

    const recalculateIntakes = (newProtein: number, newCarbs: number, newFats: number): void => {
        const sum = newProtein + newCarbs + newFats;
        const factor = 100 / sum;
        setProtein(newProtein * factor);
        setCarbs(newCarbs * factor);
        setFats(newFats * factor);
    };

    const onChangeProtein = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const newProtein = parseFloat(event.target.value);
        recalculateIntakes(newProtein, carbs, fats);
    };

    const onChangeCarbs = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const newCarbs = parseFloat(event.target.value);
        recalculateIntakes(protein, newCarbs, fats);
    };

    const onChangeFats = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const newFats = parseFloat(event.target.value);
        recalculateIntakes(protein, carbs, newFats);
    };

    const onChangeGoal = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        const value = event.target.value;
        setGoal(value);
        if (value === 'loss') {
            recalculateIntakes(30, 50, 20);
        } else if (value === 'maintenance') {
            recalculateIntakes(30, 40, 30);
        } else if (value === 'gain') {
            recalculateIntakes(45, 20, 35);
        } else {
            recalculateIntakes(33, 33, 33);
        }
    };
    return (
        <div>
            <div className="flex flex-col items-center mt-5">
                <label className="text-3xl">
                    What is your goal?
                </label>
                <select value={goal} onChange={onChangeGoal} className="my-5 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent text-center text-xl border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                <option value="maintenance" >Maintenance</option>
                    <option value="loss">Weight loss</option>
                    <option value="gain">Muscle gain</option>
                    <option value="custom">Custom</option>
                </select>
            </div>
            <div className="grid grid-cols-3 gap-2">
                <div className="col-span-1">
                    <Diagram carbs={carbs} protein={protein} fats={fats} />
                </div>
                <div className="flex flex-col col-span-2 justify-center">
                    <div>
                        <div className="flex flex-row items-center justify-center">
                        <label className="w-1/2">Protein intake, {protein.toFixed(1)} %:</label>
                        <input
                            type="range"
                            min={0}
                            max={100}
                            step={1}
                            value={protein}
                            onChange={onChangeProtein}
                            className="bg-blue-400 ml-1 h-4 w-3/4 rounded-lg overflow-hidden appearance-none"
                            disabled={goal!="custom"}
                        />
                        </div>
                        <div className="flex flex-row items-center">
                        <label className="w-1/2">Carbs intake, {carbs.toFixed(1)} %:</label>
                        <input
                            type="range"
                            min={0}
                            max={100}
                            step={1}
                            value={carbs}
                            onChange={onChangeCarbs}
                            className="bg-red-400 ml-1 h-4 w-3/4 rounded-lg overflow-hidden appearance-none"
                            disabled={goal!="custom"}
                        />
                        </div>
                        <div className="flex flex-row items-center">
                        <label className="w-1/2">Fats intake, {fats.toFixed(1)} %:</label>
                        <input
                            type="range"
                            min={0}
                            max={100}
                            step={1}
                            value={fats}
                            onChange={onChangeFats}
                            className="bg-yellow-400 ml-1 h-4 w-3/4 rounded-lg overflow-hidden appearance-none"
                            disabled={goal!="custom"}
                        />
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center flex flex-row justify-between mt-5">
                <div>
                    <a>Your protein intake {(protein*0.01*tdee/4).toFixed(1)} gr/day</a>
                </div>
                <div>
                    <a>Your carbs intake {(carbs*0.01*tdee/4).toFixed(1)} gr/day</a>
                </div>
                <div>
                    <a>Your fat intake {(fats*0.01*tdee/9).toFixed(1)} gr/day</a>
                </div>
            </div>
        </div>
    );
};

export default MicronutriciosCalc;