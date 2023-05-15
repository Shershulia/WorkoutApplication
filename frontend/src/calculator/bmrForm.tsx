import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

const BmrForm: FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    function handleSubmitting(formValues: Object) {
        console.log(formValues);
    }

    return (
        <div className="h-[50%]">
            <form onSubmit={handleSubmit(handleSubmitting)} className='shadow-[0px_0px_30px_10px_#dd6b20] rounded-2xl p-12 flex flex-col align-middle h-full justify-around'>
                <section className='flex flex-col items-center justify-center'>
                    <label className='mb-2'>Enter your weight in kg</label>
                    <input
                        {...register("weight", { required: true, min: 0 })}
                        className="appearance-none px-4 py-1 border border-gray-300 text-center max-w-xs rounded-lg"
                    />
                    {errors.weight && <span className="text-red-500 text-center">Weight is required and should be greater than or equal to 0</span>}
                </section>
                <section className='flex flex-col items-center justify-center'>
                    <label className='mb-2'>Enter your height in cm</label>
                    <input
                        {...register("height", { required: true, min: 0 })}
                        className="appearance-none px-4 py-1 border border-gray-300 text-center max-w-xs rounded-lg"
                    />
                    {errors.height && <span className="text-red-500 text-center">Height is required and should be greater than or equal to 0</span>}
                </section>
                <section className='flex flex-col items-center justify-center'>
                    <label className='mb-2'>Enter your age</label>
                    <input
                        {...register("age", { required: true, min: 0, max: 99 })}
                        className="appearance-none px-4 py-1 border border-gray-300 text-center max-w-xs rounded-lg"
                    />
                    {errors.age && <span className="text-red-500 text-center">Age is required and should be between 0 and 99</span>}
                </section>
                <div className='flex flex-col items-center justify-center'>
                    <button
                        type="submit"
                        className="max-w-m relative inline-flex items-center justify-center p-5 mt-5 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                        >Submit</button>
                </div>
            </form>
        </div>
    );
};

export default BmrForm;
