import React from 'react'
import Student1 from '../../Assets/Images/student1'
import Student2 from '../../Assets/Images/student2'
import Student3 from '../../Assets/Images/student3'
import VerticalDots from '../../Assets/Images/verticalDots'

const studentData = [
    {
        id: 1,
        name: 'Tony Stark ',
        studentPicture: <Student1 />,
        studentId: 1238743,
        grade: 'A levels',
        contactNo: '+1 012 3456 789',
        emergencyContactNo: '+1 012 3456 789',
        address: 'House No, City, State'
    },
    {
        id: 2,
        name: 'Tony Stark ',
        studentPicture: <Student2 />,
        studentId: 1238743,
        grade: 'A levels',
        contactNo: '+1 012 3456 789',
        emergencyContactNo: '+1 012 3456 789',
        address: 'House No, City, State'
    },
    {
        id: 3,
        name: 'Tony Stark ',
        studentPicture: <Student3 />,
        studentId: 1238743,
        grade: 'A levels',
        contactNo: '+1 012 3456 789',
        emergencyContactNo: '+1 012 3456 789',
        address: 'House No, City, State'
    },
    {
        id: 4,
        name: 'Tony Stark ',
        studentPicture: <Student1 />,
        studentId: 1238743,
        grade: 'A levels',
        contactNo: '+1 012 3456 789',
        emergencyContactNo: '+1 012 3456 789',
        address: 'House No, City, State'
    },
    {
        id: 5,
        name: 'Tony Stark ',
        studentPicture: <Student2 />,
        studentId: 1238743,
        grade: 'A levels',
        contactNo: '+1 012 3456 789',
        emergencyContactNo: '+1 012 3456 789',
        address: 'House No, City, State'
    },
    {
        id: 6,
        name: 'Tony Stark ',
        studentPicture: <Student3 />,
        studentId: 1238743,
        grade: 'A levels',
        contactNo: '+1 012 3456 789',
        emergencyContactNo: '+1 012 3456 789',
        address: 'House No, City, State'
    },
    {
        id: 7,
        name: 'Tony Stark ',
        studentPicture: <Student1 />,
        studentId: 1238743,
        grade: 'A levels',
        contactNo: '+1 012 3456 789',
        emergencyContactNo: '+1 012 3456 789',
        address: 'House No, City, State'
    },
    {
        id: 8,
        name: 'Tony Stark ',
        studentPicture: <Student2 />,
        studentId: 1238743,
        grade: 'A levels',
        contactNo: '+1 012 3456 789',
        emergencyContactNo: '+1 012 3456 789',
        address: 'House No, City, State'
    },
    {
        id: 9,
        name: 'Tony Stark ',
        studentPicture: <Student3 />,
        studentId: 1238743,
        grade: 'A levels',
        contactNo: '+1 012 3456 789',
        emergencyContactNo: '+1 012 3456 789',
        address: 'House No, City, State'
    },
]
const AllStudents = () => {
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
                            {studentData.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{data.studentPicture}</td>
                                        <td>{data.name}</td>
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