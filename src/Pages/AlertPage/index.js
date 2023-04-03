import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Alert1 from '../../Assets/Images/alert1'
import Alert2 from '../../Assets/Images/alert2'
import Alert3 from '../../Assets/Images/alert3'
import Alert4 from '../../Assets/Images/alert4'
import NextIcon from '../../Assets/Images/nextIcon'
import PreviousIcon from '../../Assets/Images/previousIcon'
import VerticalDots from '../../Assets/Images/verticalDots'

const alerts = [
    {
        id: 1,
        alertName: 'Start Fire Alarm',
        alertIcon: <Alert1 />,
        alertIconbg: 'bg-orange-dark',
        background: 'bg-orange'
    },
    {
        id: 2,
        alertName: 'Emergency Evacuation Alarm',
        alertIcon: <Alert2 />,
        alertIconbg: 'bg-pinkish-dark',
        background: 'bg-pinkish'

    },
    {
        id: 3,
        alertName: 'Ask Students To Stay in the Class Room',
        alertIcon: <Alert3 />,
        alertIconbg: 'bg-greenish-dark',
        background: 'bg-greenish'

    },
    {
        id: 4,
        alertName: 'Start Fire Arm Alarm',
        alertIcon: <Alert4 />,
        alertIconbg: 'bg-blueish-dark',
        background: 'bg-blueish'
    },
]

const AlertPage = () => {
    const [alertsData, setalertsData] = useState([]);
    const API_URI = 'http://localhost:4000/Alerts';
    const getAlerts = async () => {
        try {
            const fetchData = await axios.get(API_URI)
            console.log(fetchData)
            setalertsData(fetchData)
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getAlerts()
    }, [])

    // const setAlert = async (data) => {
    //     try {
    //         const fetchData = await axios.post(API_URI, data)

    //         setalertsData(fetchData)
    //     }
    //     catch (error) {
    //         console.log(error)
    //     }
    // }
    return (
        <>
            <div>
                <h1 className='font-24 font-weight-700 mb-3'>Make Emergency Alerts </h1>
                <div className='row mx-0 mb-4'>
                    {
                        alerts.map((data, index) => {
                            return (<div key={index} className='col-lg-3 col-sm-6 mb-3 p-0'>
                                <div className={`${data.background} mr-3 alerts-main flex-xl-row flex-lg-column cr-p`} >
                                    <div className={`${data.alertIconbg} alert-icon`}>{data.alertIcon}</div>
                                    <p className='text-lg-center text-xl-left font-18-22 font-weight-500'>{data.alertName}</p>
                                </div>
                            </div>)
                        })
                    }

                </div>
                <div className='recent-alerts'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h1 className='font-24 font-weight-700 mb-3'>Recent Alerts</h1>
                    </div>


                </div>
            </div>
            <div className='mt-3 rounded-8'>
                <div className='border-bottom p-3 d-flex bg-white all-students-header justify-content-between align-items-sm-center gap-16px flex-sm-row flex-column'>
                    <h1 className='font-24 font-weight-700'>Recent Alerts</h1>
                    <div className='d-flex align-items-center  justify-content-between flex-sm-row flex-row-reverse  gap-16px'>
                        <div className='d-flex align-items-center gap-8px'>
                            <PreviousIcon />
                            <NextIcon />
                        </div>
                        <span className='view-all-btn d-flex gap-8px'>
                            <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.73755 5.26094C3.99644 4.99914 4.41855 4.99678 4.68035 5.25567L5.91826 6.4798L7.15616 5.25567C7.41796 4.99678 7.84007 4.99914 8.09896 5.26094C8.35785 5.52274 8.35549 5.94485 8.09368 6.20373L6.38702 7.89142C6.12728 8.14826 5.70923 8.14826 5.4495 7.89142L3.74283 6.20374C3.48103 5.94485 3.47867 5.52274 3.73755 5.26094Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.92155 0C6.28974 0 6.58822 0.298477 6.58822 0.666667V7.37125C6.58822 7.73944 6.28974 8.03791 5.92155 8.03791C5.55336 8.03791 5.25488 7.73944 5.25488 7.37125V0.666667C5.25488 0.298477 5.55336 0 5.92155 0Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.666667 5.39267C1.03486 5.39267 1.33333 5.69115 1.33333 6.05934C1.33333 7.36354 1.77954 8.51045 2.56412 9.32721C3.34417 10.1393 4.49843 10.6667 6 10.6667C7.50158 10.6667 8.65583 10.1393 9.43589 9.32721C10.2205 8.51045 10.6667 7.36354 10.6667 6.05934C10.6667 5.69115 10.9651 5.39267 11.3333 5.39267C11.7015 5.39267 12 5.69115 12 6.05934C12 7.66903 11.4462 9.15911 10.3975 10.2509C9.34417 11.3474 7.83176 12 6 12C4.16824 12 2.65583 11.3474 1.60255 10.2509C0.553798 9.15911 0 7.66903 0 6.05934C0 5.69115 0.298477 5.39267 0.666667 5.39267Z" fill="white" />
                            </svg>
                            Download Report
                        </span>
                    </div>
                </div>
                <div className='w-100 all-students'>
                    <table className='w-100'>
                        <thead>
                            <tr>
                                <th>Alert</th>
                                <th>Location</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Alert Reason</th>
                                <th>Alert Prority</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(alertsData || []).data?.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{data.Alert}</td>
                                        <td>{data.Location}</td>
                                        <td>{data.createDate}</td>
                                        <td>{data.createTime}</td>
                                        <td>{data.AlertReason}</td>
                                        <td><span className={`prority ${data.AlertPrority === 'Urgent' ? 'urgent' : data.AlertPrority === 'High' ? 'high' : 'low'}`}>{data.AlertPrority}</span></td>
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

export default AlertPage