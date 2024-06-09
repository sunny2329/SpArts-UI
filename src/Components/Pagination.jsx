import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

function Pagination({ setCurrentPacketIndex, currentPacketIndex ,packetSize }) {
  const [color,setColor] = useState(true)
  const goToNextPacket = () => {
    setCurrentPacketIndex((prevIndex) => (prevIndex + 1) % packetSize);
  }

  const goToPreviousPacket = () => {
    setCurrentPacketIndex((prevIndex) =>
      prevIndex === 0 ? packetSize - 1 : prevIndex - 1
    );
  }
  return (
    <div className='flex justify-between w-full items-center p-2 mt-5'>
      <div className="dummy"></div>
      <div className="arrows flex">
        <div className="left">
          <button 
          disabled = {currentPacketIndex === 0 ? true: false}
          onClick={()=>{
            goToNextPacket();
            setColor(false);
          }}
          className={`flex justify-center items-center border-[1px] ${!color ? `bg-purple-900 text-white` : `border-purple-500 opacity-50 text-purple-800`}  p-3 rounded-2xl w-[3.5rem] h-[2rem]`}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        </div>
        <div className="right">
          <button
          disabled = {currentPacketIndex === packetSize - 1 ? true: false} 
          onClick={()=>{
            goToNextPacket();
            setColor(true);
          }}
          className={`flex justify-center items-center ${color ? `bg-purple-900 text-white` : `border-purple-500 text-purple-800 opacity-55`} p-3 rounded-2xl w-[3.5rem] h-[2rem] ml-4 border-[1px]`}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>

      </div>
      <div className="info flex items-center justify-between w-[12%] mr-6">
        <div className='p-3 border-2 rounded-2xl border-purple-800 w-[4rem] flex justify-center items-center h-[1rem]'>{currentPacketIndex+1}</div>
        <div className='text-purple-900 '>of</div>
        <div className='text-purple-900 font-bold'>{packetSize}</div>
      </div>
    </div>
  )
}

export default Pagination
