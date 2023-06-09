import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CalculatorOfCalories from "../calculator/calculatorOfCalories";
import ExcersizeComponent from "../excersizes/excersizeComponent";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<CalculatorOfCalories/>} />
                <Route path="/exercises" element={<ExcersizeComponent/>} />
                <Route path="*" element={<div>Not page found</div>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;