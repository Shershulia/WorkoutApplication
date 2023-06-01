import React, {FC, useState} from 'react';
interface Props {
    onMessage: (message: number) => void;
    goBack : () =>void;

}
const ActivityFormComponent: FC<Props>  = ({ onMessage, goBack }) => {
    const [activity,setActivity] = useState<number>(1.1);

    const changeTDII= (activity : number) : void =>{
        setActivity(activity);
    }
    const onChangeRange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value = parseFloat(event.target.value);
        setActivity(value);
      };
    const submitTdee = () : void =>{
        onMessage(activity);
    }
      
    return (
        <div>
            <h1 className="text-2xl mb-8 text-center">Choose your Total Daily Energy Expenditure</h1>
            <div className='grid grid-cols-3 gap-4'>
                <div className='m-3 border-2 border-stone-600 p-4 rounded-xl'>
                    <div className='flex flex-row'>
                    <div className={`flex items-center p-2 border-2 rounded-3xl ${
                        (activity <= 1.2) ? "border-orange-600" : "border-gray-400"
                    }`}>
                        <input
                            type="checkbox"
                            onChange={() =>changeTDII(1.2)}
                            className="rounded-full border-gray-400 appearance-none w-24 h-24 leading-6 absolute"
                        />
                        <img src="assets\TDII1.png" className="h-24 w-24" />
                    </div>   
                        <div className='flex flex-col justify-center items-center ml-2'>
                            <h1 className='text-3xl font-bold'>Sedentary</h1>
                            <h2>little to no exercise + work a desk job</h2>
                            <div className="flex flex-row">
                                <h3>TDEE index:&nbsp;</h3> <h3 className='font-bold'> 1.2</h3>
                            </div>
                        </div>
                    </div>
                    </div>

                <div className='m-3 border-2 border-stone-600 p-4 rounded-xl'>
                    <div className='flex flex-row'>
                        <div className={`flex items-center p-2 border-2 rounded-3xl ${
                            (activity <= 1.375 && activity >1.2) ? "border-orange-600" : "border-gray-400"
                        }`}>
                            <img src="assets\TDII2.png" className="h-24 w-24" />
                            <input
                                type="checkbox"
                                onChange={() =>changeTDII(1.375)}
                                className="rounded-full border-gray-400 appearance-none w-24 h-24 leading-6 absolute"
                            />
                        </div>
                        <div className='flex flex-col justify-center items-center ml-2'>
                            <h1 className='text-3xl font-bold'>Lightly Active</h1>
                            <h2>light exercise 1-3 days / week</h2>
                            <div className="flex flex-row">
                                <h3>TDEE index:&nbsp;</h3> <h3 className='font-bold'> 1.375</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='m-3 border-2 border-stone-600 p-4 rounded-xl'>
                    <div className='flex flex-row'>
                        <div className={`flex items-center p-2 border-2 rounded-3xl ${
                            (activity <= 1.55 && activity >1.375) ? "border-orange-600" : "border-gray-400"
                        }`}>
                            <img src="assets\TDII3.png" className="h-24 w-24" />
                            <input
                                type="checkbox"
                                onChange={() =>changeTDII(1.55)}
                                className="rounded-full border-gray-400 appearance-none w-24 h-24 leading-6 absolute"
                            />
                        </div>
                        <div className='flex flex-col justify-center items-center ml-2'>
                            <h1 className='text-3xl font-bold'>Moderately Active</h1>
                            <h2>moderate exercise 3-5 days / week</h2>
                            <div className="flex flex-row">
                                <h3>TDEE index:&nbsp;</h3> <h3 className='font-bold'> 1.55</h3>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className='flex flex-row justify-center'>
                <div className='m-3 border-2 border-stone-600 p-4 rounded-xl'>
                    <div className='flex flex-row'>
                        <div className={`flex items-center p-2 border-2 rounded-3xl ${
                            (activity <= 1.725 && activity >1.55) ? "border-orange-600" : "border-gray-400"
                        }`}>
                            <img src="assets\TDII4.png" className="h-24 w-24" />
                            <input
                                type="checkbox"
                                onChange={() =>changeTDII(1.725)}
                                className="rounded-full border-gray-400 appearance-none w-24 h-6 leading-6 absolute"
                            />
                        </div>
                        <div className='flex flex-col justify-center items-center ml-2'>
                            <h1 className='text-3xl font-bold'>Very Active </h1>
                            <h2>heavy exercise 6-7 days / week</h2>
                            <div className="flex flex-row">
                                <h3>TDEE index:&nbsp;</h3> <h3 className='font-bold'> 1.725</h3>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className='m-3 border-2 border-stone-600 p-4 rounded-xl max--2xl'>
                    <div className='flex flex-row'>
                            <div className={`flex items-center p-2 border-2 rounded-3xl ${
                                (activity > 1.725) ? "border-orange-600" : "border-gray-400"
                            }`}>
                                <img src="assets\TDII5.png" className="h-24 w-24" />
                                <input
                                    type="checkbox"
                                    onChange={() =>changeTDII(1.9)}
                                    className="rounded-full border-gray-400 appearance-none w-24 h-24 leading-6 absolute"
                                />
                            </div>

                            <div className='flex flex-col justify-center items-center ml-2'>
                                <h1 className='text-3xl font-bold'>Extremely Active </h1>
                                <h2>strenuous training 2x / day</h2>
                                <div className="flex flex-row">
                                    <h3>TDEE index:&nbsp;</h3> <h3 className='font-bold'> 1.9</h3>
                                </div>
                        </div>
                    </div>
                </div>
                </div>

            <div className='flex flex-col items-center'>
            <input
                type="range"
                min={1.1}
                max={2}
                step={0.005}
                value={activity}
                onChange={onChangeRange}
                className="bg-orange-400 mt-8 h-4 w-9/12 rounded-lg overflow-hidden appearance-none"
                />
                <h2>Chosen value TDEE: {activity}</h2>   
            </div>
            <div className='flex flex-col items-center justify-center'>
                    <button
                        type="submit"
                        onClick={submitTdee}
                        className="max-w-xs relative inline-flex items-center justify-center p-0.5 mt-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white
                        dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 "                        
                        >          
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-xl">
                            Submit
                        </span>
                    </button>
                    <button
                        onClick={goBack}
                        className="max-w-xs relative inline-flex items-center justify-center p-0.5 mt-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-500 to-gray-900 group-hover:from-red-500 group-hover:to-gray-900 hover:text-white
                        dark:text-white focus:ring-4 focus:outline-none focus:ring-red-400 dark:focus:ring-pink-800 "                        
                        >          
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-xl">
                            Back
                        </span>
                    </button>
                </div> 
            </div>

            

    );
};

export default ActivityFormComponent;