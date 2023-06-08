import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import {IBMR} from "../models/IBMR";

interface Props {
    sendBMR: (bmrReady: IBMR) => void;
    goBack : () =>void;
}
const BmrForm: FC<Props> = ( {goBack, sendBMR }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    function handleSubmitting(formValues: Object) {
        sendBMR(formValues as IBMR);
    }
    return (
        <div className="h-[50%] min-w-[30%]">
            <form onSubmit={handleSubmit(handleSubmitting)} className='shadow-[0px_0px_30px_10px_#dd6b20] rounded-2xl p-12 flex flex-col align-middle h-full justify-around'>
                <section className='flex flex-col items-center justify-center'>
                    <label className='mb-2 text-xl'>Enter your weight in kg</label>
                    <input
                        {...register("weight", { required: true, min: 0 })}
                        className={`appearance-none px-4 py-1 border ${errors.weight ? 'border-red-500 animate-pulse bg-red-50' : 'border-gray-300'} text-center max-w-xs rounded-lg`}
                        />
                    {errors.weight && <span className="text-red-500 text-center mt-2">Weight is required and should be greater than or equal to 0</span>}
                </section>
                <section className='flex flex-col items-center justify-center'>
                    <label className='mb-2 text-xl'>Enter your height in cm</label>
                    <input
                        {...register("height", { required: true, min: 0 })}
                        className={`appearance-none px-4 py-1 border ${errors.weight ? 'border-red-500 animate-pulse bg-red-50' : 'border-gray-300'} text-center max-w-xs rounded-lg`}
                    />
                    {errors.height && <span className="text-red-500 text-center">Height is required and should be greater than or equal to 0</span>}
                </section>
                <section className='flex flex-col items-center justify-center'>
                    <label className='mb-2 text-xl'>Enter your age</label>
                    <input
                        {...register("age", { required: true, min: 0, max: 99 })}
                        className={`appearance-none px-4 py-1 border ${errors.weight ? 'border-red-500 animate-pulse bg-red-50'  : 'border-gray-300'} text-center max-w-xs rounded-lg`}
                    />
                    {errors.age && <span className="text-red-500 text-center">Age is required and should be between 0 and 99</span>}
                </section>
                <div className='flex flex-row items-center justify-center space-x-2'>
                    <button
                        onClick={goBack}
                        className="max-w-xs relative inline-flex items-center justify-center p-0.5 mt-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-500 to-gray-900 group-hover:from-red-500 group-hover:to-gray-900 hover:text-white
                        dark:text-white focus:ring-4 focus:outline-none focus:ring-red-400 dark:focus:ring-pink-800 "
                    >
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-xl">
                            Back
                        </span>
                    </button>
                    <button
                        type="submit"
                        className="max-w-xs relative inline-flex items-center justify-center p-0.5 mt-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white
                        dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 "                        
                        >          
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-xl">
                            Submit
                        </span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default React.memo(BmrForm);
