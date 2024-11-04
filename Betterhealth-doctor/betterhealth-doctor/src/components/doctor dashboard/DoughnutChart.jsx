// DoughnutChart.js
import React from 'react';
import ReactECharts from 'echarts-for-react';

const DoughnutChart = () => {
    const total = 990; // Total value
    const option = {
        tooltip: {
            trigger: 'item',
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            itemGap: 10,
           
        },
        series: [
            {
                name: name,
                type: 'pie',
                radius: ['50%', '70%'], // Inner and outer radius for the doughnut shape
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 0,
                    borderColor: '#fff',
                    borderWidth: 2,
                },
                label: {
                    show: false,
                    position: 'center',
                },
                emphasis: {
                    label: {
                        show: false,
                        fontSize: '20',
                        fontWeight: 'bold',
                    },
                },
                labelLine: {
                    show: false,
                },
                data: [
                    {
                        value: 440,
                        name: 'Woman',
                        itemStyle: {
                            color: '#6B46C1', // Violet color for Woman
                        },
                    },
                    {
                        value: 550,
                        name: 'Man',
                        itemStyle: {
                            color: '#B794F4', // Lighter violet color for Man
                        },
                    },
                ],
            },
        ],
        // Adding a graphic element to display total in the center
        graphic: [
            {
                type: 'text',
                left: 'center',
                top: 'center',
                style: {
                    text: total,
                    fill: '#333', // Color for the total text
                    font: ' 24px sans-serif',
                },
            },
        ],
    };

    return (
        <div style={{ width: '100%', height: '400px' }}>
            <ReactECharts option={option} />
        </div>
    );
};

export default DoughnutChart;
