import React, { useEffect, useRef, useState } from 'react'
import TotalCount from '../../Components/Dashboard/TotalCounts'
import Mute from '../../Assets/Images/mute'
import Camera from '../../Assets/Images/camera'
import LargeScreen from '../../Assets/Images/largeScreen'
import Plus from '../../Assets/Images/plus'
import Minus from '../../Assets/Images/minus'
import { NavLink } from 'react-router-dom'
import BackVideo from '../../Assets/Images/backVideo'
import PreviousVideo from '../../Assets/Images/prevVideo'
import PlayVideo from '../../Assets/Images/playVideo'
import MoveNextVideo from '../../Assets/Images/moveNextVideo'
import NextVideo from '../../Assets/Images/nextVideo'
// import '~video-react/dist/video-react.css'; 

import ReactPlayer from 'react-player'

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
]
const AllCameraPage = () => {
    const vidRef = useRef(null);
    useEffect(() => { vidRef.current.play(); }, []);

    const [imgUrl, setimgUrl] = useState('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4');
    const [previewData, setpreviewData] = useState(livePreview[0]);


    const previewHandler = (data) => {
        setpreviewData(data)
        setimgUrl(data.img)
    }

    const videoPlayerRef = useRef(null);

    const [videoState, setVideoState] = useState({
        playing: true,
        muted: false,
        volume: 0.5,
        playbackRate: 1.0,
        played: 0,
        seeking: false,
        buffer: true,
    });

    //Destructuring the properties from the videoState
    const { playing, muted, volume } =
        videoState;

    const playPauseHandler = () => {
        setVideoState({ ...videoState, playing: !videoState.playing });
    };

    const rewindHandler = () => {
        videoPlayerRef.current.seekTo(videoPlayerRef.current.getCurrentTime() - 5);
    };

    const handleFastFoward = () => {
        videoPlayerRef.current.seekTo(videoPlayerRef.current.getCurrentTime() + 10);
    };
    const muteHandler = () => {
        setVideoState({ ...videoState, muted: !videoState.muted });
    };

    return (
        <div>
            <TotalCount />
            <div className='rounded-8'>
                <div className='rounded-8-8-0-0 border-bottom p-3 bg-white '>
                    <h1 className='font-24 font-weight-700'>Live Preview</h1>

                </div>
                <div className='p-3 rounded-0-0-8-8 bg-white live-view'>
                    <ReactPlayer
                        ref={videoPlayerRef}
                        className="player"
                        url={imgUrl}
                        width="100%"
                        height="100%"
                        playing={playing}
                        volume={volume}
                        muted={muted}
                    />
                    
                    {/* <PlayerControlExample/> */}

                    <span className='camera-position-live camera-live'>{previewData?.cameraPosition}</span>
                    <div className='camera-recording-live d-flex flex-row gap-16px'>
                        <span className='camera-live '>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5" cy="5" r="5" fill="#B50000" />
                            </svg>
                            <span className='pl-1'>Recording</span></span>
                        <span className='camera-live'>Live Preview</span>
                    </div>

                    <div className='flex-md-column gap-16px camera-recording-options-side d-sm-flex d-none'>
                        <span className='camera-live cr-p' onClick={() => muteHandler()}><Mute /></span>
                        <span className='camera-live cr-p'><Camera /></span>
                        <span className='camera-live cr-p '><LargeScreen /></span>
                        <span className='camera-live cr-p'><Plus /></span>
                        <span className='camera-live cr-p'><Minus /></span>
                    </div>
                    <div className='d-flex flex-row camera-live gap-50px px-sm-5 px-3 py-4 camera-recording-options-bottom'>
                        <span className='cr-p w-100' onClick={() => rewindHandler()}><BackVideo /></span>
                        <span className='cr-p w-100'><PreviousVideo /></span>
                        <span className='cr-p w-100' onClick={() => playPauseHandler()}><PlayVideo /></span>
                        <span className='cr-p w-100'><MoveNextVideo /></span>
                        <span className='cr-p w-100' onClick={() => handleFastFoward()}><NextVideo /></span>
                    </div>
                </div>
            </div>
            <div className='pt-3 row m-0'>
                {livePreview.map((data, index) => {
                    return (
                        <NavLink key={index} className='col-xl-3 col-md-4 col-sm-6 pl-0 mb-3 all-camera-previews cr-p' onClick={() => previewHandler(data)}>
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
                            <span className='camera-position'>{data.cameraPosition}</span>
                        </NavLink>

                    )
                })}
            </div>
        </div>
    )
}

export default AllCameraPage