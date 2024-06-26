import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';

function PieChart() {
  const data = {
    labels: ['Meet conditions', 'Not meet conditions'],
    datasets: [
      {
        data: [3, 4],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
}

export default PieChart;