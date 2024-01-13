import React, { useState } from "react";
import Range from "../../../Common/Range";
import "./style.css";
import Button from "../../../Common/Button";

const RetirementStrategy = () => {
    const [contribution, setContribution] = useState(0);
    const [age, setAge] = useState(0);
    const handleContribution = (e) => {
        setContribution(e.target.value);
    };
    const handleAgeChange = (e) => {
        setAge(e.target.value);
    };
    return (
        <div className="retirement">
            <h3 style={{ margin: 0, fontFamily: 'var(--heading-font)' }}>Retirement Strategy</h3>
            <div className="ranges">
                <Range
                    label={"Employee contribution"}
                    min={0}
                    max={12}
                    onChange={handleContribution}
                    displayValue={contribution + "%"}
                    value={contribution}
                />
                <Range
                    label={"Retirement Age"}
                    min={0}
                    max={100}
                    displayValue={age}
                    value={age}
                    onChange={handleAgeChange}
                />
            </div>
            <div className="stats">
                <div className="item">
                    <span>Employer Contribution</span>
                    <span>8.4%</span>
                </div>
                <div className="item">
                    <span>Interest Rate</span>
                    <span>5%</span>
                </div>
            </div>
            <Button>Update</Button>
            <a href="#">View Help Docs {'>'} </a>
        </div>
    );
};

export default RetirementStrategy;
