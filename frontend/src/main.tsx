import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import CalculatorOfCalories from './calculator/calculatorOfCalories'

// @ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CalculatorOfCalories></CalculatorOfCalories>
  </React.StrictMode>,
)
