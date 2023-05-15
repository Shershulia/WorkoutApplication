import React, { FC, useState, FormEvent, ChangeEvent } from 'react';

const BmrForm: FC = () => {
    const [weight, setWeight] = useState<number | undefined>();
    const [height, setHeight] = useState<number | undefined>();
    const [age, setAge] = useState<number | undefined>();

    function handleSubmitting(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(weight, height, age);
    }

    function handleWeightChange(e: ChangeEvent<HTMLInputElement>) {
        const newWeight = parseFloat(e.target.value);
        setWeight(isNaN(newWeight) ? undefined : newWeight);
    }

    function handleHeightChange(e: ChangeEvent<HTMLInputElement>) {
        const newHeight = parseFloat(e.target.value);
        setHeight(isNaN(newHeight) ? undefined : newHeight);
    }

    function handleAgeChange(e: ChangeEvent<HTMLInputElement>) {
        const newAge = parseFloat(e.target.value);
        setAge(isNaN(newAge) ? undefined : newAge);
    }

    return (
        <div>
            <form onSubmit={handleSubmitting}>
                <section>
                    <label>Enter your weight in kg</label>
                    <input type="number" value={weight ?? ''} onChange={handleWeightChange} />
                </section>
                <section>
                    <label>Enter your height in cm</label>
                    <input type="number" value={height ?? ''} onChange={handleHeightChange} />
                </section>
                <section>
                    <label>Enter your age</label>
                    <input type="number" value={age ?? ''} onChange={handleAgeChange} />
                </section>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default BmrForm;
