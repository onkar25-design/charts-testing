export const LineChartData = {
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  datasets: [
    {
      label: "Mom",
      data: [7000, 8000, 7500, 9000, 8500, 9500, 10000],
      borderColor: "red",
      backgroundColor: "rgba(255,0,0,0.2)",
      fill: true,
      tension: 0.4,
    },
    {
      label: "Dad",
      data: [6000, 7000, 6500, 7500, 7000, 8500, 9000],
      borderColor: "blue",
      backgroundColor: "rgba(0,0,255,0.2)",
      fill: true,
      tension: 0.4,
    },
    {
      label: "Son",
      data: [3000, 4000, 3500, 5000, 4500, 6000, 6500],
      borderColor: "green",
      backgroundColor: "rgba(0,255,0,0.2)",
      fill: true,
      tension: 0.4,
    },
  ],
};

export const BarChartData = {
  labels: ["Walking", "Running", "Cycling", "Yoga", "Swimming", "Gym"],
  datasets: [
    {
      label: "Mom",
      data: [300, 400, 350, 200, 500, 600],
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
    },
    {
      label: "Dad",
      data: [250, 350, 400, 150, 450, 550],
      backgroundColor: "rgba(54,162,235,0.2)",
      borderColor: "rgba(54,162,235,1)",
      borderWidth: 1,
    },
    {
      label: "Son",
      data: [100, 150, 200, 100, 250, 300],
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
      borderWidth: 1,
    },
  ],
};

export const PieChartData = {
  labels: ["Exercising", "Working", "Relaxing", "Sleeping", "Eating"],
  datasets: [
    {
      label: "Mom",
      data: [20, 30, 20, 25, 5],
      backgroundColor: [
        "rgba(255,99,132,0.2)",
        "rgba(54,162,235,0.2)",
        "rgba(255,206,86,0.2)",
        "rgba(75,192,192,0.2)",
        "rgba(153,102,255,0.2)",
      ],
      hoverOffset: 40,
    },
    {
      label: "Dad",
      data: [15, 35, 25, 20, 5],
      backgroundColor: [
        "rgba(255,99,132,0.2)",
        "rgba(54,162,235,0.2)",
        "rgba(255,206,86,0.2)",
        "rgba(75,192,192,0.2)",
        "rgba(153,102,255,0.2)",
      ],
      hoverOffset: 40,
    },
    {
      label: "Son",
      data: [25, 25, 15, 30, 5],
      backgroundColor: [
        "rgba(255,99,132,0.2)",
        "rgba(54,162,235,0.2)",
        "rgba(255,206,86,0.2)",
        "rgba(75,192,192,0.2)",
        "rgba(153,102,255,0.2)",
      ],
      hoverOffset: 40,
    },
  ],
};

export const DoughnutChartData = {
  labels: ['Work', 'Study', 'Exercise', 'Leisure', 'Sleep'],
  datasets: [
    {
      label: 'Mom',
      data: [30, 20, 15, 25, 10],
      backgroundColor: [
        'rgba(255,99,132,0.2)',
        'rgba(54,162,235,0.2)',
        'rgba(255,206,86,0.2)',
        'rgba(75,192,192,0.2)',
        'rgba(153,102,255,0.2)',
      ],
      hoverOffset: 4,
    },
    {
      label: 'Dad',
      data: [25, 30, 20, 15, 10],
      backgroundColor: [
        'rgba(255,99,132,0.2)',
        'rgba(54,162,235,0.2)',
        'rgba(255,206,86,0.2)',
        'rgba(75,192,192,0.2)',
        'rgba(153,102,255,0.2)',
      ],
      hoverOffset: 4,
    },
    {
      label: 'Son',
      data: [20, 25, 30, 15, 10],
      backgroundColor: [
        'rgba(255,99,132,0.2)',
        'rgba(54,162,235,0.2)',
        'rgba(255,206,86,0.2)',
        'rgba(75,192,192,0.2)',
        'rgba(153,102,255,0.2)',
      ],
      hoverOffset: 4,
    },
  ],
};

