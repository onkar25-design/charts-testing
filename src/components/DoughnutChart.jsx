import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { DoughnutChartData } from './FAKE_DATA';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

export const DoughnutChart = ({ selectedMember }) => {
  const data = {
    labels: DoughnutChartData.labels,
    datasets: [DoughnutChartData.datasets.find(dataset => dataset.label === selectedMember)]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' },
      title: { display: true, text: `Daily Routine of ${selectedMember}` },
    }
  };

  return <Doughnut options={options} data={data} />;
};
