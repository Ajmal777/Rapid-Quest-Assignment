import React from "react";
import Money from "../../Common/Money";

const RetirementIncome = ({ year }) => {
    const incomeStyle = {
      paddingBottom: '0.5rem',
      borderBottom: '1.5px solid #6754FE',
      minWidth: '10rem'
    }
    const incomeFlexStyle = {
      display: 'flex',
      gap: '2.5rem',
      marginTop: '1.5rem'
    }
    return (
        <div className="ret-income">
            <div className="header" style={{ fontFamily: 'var(--heading-font)'}}>
              <h4 style={{ color: '#6754FE', margin: 0}}>Retirement Income</h4>
              <h2 style={{ margin: 0}}>Starting Year {year}</h2>
            </div>
            <div className="incomes" style={incomeFlexStyle}>
              <Money style={incomeStyle} lg={true} amount={'$300,000'} desc={'My Goal'} />
              <Money style={incomeStyle} lg={true} amount={'59%'} desc={'Goal Achieved'} />
              <Money style={incomeStyle} lg={true} amount={'$300'} desc={'Est. Monthly Income'} />
            </div>
        </div>
    );
};

export default RetirementIncome;
