import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { LineChartData } from './FAKE_DATA';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const LineGraph = ({ selectedMember }) => {
  const data = {
    labels: LineChartData.labels,
    datasets: LineChartData.datasets.filter(dataset => dataset.label.includes(selectedMember))
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' },
      title: { display: true, text: `Steps by ${selectedMember}` },
    }
  };

  return <Line options={options} data={data} />;
};
