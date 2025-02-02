// document.addEventListener('DOMContentLoaded', () => {
//     // Bar Chart: Internship Placements
//     const barChartCtx = document.getElementById('barChart').getContext('2d');
//     new Chart(barChartCtx, {
//         type: 'bar',
//         data: {
//             labels: ['Software Eng.', 'Data Science', 'Full Stack Dev', 'Cyber Security', 'QA', 'Game Dev', 'App Dev'],
//             datasets: [
//                 {
//                     label: 'CS Students',
//                     data: [10, 15, 20, 17, 24, 14, 40],
//                     backgroundColor: '#007bff',
//                 },
//                 {
//                     label: 'IS Students',
//                     data: [8, 12, 18, 15, 20, 10, 36],
//                     backgroundColor: '#80d4ff',
//                 }
//             ]
//         },
//         options: {
//             responsive: true,
//             plugins: {
//                 legend: { display: true }
//             },
//             scales: {
//                 y: { beginAtZero: true }
//             }
//         }
//     });

//     // Donut Chart: Job Roles
//     const donutChartCtx = document.getElementById('donutChart').getContext('2d');
//     new Chart(donutChartCtx, {
//         type: 'doughnut',
//         data: {
//             labels: ['Software Eng.', 'QA', 'Data Analytics', 'Others'],
//             datasets: [
//                 {
//                     data: [35, 30, 25, 10],
//                     backgroundColor: ['#007bff', '#80d4ff', '#cceeff', '#b3ebf2'],
//                 }
//             ]
//         },
//         options: {
//             responsive: true,
//             plugins: {
//                 legend: { position: 'bottom' },
//                 tooltip: { enabled: true }
//             }
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    // Bar Chart: Internship Placements
    const barChartCtx = document.getElementById('barChart').getContext('2d');
    new Chart(barChartCtx, {
        type: 'bar',
        data: {
            labels: ['Software Eng.', 'Data Science', 'Full Stack Dev', 'Cyber Security', 'QA', 'Game Dev', 'App Dev'],
            datasets: [
                {
                    label: 'CS Students',
                    data: [10, 15, 20, 17, 24, 14, 40],
                    backgroundColor: '#69A1B6',  // Light Blue from Screenshot
                    borderColor: '#447891',       // Darker Blue
                    borderWidth: 2,
                },
                {
                    label: 'IS Students',
                    data: [8, 12, 18, 15, 20, 10, 36],
                    backgroundColor: '#A3C4DA',  // Softer Blue
                    borderColor: '#5D92A4',
                    borderWidth: 2,
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { 
                    display: true, 
                    labels: { color: '#000' } // Black text for better visibility
                },
                tooltip: { enabled: true }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { color: '#000' }, // Change Axis Label Color to Black
                    grid: { color: '#ccc' } // Lighter Grid Lines
                },
                x: {
                    ticks: { color: '#000' }, // Change X-axis labels to black
                    grid: { color: '#ddd' }
                }
            }
        }
    });

    // Donut Chart: Job Roles
    const donutChartCtx = document.getElementById('donutChart').getContext('2d');
    new Chart(donutChartCtx, {
        type: 'doughnut',
        data: {
            labels: ['Software Eng.', 'QA', 'Data Analytics', 'Others'],
            datasets: [
                {
                    data: [35, 30, 25, 10],
                    backgroundColor: ['#69A1B6', '#A3C4DA', '#CEE3F0', '#DDEBF7'], // Matching Light Blues
                    borderColor: '#fff', // White Borders
                    borderWidth: 2,
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { 
                    position: 'bottom', 
                    labels: { color: '#000' } // Change Legend Text to Black
                },
                tooltip: { enabled: true }
            }
        }
    });
});

