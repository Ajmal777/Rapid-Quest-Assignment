import React from "react";
import "./style.css";
import Button from "../../Common/Button";
import Money from "../../Common/Money";

const AccountDetails = () => {
    const styleObj = {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    };
    return (
        <div className="accountDetails" style={styleObj}>
            <h4 style={{ margin: 0, fontFamily: 'var(--heading-font)' }}>Today</h4>
            <Money amount={"$19,892"} desc="Amount balance" lg={true} />
            <Money amount={"$4,000"} desc="Year-to-date contribution" />
            <Money amount={"$1,892"} desc="Total Interest" />
            <Button style={{ width: "fit-content", padding: "0.5rem 1.25rem" }}>
                I want to
            </Button>
        </div>
    );
};

export default AccountDetails;
