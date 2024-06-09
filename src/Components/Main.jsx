import React, {useState} from 'react'
import NavOne from './NavOne'
import NavTwo from './NavTwo'
import Table from './Table'
import Pagination from './Pagination'

function Main() {
  const [currentPacketIndex,setCurrentPacketIndex] = useState(0);
  const [packetSize, setPacketSize] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
    <div className='w-full h-full flex flex-col items-center'>
        <NavOne searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        <NavTwo/>
        <Table currentPacketIndex = {currentPacketIndex} setPacketSize = {setPacketSize}  searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        <Pagination setCurrentPacketIndex= {setCurrentPacketIndex} currentPacketIndex={currentPacketIndex} packetSize={packetSize}/>
    </div>
    </>
  )
}

export default Main
