import React, { useState } from 'react';
import UserDataContext from './userDataContext';
import userData from '../resources/userData.json';
const UserDataContextProvider = ({ children }) => {
   
    const [data, setData] = useState(userData);

    const [filteredData, setFilteredData] = useState(data);



    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());

    return (
        <UserDataContext.Provider value={{
            data,
            setData,
            filteredData,
            setFilteredData,
            fromDate,
            setFromDate,
            toDate,
            setToDate
        }}>
            {children}
        </UserDataContext.Provider>
    );
};

export default UserDataContextProvider;
