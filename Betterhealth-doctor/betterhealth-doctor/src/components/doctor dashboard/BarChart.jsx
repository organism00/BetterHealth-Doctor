// BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Tooltip, Title } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Tooltip, Title);

const BarChart = () => {
    const data = {
        labels: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'], // Time labels
        datasets: [
            {
                label: 'Appointments',
                data: [5, 7, 12, 7, 3, 5, 6, 2, 8], // Example appointment data
                backgroundColor: '#5A67D8', // Bar color (purple)
                borderRadius: 5, // Rounded edges
                barThickness: 8, // Adjust thickness of the bars
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, // Make chart responsive
        plugins: {
            tooltip: {
                enabled: true,
                backgroundColor: '#fff', // White background
                titleColor: '#000', // Black title color
                bodyColor: '#000', // Black text color for values
                borderColor: '#5A67D8', // Purple border for the tooltip
                borderWidth: 1,
                cornerRadius: 8, // Rounded tooltip corners
                padding: 10,
                displayColors: false, // Hide the color indicator in the tooltip
                callbacks: {
                    label: function (tooltipItem) {
                        return `Total: ${tooltipItem.raw} Appointment${tooltipItem.raw > 1 ? 's' : ''}`; // Custom tooltip text
                    },
                    title: function (tooltipItems) {
                        return tooltipItems[0].label; // Display time in the title
                    },
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: false, // Hide gridlines for x-axis
                },
                ticks: {
                    color: '#6B7280', // Light gray for x-axis labels
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    display:false,
                    color: '#E5E7EB', // Light gray grid lines
                },
                ticks: {
                    display: false,
                    stepSize: 5, // Custom step size for y-axis
                    color: '#6B7280', // Light gray for y-axis labels
                },
            },
        },
    };

    return (
        <div style={{ width: '100%', height: '250px' }}>
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;
