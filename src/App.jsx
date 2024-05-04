import React, { useState } from 'react'
import './App.css'
import UsersContainer from './components/UsersContainer'
import UserDataContextProvider from './context/UserDataContextProvider'

function App() {

  return (
    <>

      <UserDataContextProvider>
        <div className='bg-[#2d3250] w-[100vw] overflow-hidden h-[100vh]'>
          <h1 className=' text-center text-[#f6b17a]  text-[55px]'>Twubick</h1>
          <section className='flex justify-around w-[100vw]'>
            <UsersContainer />
          </section>
        </div >
      </UserDataContextProvider>
    </>
  )
}

export default App


