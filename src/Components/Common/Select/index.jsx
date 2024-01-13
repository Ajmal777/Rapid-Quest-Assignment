import React from "react";
import "./style.css";

const Select = ({ label, options }) => {
    return (
        <div className="select">
            <label htmlFor="select">{label}</label>
            <select id="select">
                {options.map((val, key) => (
                    <option key={key} value={val}>
                        {val}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
