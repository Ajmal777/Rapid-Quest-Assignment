import React from "react";
import RetirementIncome from "./RetirementIncome";
import Contributions from "./Contributions";
import Compare from "./Compare";

const Middle = () => {
    const stylesObj = {
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        padding: '1rem 2.5rem',
        boxSizing: 'border-box',
    };
    return (
        <div className="middle" style={stylesObj}>
            <RetirementIncome year={2056} />
            <Contributions />
            <Compare />
        </div>
    );
};

export default Middle;
