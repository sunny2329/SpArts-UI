import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function NavTwo() {
  return (
    <div className='flex items-center justify-between w-[100%] mt-2'>
      <div className='ml-10'>
        <h2 className='text-gray-400'>Select school</h2>
        <select name="" id="" className='border-[1px] border-gray-200 rounded-md w-[200%] p-1 mt-1'>
            <option value="bigben">Big Ben</option>
            <option value="bigden">Big Den</option>
            <option value="bighen">Big Hen</option>
        </select>
      </div>

      <div className='flex justify-between w-[20%] items-center mr-14'>
        <div className='rounded-full border-[1px] border-black border-opacity-20 w-[2rem] h-[2rem] flex justify-center items-center'>
            <FontAwesomeIcon className='text-purple-800' icon={faFilter}/>
        </div>
        <div>
            <button className='bg-purple-800 text-white rounded-3xl p-2 w-[120%]'>+ Add a student</button>
        </div>
      </div>
    </div>
  )
}

export default NavTwo
