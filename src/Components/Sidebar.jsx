import React from 'react'
import Logo from '../Arrow.svg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faCalendar, faGear, faGraduationCap, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faChartColumn } from '@fortawesome/free-solid-svg-icons/faChartColumn'


function Sidebar() {
    return (
        <div className='w-full  h-[90vh] flex flex-col justify-between items-center'>
            <div className="logo w-[7rem]">
                <img src={Logo} className='cursor-pointer w-[130%]'  alt="Logo" />
            </div>

            <div className="icons text-white opacity-55 flex flex-col items-center justify-between h-[60%] mb-[9rem] cursor-pointer">
                <FontAwesomeIcon icon={faUserPlus}/>
                <FontAwesomeIcon icon={faGraduationCap}/>
                <FontAwesomeIcon icon={faChartColumn}/>
                <FontAwesomeIcon icon={faCalendar}/>
                <FontAwesomeIcon icon={faGear}/>
            </div>


            <div className="exit text-white opacity-55 cursor-pointer">
                <FontAwesomeIcon icon={faArrowRightFromBracket}/>
                
            </div>
        </div>
    )
}

export default Sidebar
