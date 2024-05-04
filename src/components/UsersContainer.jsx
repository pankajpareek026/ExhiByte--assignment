import React, { useContext, useState } from 'react'
import SortingButtonsContainer from './SortingButtonsContainer';
import DatePicker from './DatePicker';
import UserCard from './UserCard';
import UserDataContext from '../context/userDataContext';


const UsersContainer = () => {

  // state menage sorting options
  const [showSortingOptions, setShowSortingOptions] = useState(false)


  const { filteredData } = useContext(UserDataContext)
  // console.log("data =>", data)

  return (

    <div className=' bg-[#424769] w-[85%] rounded-xl p-2 h-[86vh]    '>

      {/* continer for sort by headings and  total user count */}
      <div className='flex justify-between'>
        <h2 onClick={() => setShowSortingOptions(current => !current)} className=' cursor-pointer text-[#f6b17a] text-xl mb-1'>Sort by</h2>
        <h2 className='text-[#f6b17a] text-xl mb-1'>Total users :{filteredData?.length}</h2>
      </div>

      {/* sorting options */}
      {showSortingOptions && <SortingButtonsContainer />}

      <DatePicker />

      <hr className='mt-1' />

      <div className='w-70% overflow-scroll h-[60vh] md:h-[56vh] flex mt-5  flex-wrap '>
        {
          filteredData.length == 0 ? <p className='ml-auto mr-auto text-orange-500  text-[50px] text-center'>Nothing to Dispay</p>
            : filteredData?.map((data) => {
              return (
                <UserCard key={data.uid} userData={data} />
              )
            })
        }
      </div>

    </div>
  )
}

export default UsersContainer