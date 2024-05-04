import React, { useContext, useState } from 'react'
import SortButton from './SortButton'
import UserDataContext from '../context/userDataContext'


const SortingButtonsContainer = () => {
  const {
    filteredData,
    setFilteredData
  } = useContext(UserDataContext);


  const [sortCriteria, setSortCriteria] = useState({
    twubric: null,
    friends: null,
    influence: null,
    chirpiness: null
  })

  const handleSort = (criteria) => {

    //  to store current sortCriteria 
    const newSortCriteria = { ...sortCriteria }


    // set all other criterias null to insure onle one button button should be selected at  time
    Object.keys(newSortCriteria).forEach(key => {
      if (key !== criteria) {
        newSortCriteria[key] = null;
      }
    });


    // if sort criteral is null then set sort criteria to ascending for given field /criteria
    if (!sortCriteria[criteria]) {
      newSortCriteria[criteria] = 'asc'
    }


    // if sort criteria is ascending then set sort criteria to descending for given field /criteria
    else if (sortCriteria[criteria] === 'asc') {
      newSortCriteria[criteria] = 'desc'
    }


    // otherwise set sort criteria to null
    else {
      newSortCriteria[criteria] = null
    }


    const newSortedData = [...filteredData].sort((a, b) => {

      // if the criteria is twubric the sort according to total twubric score/total
      if (criteria == 'twubric' && newSortCriteria[criteria] !== null) {
        return newSortCriteria[criteria] == 'asc' ? a.twubric.total - b.twubric.total : b.twubric.total - a.twubric.total
      }


      //criteria is friends
      if (criteria == 'friends' && newSortCriteria[criteria] !== null) {
        return newSortCriteria[criteria] == 'asc' ? a.twubric.friends - b.twubric.friends : b.twubric.friends - a.twubric.friends
      }


      // if criteria is influence
      if (criteria === 'influence' && newSortCriteria[criteria] !== null) {
        return newSortCriteria[criteria] === 'asc' ? a.twubric.influence - b.twubric.influence : b.twubric.influence - a.twubric.influence
      }


      // if criteria is chirpness
      if (criteria == 'chirpiness' && newSortCriteria[criteria] !== null) {
        return newSortCriteria[criteria] === 'asc' ? a.twubric.chirpiness - b.twubric.chirpiness : b.twubric.chirpiness - a.twubric.chirpiness
      }
    })



    // set new values
    setSortCriteria(newSortCriteria)
    setFilteredData(newSortedData)

  }

  return (
    <div className='flex justify-around bg-[#7077a1] p-1 rounded-[10px] text-white'>

      {/* for sort by twubric score */}
      <SortButton
        order={sortCriteria.twubric}
        isActive={sortCriteria.twubric !== null}
        field={"twubric"} name={"Twubric Score"}
        onClick={handleSort} />

      {/* for sort by friends score */}
      <SortButton
        order={sortCriteria.friends}
        isActive={sortCriteria.friends !== null}
        field={"friends"}
        name={"Friends"}
        onClick={handleSort} />

      {/* for sort by influence score */}
      <SortButton
        order={sortCriteria.influence}
        isActive={sortCriteria.influence !== null}
        field={"influence"}
        name={"Influence"}
        onClick={handleSort} />

      {/* for sort by chirpiness score */}
      <SortButton
        order={sortCriteria.chirpiness}
        isActive={sortCriteria.chirpiness !== null}
        field={"chirpiness"}
        name={"Chirpness"}
        onClick={handleSort} />

    </div>
  )
}

export default SortingButtonsContainer




















