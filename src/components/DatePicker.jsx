import React, { useContext } from 'react'
import DateComponent from './DateComponent'
import UserDataContext from './../context/userDataContext';




const DatePicker = () => {
  const { fromDate, setFromDate, toDate, setToDate, setFilteredData, data, filteredData } = useContext(UserDataContext)

  const dateHandler = (from, to) => {
    console.log("fromDate: ", from)
    console.log("toDate: ", to)


    // convert given dates into milliseconds
    const startingDate = Date.parse(from);
    const endingDate = Date.parse(to)


    // fileter data which lie between selected dates
    const newData = data.filter((data) => {
      if (data.join_date >= startingDate && data.join_date <= endingDate) return data
    })

    console.log("newData=>", newData)
    setFilteredData(newData)


  }
  return (
    <div className='grid bg-[#7077a1] pb-1 mt-2 w-[50%] h-[58px] rounded-md ml-[auto] md:w-[320px]'>

      <h2 className='text-center  color-black font-sm'>Joined between</h2>

      {/* container which cointains date input boxes and go butto */}
      <div className='flex'>

        <DateComponent currentState={fromDate} onChange={(e) => setFromDate(e.target.value)} />
        <DateComponent currentState={toDate} onChange={(e) => setToDate(e.target.value)} />
        <button onClick={() => dateHandler(fromDate, toDate)} className='bg-[#f6b17a] p-[3px] text-center w-[28px] mr-1 text-black font-[600] shadow-lg h-[28px] rounded-full'>Go</button>

      </div>

    </div>
  )
}

export default DatePicker