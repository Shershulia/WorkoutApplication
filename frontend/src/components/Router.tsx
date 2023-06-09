import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CalculatorOfCalories from "../calculator/calculatorOfCalories";
import ExcersizeComponent from "../excersizes/excersizeComponent";
import ExcersiseDetail from "../excersizes/excersiseDetail";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<CalculatorOfCalories/>} />
                <Route path="/exercises" element={<ExcersizeComponent/>} />
                <Route path="/exercises/:id" element={<ExcersiseDetail />} />
                <Route path="*" element={<div>Not page found</div>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;