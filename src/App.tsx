import React from 'react';
// import ReactEcharts from 'echarts-for-react'
import './App.css';
import ScatterChart from './Components/ScatterChart';
import BarChart from './Components/BarChart';

function App() {
  return (
    <div className="App">
      <div className = "ScatterChart">
        <h3>Scatter plot of Color Intensity and Hue</h3>
        <ScatterChart/>
      </div>
     
      <div className = "BarChart">
        <h3>Bar Chart showing Average Malic Acid for each class of Alcohol</h3>
        <BarChart/>
      </div>
    </div>
  );
}

export default App;
