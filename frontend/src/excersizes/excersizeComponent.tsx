import React from 'react';
import LittleExcersizeCard from "./littleExcersizeCard";
import {IExcersize} from "../models/IExcersize";

const ExcersizeComponent = () => {
    const excersize:IExcersize= {
        id:0,
        name: "Bench press",
        description: "The bench press, or chest press, is a weight training exercise where a person presses a weight upwards while lying on a weight training bench. Although the bench press is a full-body exercise, the muscles primarily used are the pectoralis major, the anterior deltoids, and the triceps, among other stabilizing muscles. A barbell is generally used to hold the weight, but a pair of dumbbells can also be used.",
        videoLink:"https://www.youtube.com/watch?v=HnQGKxU3eds&ab_channel=SquatUniversity",
        muscle:["triceps", "chest"],
        images:["https://cdn.shopify.com/s/files/1/0104/9926/0474/articles/How-to-Bench_01.jpg?v=1670476882"],
    }
    return (
        <div className="mt-24 flex flex-row align-middle justify-center">
        <LittleExcersizeCard excersize={excersize}></LittleExcersizeCard>
        </div>
    );
};

export default ExcersizeComponent;