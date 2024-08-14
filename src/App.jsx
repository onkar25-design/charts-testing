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
          <p>This graph represents the number of steps taken by Mom and Dad over a week. It shows trends and comparisons of their daily activity levels.</p>
        </div>
      </div>
      <div className="graph-section">
        <div className="graph-item">
          <BarGraph selectedMember={selectedMember} />
        </div>
        <div className="description">
          <h2>Bar Graph</h2>
          <p>This bar graph shows the expenses in various categories like Rent, Groceries, Utilities, Entertainment, and Transportation. It helps in understanding where most of the budget is allocated.</p>
        </div>
      </div>
      <div className="graph-section">
        <div className="graph-item">
          <DoughnutChart selectedMember={selectedMember} />
        </div>
        <div className="description">
          <h2>Doughnut Graph</h2>
          <p>This doughnut chart displays the distribution of time spent on different social media platforms. It provides insights into which platforms are most engaging.</p>
        </div>
      </div>
      <div className="graph-section">
        <div className="graph-item">
          <PieGraph selectedMember={selectedMember} />
        </div>
        <div className="description">
          <h2>Pie Graph</h2>
          <p>The pie chart illustrates the percentage distribution of time spent on various social media platforms. It helps in understanding the proportion of time spent on each platform.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
