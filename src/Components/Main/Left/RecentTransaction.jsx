import React from 'react'

const Transaction = ({ date, desc }) => {
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.1rem',
    padding: '0.75rem 0',
    borderBottom: '1px solid #a6a7a7c5'
  }
  return (
  <div className="transaction" style={containerStyles}>
    <span style={{ fontSize: '0.9rem', color: "#757575"}} className="date">{date}</span>
    <span style={{ fontSize: '0.9rem', color: '#2E2F2F', fontWeight: 600}} className="desc">{desc}</span>
  </div>
  )
}

const RecentTransaction = () => {
  const transactions = [
    {date: '2020-08-07', desc: 'Withdrawal Transfer to Bank-XXX11'},
    {date: '2020-07-21', desc: 'Withdrawal Transfer to Bank-XXX11'},
    {date: '2020-07-16', desc: 'Withdrawal Transfer to Bank-XXX11'},
  ]
  return (
    <div className='transaction-history'>
        <h4 style={{ fontFamily: 'var(--heading-font)'}}>Recent Transactions</h4>
        {transactions.map(t => <Transaction date={t.date} desc={t.desc} />)}
    </div>
  )
}

export default RecentTransaction