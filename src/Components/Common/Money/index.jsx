import React from "react";

const Money = ({ amount, desc, lg, style }) => {
    const amountStyle = {
        color: '#2B2B2B',
        fontWeight: 700,
        fontSize: lg ? "1.5rem" : "1rem",
        fontFamily: 'var(--heading-font)'
    }

    const descStyle = {
        color: '#757575',
        fontSize: '0.8rem'
    }

    const styleObj = {
        display: 'flex',
        flexDirection: 'column',
        ...style
    }

    return (
        <div className="money" style={styleObj}>
            <span
                className="amount"
                style={amountStyle}
            >
                {amount}
            </span>
            <span style={descStyle} className="description">{desc}</span>
        </div>
    );
};

export default Money;