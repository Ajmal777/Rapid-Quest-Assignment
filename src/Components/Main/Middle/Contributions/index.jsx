import React from 'react'
import Chart from './Chart'

const Contributions = () => {
  return (
    (
        <div className='contributions'>
            <h3 style={{margin: 0, fontFamily: 'var(--heading-font)'}}>Contributions Overtime</h3>
            <Chart />
        </div>
    )
  )
}

export default Contributions