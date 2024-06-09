import React, {useState} from 'react'
import NavOne from './NavOne'
import NavTwo from './NavTwo'
import Table from './Table'
import Pagination from './Pagination'

function Main() {
  const [currentPacketIndex,setCurrentPacketIndex] = useState(0);
  const [packetSize, setPacketSize] = useState(0);

  return (
    <>
    <div className='w-full h-full flex flex-col items-center'>
        <NavOne/>
        <NavTwo/>
        <Table currentPacketIndex = {currentPacketIndex} setPacketSize = {setPacketSize} />
        <Pagination setCurrentPacketIndex= {setCurrentPacketIndex} currentPacketIndex={currentPacketIndex} packetSize={packetSize}/>
    </div>
    </>
  )
}

export default Main
