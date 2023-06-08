import React, {FC} from 'react';
import {
    Chart as ChartJs,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";
import {Doughnut} from "react-chartjs-2";

ChartJs.register(
    ArcElement,
    Tooltip,
    Legend
)

interface Props{
    protein:number;
    carbs: number;
    fats: number;
}
const Diagram:FC<Props> = ({protein,carbs,fats}) => {
    const newData = {
        labels: ["Protein","Carbs","Fats"],
        datasets:[{
            label: "%",
            data:[protein,carbs,fats],
            backgroundColor: ["blue","red","yellow"],
            borderColor:["blue","red","yellow"]
        }]
    }
    const newOptions={}
    return (
        <div>
            <div>
                <Doughnut data={newData} options={newOptions}></Doughnut>
            </div>
        </div>
    );
};

export default Diagram;