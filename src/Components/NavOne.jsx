import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { faAngleDown, faBell, faTableList } from '@fortawesome/free-solid-svg-icons'
import Face from '../face.jpg'
function NavOne({searchQuery, setSearchQuery}) {
    
    return (
        <div className='flex justify-between items-center p-3 border-[1px] border-b-gray-300 border-l-0 border-r-0 border-t-0 w-full'>

            <div className='students flex justify-start items-center ml-7'>
                <h1 className='mr-4 text-2xl font-bold'>Students</h1>
                <div className='border rounded-2xl p-2 text-2xl text-purple-700 border-purple-300 font-bold'>
                    82
                </div>
            </div>

            <div className='flex items-center w-[50%] justify-between mr-7'>
                <div className='search border-2 border-b-gray-500 border-t-0 border-r-0 border-l-0 w-[50%] mr-9'>
                    <FontAwesomeIcon className="text-purple-800" icon={faMagnifyingGlass} />
                    <input type="text" placeholder='Search First Name' value={searchQuery} onChange={(e) => {
                        setSearchQuery(e.target.value)
                    }} className='ml-2 focus:outline-none' />
                </div>

                <FontAwesomeIcon className='text-purple-800 text-xl cursor-pointer' icon={faTableList}/>
                <FontAwesomeIcon className='text-purple-800 text-xl cursor-pointer' icon={faBell}/>

                <div className='face flex items-center justify-between w-[15%]'>
                    <div>
                        <img src={Face} className='rounded-full  w-[60px] h-[60px]'  alt="" />
                    </div>
                    <div>
                        <FontAwesomeIcon className='text-purple-800 cursor-pointer' icon={faAngleDown}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavOne
