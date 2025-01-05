// Bar Chart: Internship Placements
const barChartCtx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(barChartCtx, {
  type: 'bar',
  data: {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
    datasets: [
      {
        label: 'CS',
        data: [10, 15, 20, 25, 30, 35, 40, 30, 25, 20, 15, 10],
        backgroundColor: '#007bff',
      },
      {
        label: 'IS',
        data: [8, 12, 18, 22, 28, 34, 38, 28, 22, 18, 12, 8],
        backgroundColor: '#80d4ff',
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true }
    },
    scales: {
      y: { beginAtZero: true }
    }
  }
});

// Donut Chart: Job Roles
const donutChartCtx = document.getElementById('donutChart').getContext('2d');
const donutChart = new Chart(donutChartCtx, {
  type: 'doughnut',
  data: {
    labels: ['Software Engineering', 'QA', 'Data Analytics'],
    datasets: [
      {
        data: [40, 32, 28],
        backgroundColor: ['#007bff', '#80d4ff', '#cceeff'],
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' },
      tooltip: { enabled: true }
    }
  }
});
