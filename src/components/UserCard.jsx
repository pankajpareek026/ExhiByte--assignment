import React, { useContext } from 'react'
import PointComponent from './PointComponent'
import UserDataContext from '../context/userDataContext';




const UserCard = ({ userData }) => {

    // access data from context api
    const { filteredData, setFilteredData } = useContext(UserDataContext)

    // to formate date
    const date = new Date(userData.join_date).toLocaleDateString();

    // formate  twubric values
    const { total, friends, influence, chirpiness } = userData.twubric


    // to remove selected user from list
    const removeHandler = (uid) => {
        console.log("uid=>", uid)
        const newFiltederData = filteredData.filter(user => user.uid !== uid)
        setFilteredData(newFiltederData)
    }


    return (

        <div className='grid  rounded-lg m-1 mb-3 h-[auto] ml-[2%] w-[46%] bg-[#2d3250]'>

            <div className='ml-[auto] h-[35px] p-1 rounded-tr-md justify-center w-[35px] mt0 text-center bg-[#f6b17a] font-black text-md'>{total}</div>
            <img className=' ml-[auto] mr-[auto] mt-2 mb-2 rounded-[100px] h-[65px] w-[65px] ' src={userData.image} alt="" />
            <div className='flex'>

                <div className='  text-[#f6b17a] text-2xl text-center mr-[auto] ml-[auto] text-bold ' >
                    {userData.username}
                </div>

            </div>


            <p className='text-white  pl-2 underline text-center text-bold'>Joining date :{date}</p>

            {/* continer to for all scors like friends ,chirpiness */}
            <div className='flex mt-2 p-1  pt-0 justify-around w-[100%]'>

                <PointComponent name={"Friends"} value={friends} />
                <PointComponent name={"Influence"} value={influence} />
                <PointComponent name={"Chirpiness"} value={chirpiness} />

            </div>


            <button onClick={() => removeHandler(userData.uid)} className='text-red-900  h-auto text-center bg-[#f6b17a] mb-0 rounded-br-md rounded-bl-md text-2xl hover:text-black'>Remove</button>
        </div>
    )
}

export default UserCard