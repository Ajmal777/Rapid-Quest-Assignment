import React from "react";
import Select from "../../Common/Select";
import { Chart as ChartJS } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
const ProgressChart = ({ percent, label }) => {
    const options = {
        cutout: '80%',
        responsive: true,
        aspectRatio: 1 | 1,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
            animation: {
                duration: 1000,
            },
        },
    };
    const data = {
        labels: ["Progress", "Remaining"],
        datasets: [
            {
                data: [percent, 100 - percent],
                backgroundColor: ["#23D7AA", "#D2F7EF"],
                borderWidth: 0,
            },
        ],
    };
    return (
        <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', width: 'max-content'}}>
            <div style={{ position: 'relative', width: 'max-content', maxHeight: '100px'}}>
                <Pie className="pie" options={options} data={data} />
                <span
                    style={{
                        fontSize: '1.5rem',
                        fontWeight: '600',
                        position: "absolute",
                        top: "45%",
                        left: "50%",
                        transform: "translate(-40%, -50%)",
                        zIndex: 1000,
                    }}
                >
                    {percent}%
                </span>
            </div>
            <div style={{ fontSize: '1rem', fontWeight: '600', textAlign: 'center' }}>{label}</div>
        </div>
    );
};

const Compare = () => {
    const styleObj = {
        display: 'flex',
        gap: '1.5rem',
        flexWrap: 'wrap'
    }
    return (
        <div className="compare" style={{ width: 'max-content'}}>
            <div className="header">
                <h4 style={{ margin: 0, fontFamily: 'var(--heading-font)' }}>How do I compare to my peers?</h4>
                <span style={{ fontSize: "0.9rem", color: "#BBBBBB" }}>
                    These numbers represents current goal achievement
                </span>
            </div>
            <div className="data" style={styleObj}>
                <div className="options">
                    <Select
                        label={"Age: "}
                        options={["Under 30", "30 - 40", "40 - 50"]}
                    />
                    <Select
                        label={"Salary: "}
                        options={["K 20 - K 30", "K 30 - K 40", "K 40 - K 50"]}
                    />
                    <Select
                        label={"Gender: "}
                        options={["Male", "Female", "Others"]}
                    />
                </div>
                <div className="progress-charts" style={{display: 'flex', gap: '1rem', maxWidth: '100px'}}>
                    <ProgressChart percent={78} label={"Average"}/>
                    <ProgressChart percent={95} label={"Top"}/>
                    <ProgressChart percent={59} label={"Me"}/>
                </div>
            </div>
        </div>
    );
};

export default Compare;
