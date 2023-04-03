import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Student3 from '../../Assets/Images/student3'
import VerticalDots from '../../Assets/Images/verticalDots'


const AllStudents = () => {
    const [studentsData, setstudentsData] = useState([]);
    const API_URI = 'http://localhost:4000/students';
    const GetStudents = async () => {
        try {
            const fetchData = await axios.get(API_URI)
            console.log(fetchData)
            setstudentsData(fetchData)
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        GetStudents()
    }, [])

    return (
        <>
            <div className='mt-3 rounded-8'>
                <div className='border-bottom bg-white all-students-header p-3 d-flex justify-content-between align-items-center'>
                    <h1 className='font-24 font-weight-700'>All Students</h1>
                    <span className='view-all-btn'>View All</span>
                </div>
                <div className='w-100 all-students'>
                    <table className='w-100'>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Full Name</th>
                                <th>Student ID</th>
                                <th>Grade</th>
                                <th>Contact No.</th>
                                <th>Emergency <br /> Contact No.</th>
                                <th>Address</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {(studentsData || []).data?.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{<Student3 />}</td>
                                        <td className='text-capitalize'>{data.fullName}</td>
                                        <td>{data.studentId}</td>
                                        <td>{data.grade}</td>
                                        <td>{data.contactNo}</td>
                                        <td>{data.emergencyContactNo}</td>
                                        <td>{data.address}</td>
                                        <td><VerticalDots /></td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>


            </div>
        </>
    )
}

export default AllStudents