import React, { FC } from 'react';
import { IExcersize } from '../models/IExcersize';

interface Props {
    excersize: IExcersize;
}

const LittleExcersizeCard: FC<Props> = ({ excersize }) => {
    return (
        <div className="flex mt-5 border-2 rounded-md max-w-xs">
                <img src="https://cdn.shopify.com/s/files/1/0104/9926/0474/articles/How-to-Bench_01.jpg?v=1670476882" 
                    className="w-32 h-32 rounded-md"
                    />
            <div className="flex flex-col text-center justify-center">
                <h1 className="text-xl">{excersize.name}</h1>
                <p className="overflow-hidden max-h-16 leading-tight line-clamp-3">
                {excersize.description}</p>
                <div className="flex flex-row justify-center mt-1">
                    <h2 className="text-gray-500">Muscles : </h2>
                    {excersize.muscle.map((name) => (
                        <h2 key={name} className="text-gray-500">{name}&nbsp;</h2>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default React.memo(LittleExcersizeCard);
