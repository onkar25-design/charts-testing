import React, { useState } from 'react';
import './App.css';
import { LineGraph } from './components/Line';
import { BarGraph } from './components/Bar';
import { PieGraph } from './components/Pie';
import {DoughnutChart} from './components/DoughnutChart';

function App() {
  const [selectedMember, setSelectedMember] = useState('Mom');

  const handleSelectChange = (event) => {
    setSelectedMember(event.target.value);
  };

  return (
    <div className='App'>
      <h1>Family Activity Dashboard</h1>
      <select onChange={handleSelectChange} value={selectedMember}>
        <option value="Mom">Mom</option>
        <option value="Dad">Dad</option>
        <option value="Son">Son</option>
      </select>
      <div className="graph-section">
        <div className="graph-item">
          <LineGraph selectedMember={selectedMember} />
        </div>
        <div className="description">
          <h2>Line Graph</h2>
          <p>This graph represents the number of steps taken by Mom Dad and Son over a week. It shows Days and Number of steps by an individual.</p>
        </div>
      </div>
      <div className="graph-section">
        <div className="graph-item">
          <BarGraph selectedMember={selectedMember} />
        </div>
        <div className="description">
          <h2>Bar Graph</h2>
          <p>This bar graph shows the calories burned by the family members. It shoes all the exercises and how much calories they are burning </p>
        </div>
      </div>
      <div className="graph-section">
        <div className="graph-item">
          <DoughnutChart selectedMember={selectedMember} />
        </div>
        <div className="description">
          <h2>Doughnut Graph</h2>
          <p>This doughnut chart displays Daily routine of the family. It provides all the work done by an individual.</p>
        </div>
      </div>
      <div className="graph-section">
        <div className="graph-item">
          <PieGraph selectedMember={selectedMember} />
        </div>
        <div className="description">
          <h2>Pie Graph</h2>
          <p>The pie chart illustrates the percentage distribution of time spent on various Activities. It helps in understanding the proportion of time spent on each activity.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
