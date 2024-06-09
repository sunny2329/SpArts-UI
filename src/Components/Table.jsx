import React, { useEffect, useState } from 'react'
import '../index.css'
import Boy from '../boy.jpg'
import Girl from '../girl.jpg'


function Table({ currentPacketIndex, setPacketSize, searchQuery, setSearchQuery }) {
    const [students, setStudents] = useState([]);
    const packetSize = 6;

    useEffect(() => {
        fetch('http://3.223.98.72:1337/api/students')
            .then((response) => response.json())
            .then((data) => {
                setStudents(data.data);
            })
            .catch(error => console.log(error));
    }, [])


    const packets = [];
    for (let i = 0; i < students.length; i += packetSize) {
        packets.push(students.slice(i, i + packetSize));
    }
    // setPacketSize(packets.length);
    useEffect(() => {
        setPacketSize(packets.length);
    }, [packets.length, setPacketSize]);

    const filteredData = students.filter(item =>
        item.attributes.firstName.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )

    console.log(filteredData);




    return (
        <div className='w-full overflow-scroll h-[55%] hide-scrollbar mt-2'>
            <table className='w-[94%] ml-[2.5rem] border-[1px] border-gray-400 border-solid rounded-xl'>
                <tr className='opacity-55 border-[1px] border-gray-400 sticky'>
                    <td className='w-1/12 p-2'>
                        <input type="checkbox" />
                    </td>
                    <td className='w-1/12'>Photo</td>
                    <td className='w-1/12'>ID</td>
                    <td className='w-1/12'>First name</td>
                    <td className='w-1/12'>Last name</td>
                    <td className='w-1/12'>Email</td>
                    <td className='w-1/12'>Phone</td>
                    <td className='w-auto'>Blood group</td>
                </tr>
                {
                    packets.length > 0 && (searchQuery === "" ? packets[currentPacketIndex].map((student) => (
                        <tr className='border-[1px] border-gray-400 font-bold'>
                            <td className='w-1/12 p-2'>
                                <input type="checkbox" className='opacity-55' />
                            </td>
                            <td className='w-1/12'>
                                <img src={student.attributes.gender === 'male' ? Boy : Girl} className='w-[30px] h-[30px] rounded-full' />
                            </td>
                            <td className='w-[10%]'>{student.id}</td>
                            <td className='w-[12%]'>{student.attributes.firstName}</td>
                            <td className='w-[12%]'>{student.attributes.lastName}</td>
                            <td className='w-[17%]'>{student.attributes.parentEmailId}</td>
                            <td className='w-[17%]'>{student.attributes.parentContactNo}</td>
                            <td className='w-[13%]'>{student.attributes.bloodGroup}</td>
                        </tr>
                    )) : filteredData.map((student) => (
                        <tr className='border-[1px] border-gray-400 font-bold'>
                            <td className='w-1/12 p-2'>
                                <input type="checkbox" className='opacity-55' />
                            </td>
                            <td className='w-1/12'>
                                <img src={student.attributes.gender === 'male' ? Boy : Girl} className='w-[30px] h-[30px] rounded-full' />
                            </td>
                            <td className='w-[10%]'>{student.id}</td>
                            <td className='w-[12%]'>{student.attributes.firstName}</td>
                            <td className='w-[12%]'>{student.attributes.lastName}</td>
                            <td className='w-[17%]'>{student.attributes.parentEmailId}</td>
                            <td className='w-[17%]'>{student.attributes.parentContactNo}</td>
                            <td className='w-[13%]'>{student.attributes.bloodGroup}</td>
                        </tr>
                    )))
                }
            </table>

        </div>

    )
}

export default Table
