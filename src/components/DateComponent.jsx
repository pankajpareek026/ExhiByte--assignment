import React from 'react'

const DateComponent = ({ onChange, currentState }) => {
    // console.log("currentState: " + currentState)
    return (

        <input className='bg-[#2d3250] text-[#f6b17a] text-center rounded-[5px] ml-[auto] mr-[auto] mb-[1%]'
            type="date" onChange={(e) => onChange(e)}
            value={currentState} />

    )
}

export default DateComponent