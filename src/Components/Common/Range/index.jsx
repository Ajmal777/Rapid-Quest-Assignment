import React from "react";
import "./style.css";
const Range = (props) => {
    const { onChange, label, min, max, displayValue, value } = props;
    return (
        <div className="range">
            <label htmlFor={label}>{label}</label>
            <div className="range-body">
                <input
                    type="range"
                    id={label}
                    min={min}
                    value={value}
                    max={max}
                    onChange={onChange}
                />
                <label htmlFor={label}>{displayValue}</label>
            </div>
        </div>
    );
};

export default Range;
