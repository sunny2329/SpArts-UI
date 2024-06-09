import { useState } from 'react'
import Main from './Components/Main'
import Sidebar from './Components/Sidebar'


function App() {

  return (
    <>
      <div className="main flex w-full">
        <div className='h-[90vh] w-[6%]'>
          <Sidebar />
        </div>
        <div className='bg-white rounded-2xl h-[91vh] w-full ml-5 mt-6 mr-5'>
          <Main />
        </div>
 
      </div>
    </>
  )
}

export default App
