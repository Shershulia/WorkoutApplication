import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import CalculatorOfCalories from './calculator/calculatorOfCalories'
import NavigationBar from "./navbar/navigationBar";

// @ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <NavigationBar></NavigationBar>
    <CalculatorOfCalories></CalculatorOfCalories>
  </React.StrictMode>,
)
