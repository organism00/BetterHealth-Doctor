// NightingaleChart.js
import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend, RadialLinearScale } from 'chart.js';

// Registering necessary components for Chart.js
Chart.register(ArcElement, Tooltip, Legend, RadialLinearScale);

const NightingaleChart = () => {
    const data = {
        labels: ['Male', 'Female', 'Child', 'Germany'],
        datasets: [
            {
                label: 'Population',
                data: [30, 25, 30, 25], // Example data percentages
                backgroundColor: [
                    '#6B46C1', // Violet for Male
                    '#F56565', // Red for Female
                    '#4299E1', // Blue for Child
                    '#48BB78', // Green for Germany
                ],
                // Set borderWidth to 0 to remove the surrounding lines
                borderWidth: 0,
                borderColor: 'transparent',
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                position: 'right', // Legend on the right side
                labels: {
                    usePointStyle: true, // Use bullet style for legend
                },
            },
            tooltip: {
                enabled: true,
                callbacks: {
                    // Show only label and value on hover
                    label: function (tooltipItem) {
                        const value = tooltipItem.raw;
                        const label = tooltipItem.label;
                        return `${label}: ${value}%`;
                    },
                },
            },
        },
        // Lighten color on hover
        hover: {
            mode: 'index',
            onHover: (e, elements) => {
                if (elements.length > 0) {
                    const element = elements[0].element;
                    element.options.backgroundColor = lightenColor(
                        element.options.backgroundColor
                    );
                }
            },
        },
        scales: {
            r: {
                ticks: {
                    display: false, // Hide radial scale numbers
                },
                grid: {
                    color: 'transparent', // Remove grid lines (radial lines)
                },
            },
        },
        responsive: true,
        maintainAspectRatio: false,
    };

    // Function to lighten the background color on hover
    const lightenColor = (color) => {
        const colors = {
            '#6B46C1': '#9F7AEA',  // Lighter violet
            '#F56565': '#FEB2B2',  // Lighter red
            '#4299E1': '#90CDF4',  // Lighter blue
            '#48BB78': '#9AE6B4',  // Lighter green
        };
        return colors[color] || color;
    };

    return (
        <div style={{ width: '100%', height: '200px', position: 'relative' }}>
            {/* Chart */}
            <PolarArea data={data} options={options} />
        </div>
    );
};

export default NightingaleChart;
