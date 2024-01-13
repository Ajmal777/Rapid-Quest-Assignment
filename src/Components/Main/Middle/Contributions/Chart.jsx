import React from "react";
import { Chart as barChart } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const Chart = (props) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: false,
            },
        },
        scales: {
            y: {
                ticks: {
                    callback: function (value, index, ticks) {
                        return "$" + value;
                    },
                },
            },
        },
    };
    const chartData = {
        labels: [20, 25, 30, 35, 40, 60, 65, 70, 75, 80, 85, 90],
        datasets: [
            {
                label: "Employee",
                data: [50, 55, 60, 65, 70, 75, 100, 110, 120, 140, 160, 180],
                backgroundColor: "#4834FF",
                borderWidth: 0,
            },
            {
                label: "Employer",
                data: [30, 25, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
                backgroundColor: "#0800A3",
                borderWidth: 0,
            },
            {
                label: "Total Interest",
                data: [
                    80, 90, 100, 110, 130, 150, 190, 210, 240, 260, 280, 320,
                ],
                backgroundColor: "#85AFFF",
                borderWidth: 0,
            },
        ],
    };
    return <Bar options={options} data={chartData} />;
};

export default Chart;
