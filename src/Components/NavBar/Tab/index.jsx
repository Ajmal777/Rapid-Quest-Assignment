import React from "react";
import './style.css'

const Tab = (props) => {
    const { children, active, onClick } = props;
    return <div className={"tab" + (active ? " active" : "")} onClick={onClick}>{children}</div>;
};

export default Tab;
