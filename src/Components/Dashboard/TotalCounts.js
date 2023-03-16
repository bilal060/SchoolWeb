import React from 'react'
import ActiveCamera from '../../Assets/Images/activeCamera'
import OfflineCamera from '../../Assets/Images/offlineCamera'
import TotalCamera from '../../Assets/Images/totalCamera'
import TotalDoor from '../../Assets/Images/totalDoor'

const cameras = [
    {
        id: 1,
        count: '32',
        heading: 'Total Cameras',
        alertIcon: <TotalCamera />,
        alertIconbg: 'bg-blueish-dark-svg',
        background: 'bg-blueish'
    },
    {
        id: 2,
        count: '28',
        heading: 'Active Cameras',
        alertIcon: <ActiveCamera />,
        alertIconbg: 'bg-greenish-dark-svg',
        background: 'bg-greenish'

    },
    {
        id: 3,
        count: '04',
        heading: 'Offline Cameras',
        alertIcon: <OfflineCamera />,
        alertIconbg: 'bg-pinkish-dark-svg',
        background: 'bg-pinkish'

    },
    {
        id: 4,
        count: '12',
        heading: 'Total Doors',
        alertIcon: <TotalDoor />,
        alertIconbg: 'bg-gray-svg',
        background: 'bg-white'
    },
]

const TotalCount = () => {
    return (
        <div>
            <div className='row mx-0 mb-1'>
                {
                    cameras.map((data, index) => {
                        return (<div key={index} className='col-xl-3 col-lg-4 col-sm-6 mb-3 p-0'>
                            <div className={`${data.background} mr-3 camera-main position-relative justify-content-between `}>
                                <div className='z-index-99'>
                                    <p className='font-18-22 font-weight-600 w-50 mb-4'>{data.heading}</p>
                                    <p className='font-48 font-weight-700'>{data.count}</p>
                                </div>

                                <div>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="124" height="107" viewBox="0 0 124 107" fill="none" className={`${data.alertIconbg} camera`}>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M151.559 63.1022C146.541 83.5292 128.798 101.094 108.238 105.645C89.586 109.773 75.2628 91.0793 57.5454 83.9107C40.7852 77.1293 18.8671 80.3791 8.76454 65.3961C-2.13693 49.2284 -2.11493 26.3198 7.16455 9.19169C15.7342 -6.6262 37.3379 -6.42569 52.7308 -15.7569C72.4244 -27.6951 86.3662 -59.1036 108.341 -52.1416C130.106 -45.2464 123.892 -12.0326 131.902 9.32542C138.869 27.9031 156.29 43.8466 151.559 63.1022Z" fill="#F0F0F0" />
                                    </svg>
                                </div>
                                <div className={`z-index-99`}>{data.alertIcon}</div>
                            </div>
                        </div>)
                    })
                }
            </div>
        </div>
    )
}

export default TotalCount