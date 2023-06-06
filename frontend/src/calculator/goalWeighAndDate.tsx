import React, {FC, useState} from 'react';
import {useForm} from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
    sendDateAndWeight: (goalWeight: number, goalDate: Date) => void;
    goBack : () =>void;

}
const GoalWeighAndDate: FC<Props>  = ( {sendDateAndWeight, goBack})  => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [startDate, setStartDate] = useState(new Date());

    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 2); // Add 2 days to today's date
    const handleSubmitting= (formValues: Object) =>{
        console.log("Sending");
        sendDateAndWeight(formValues.goalWeight, startDate);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(handleSubmitting)} className='shadow-[0px_0px_30px_10px_#dd6b20] rounded-2xl p-12 flex flex-col align-middle h-full justify-around'>
                <section className='flex flex-col items-center justify-center'>
                    <label className='mb-2 text-xl'>Enter your goal weight</label>
                    <input
                        {...register("goalWeight", { required: true })}
                        className={`appearance-none px-4 py-1 border ${errors.weight ? 'border-red-500 animate-pulse bg-red-50' : 'border-gray-300'} text-center max-w-xs rounded-lg`}
                    />
                    {errors.goalWeight && <span className="text-red-500 text-center mt-2">This field is required</span>}
                </section>
                <section className='flex flex-col items-center justify-center'>
                    <label className='mb-2 text-xl'>Enter your goal time</label>
                    <DatePicker selected={minDate}
                                onChange={(date) => setStartDate(date)}
                                minDate={minDate}
                                className="border border-gray-300 rounded px-4 py-2 text-xxl text-gray-700 text-center "
                    />
                </section>
                <div className='flex flex-col items-center justify-center'>
                    <button
                        type="submit"
                        className="max-w-xs relative inline-flex items-center justify-center p-0.5 mt-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white
                        dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 "
                    >
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-xl">
                            Submit
                        </span>
                    </button>
                    <button
                        type="reset"
                        onClick={goBack}
                        className="max-w-xs relative inline-flex items-center justify-center p-0.5 mt-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-500 to-gray-900 group-hover:from-red-500 group-hover:to-gray-900 hover:text-white
                        dark:text-white focus:ring-4 focus:outline-none focus:ring-red-400 dark:focus:ring-pink-800 "
                    >
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-xl">
                            Choose gender
                        </span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default React.memo(GoalWeighAndDate);