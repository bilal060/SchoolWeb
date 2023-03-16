import React from 'react'
import Event1 from '../../Assets/Images/event1'
import Event2 from '../../Assets/Images/event2'
import Event3 from '../../Assets/Images/event3'
import Event4 from '../../Assets/Images/event4'
import SitePlan from '../../Assets/Images/siteplan'

const SitePlanEvents = () => {
    return (
        <div className='row m-0 mt-3'>
            <div className='col-md-6 mb-md-0 mb-3 p-0 '>
                <div className='bg-white h-100 rounded-8 mb-md-0 mb-3 mr-md-3'>
                    <div className='border-bottom p-3 d-flex justify-content-between align-items-center'>
                        <h1 className='font-24 font-weight-700'>Site Plan</h1>
                        <span className='view-all-btn'>View All</span>
                    </div>
                    <div className='w-100 px-3'>
                        <SitePlan />
                    </div>
                </div>
            </div>
            <div className='col-md-6 p-0'>
                <div className='bg-white rounded-8 h-100'>
                    <div className='border-bottom p-3 d-flex justify-content-between align-items-center'>
                        <h1 className='font-24 font-weight-700'>Upcoming Events</h1>
                        <span className='view-all-btn'>View All</span>
                    </div>
                    <div className='row m-0 pl-3 py-3'>
                        <div className='col-sm-6 pl-0 mb-3 upcoming-events-main'>
                            <div className='p-4 upcoming-events'>
                                <Event1 />
                                <p className='mt-3 text-center font-14 font-weight-600'>Sports Galla</p>
                            </div>
                        </div>
                        <div className='col-sm-6 pl-0 mb-3 upcoming-events-main'>
                            <div className='p-4 upcoming-events'>
                                <Event2 />
                                <p className='mt-3 text-center font-14 font-weight-600'>Quiz Competition </p>
                            </div>
                        </div>
                        <div className='col-sm-6 pl-0 mb-3 upcoming-events-main'>
                            <div className='p-4 upcoming-events'>
                                <Event3 />
                                <p className='mt-3 text-center font-14 font-weight-600'>Annual Exams</p>
                            </div>
                        </div>
                        <div className='col-sm-6 pl-0 mb-3 upcoming-events-main'>
                            <div className='p-4 upcoming-events'>
                                <Event4 />
                                <p className='mt-3 text-center font-14 font-weight-600'>Farewell Celebration </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SitePlanEvents