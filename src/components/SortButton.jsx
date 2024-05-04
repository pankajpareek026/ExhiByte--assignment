import React from 'react'
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import ArrowDropUpSharpIcon from '@mui/icons-material/ArrowDropUpSharp';


const SortButton = ({ name, onClick, field, isActive, order }) => {

    // arrow icon base on the sorting order
    const icon = order === 'asc' ? <ArrowDropUpSharpIcon /> : order == 'desc' ? <ArrowDropDownSharpIcon /> : ""

    return (


        <button className={`font-bold pt-2 pb-2 pl-5 pr-5  w-auto rounded-[9px] h-[100%] ${isActive ? 'bg-[#f6b17a] text-black' : ''}`}
            onClick={() => onClick(field)}>
            {name} {icon}
        </button>

    )
}

export default SortButton