import React, { useEffect, useRef } from 'react'
import Alert1 from '../../Assets/Images/alert1'
import Alert2 from '../../Assets/Images/alert2'
import Alert3 from '../../Assets/Images/alert3'
import Alert4 from '../../Assets/Images/alert4'
import NextIcon from '../../Assets/Images/nextIcon'
import PreviousIcon from '../../Assets/Images/previousIcon'
import { Link } from 'react-router-dom'


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
const livePreview = [
    {
        id: 1,
        img: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        cameraPosition: 'Entrance'
    },
    {
        id: 2,
        img: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        cameraPosition: 'Locker Room'
    },
    {
        id: 3,
        img: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        cameraPosition: 'Entrance'
    },
    {
        id: 4,
        img: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        cameraPosition: 'Class B'
    },
    {
        id: 5,
        img: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        cameraPosition: 'Staff Room 1'
    },
    {
        id: 6,
        img: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        cameraPosition: 'Class B'
    },
    {
        id: 7,
        img: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        cameraPosition: 'Class B'
    },
    {
        id: 8,
        img: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        cameraPosition: 'Staff Room 1'
    },
    {
        id: 9,
        img: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        cameraPosition: 'Class B'
    },
]
const PreviewSection = () => {
    const vidRef = useRef();
    useEffect(() => { vidRef.current.play(); }, []);
    return (
        <div>
            <div className='row mx-0'>
                <div className='col-xl-9 col-md-7 p-0 mb-sm-0 mb-3'>
                    <div className='mr-md-3 bg-white h-100 rounded-8'>
                        <div className='border-bottom p-3 d-flex justify-content-between align-items-sm-center gap-16px flex-sm-row flex-column'>
                            <h1 className='font-24 font-weight-700'>Live Preview</h1>
                            <div className='d-flex align-items-center justify-content-between flex-sm-row flex-row-reverse  gap-16px'>
                                <div className='d-flex align-items-center gap-8px'>
                                    <PreviousIcon />
                                    <NextIcon />
                                </div>
                                <Link to={'/cameras'} className='view-all-btn'>View All</Link>
                            </div>
                        </div>
                        <div className='pt-3 pl-3 row m-0'>
                            {livePreview.map((data, index) => {
                                return (
                                    <div key={index} className='col-xl-4 col-sm-6 pl-0 mb-3 preview-live-main'>
                                        <video
                                            src={data.img}
                                            width="auto"
                                            height="auto"
                                            ref={vidRef}
                                            muted
                                            autoPlay
                                            loop
                                        >
                                        </video>
                                        {/* <img src={data.img} alt='' className='w-100' /> */}
                                        <span className='camera-position'>{data.cameraPosition}</span>
                                    </div>

                                )
                            })}


                        </div>
                    </div>
                </div>
                <div className='col-xl-3 col-md-5 p-0 bg-white rounded-8'>
                    <div className='border-bottom p-3 d-flex justify-content-between align-items-center'>
                        <h1 className='font-24 font-weight-700'>Alerts</h1>
                        <Link to={'/alert'} className='view-all-btn'>View All</Link>
                    </div>
                    <div className='row mx-0 mt-3'>
                        {
                            alerts.map((data, index) => {
                                return (<div key={index} className='col-12 mb-3 py-0 pr-0'>
                                    <div className={`${data.background} mr-3 alerts-main flex-xl-row flex-lg-column`}>
                                        <div className={`${data.alertIconbg} alert-icon`}>{data.alertIcon}</div>
                                        <p className='text-lg-center text-xl-left font-18-22 font-weight-500'>{data.alertName}</p>
                                    </div>
                                </div>)
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreviewSection