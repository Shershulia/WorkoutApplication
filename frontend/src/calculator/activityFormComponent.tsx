import React, {useState} from 'react';

const ActivityFormComponent = () => {
    const [activity,setActivity] = useState<number>();

    const changeTDII= (activity : number) : void =>{
        setActivity(activity);

    }
    return (
        <div>
            <h1 className='text-center'>Choose your Total Daily Energy Expenditure</h1>
            <div className='m-3 border-2 border-stone-600 p-4 rounded-xl'>
                <div className='flex flex-row'>
                <div className={`flex items-center p-2 border-2 rounded-3xl ${
                    activity === 1.2 ? "border-orange-600" : "border-gray-400"
                }`}>
                    <img src="assets\TDII1.png" className="h-24 w-24" />
                    <input
                        type="checkbox"
                        onChange={() =>changeTDII(1.2)}
                        className="rounded-full border-gray-400 appearance-none w-24 h-6 leading-6 absolute"
                    />
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

            </div>

    );
};

export default ActivityFormComponent;