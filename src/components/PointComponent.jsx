import React from 'react'

const PointComponent = ({ name, value }) => {
    return (
        <div className='grid  rounded-md drop-shadow-2xl shadow-orange-100  text-center h-[70%]  mb-[5px] w-[32%] '>

            <div className='text-[#f6b17a] text-5xl'>{value}</div>
            <div className='bg-[#7077a1]  text-black rounded-br-md rounded-bl-md '>{name}</div>

        </div>

    )
}

export default PointComponent