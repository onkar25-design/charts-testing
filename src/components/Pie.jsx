import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { PieChartData } from './FAKE_DATA';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

export const PieGraph = ({ selectedMember }) => {
  const index = selectedMember === 'Mom' ? 0 : selectedMember === 'Dad' ? 1 : 2;

  const data = {
    labels: PieChartData.labels,
    datasets: [PieChartData.datasets[index]]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' },
      title: { display: true, text: `Time Spent by ${selectedMember}` },
    }
  };

  return <Pie options={options} data={data} />;
};
