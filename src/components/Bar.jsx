import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { BarChartData } from './FAKE_DATA';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const BarGraph = ({ selectedMember }) => {
  const index = selectedMember === 'Mom' ? 0 : selectedMember === 'Dad' ? 1 : 2;

  const data = {
    labels: BarChartData.labels,
    datasets: [BarChartData.datasets[index]]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' },
      title: { display: true, text: `Calories Burned by ${selectedMember}` },
    }
  };

  return <Bar options={options} data={data} />;
};
