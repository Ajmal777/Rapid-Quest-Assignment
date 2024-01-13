import React from "react";
import "./style.css";
const Button = (props) => {
    const { className, onClick } = props;
    return (
        <button
            {...props}
            className={"btn " + (className ?? "")}
            onClick={onClick}
        >
            {props.prefix && <span className="btn-prefix">{props.prefix}</span>}
            {props.children && (
                <span className="btn-body">{props.children}</span>
            )}
            {props.suffix && <span className="btn-suffix">{props.suffix}</span>}
        </button>
    );
};

export default Button;