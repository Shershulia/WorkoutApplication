import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import CalculatorOfCalories from './calculator/calculatorOfCalories'
import NavigationBar from "./navbar/navigationBar";
import Router from "./components/Router";

// @ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
      <NavigationBar></NavigationBar>
      <Router></Router>
  </React.StrictMode>,
)
