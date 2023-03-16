import ReactPlayer from "react-player";
import { useState, useRef } from "react";

let count = 0;
function App() {
    const videoPlayerRef = useRef(null);
    const controlRef = useRef(null);

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
    const { playing, muted, volume, playbackRate, played, seeking, buffer } =
        videoState;

    const currentTime = videoPlayerRef.current
        ? videoPlayerRef.current.getCurrentTime()
        : "00:00";
    const duration = videoPlayerRef.current
        ? videoPlayerRef.current.getDuration()
        : "00:00";


    const playPauseHandler = () => {
        //plays and pause the video (toggling)
        setVideoState({ ...videoState, playing: !videoState.playing });
    };

    const rewindHandler = () => {
        //Rewinds the video player reducing 5
        videoPlayerRef.current.seekTo(videoPlayerRef.current.getCurrentTime() - 5);
    };

    const handleFastFoward = () => {
        //FastFowards the video player by adding 10
        videoPlayerRef.current.seekTo(videoPlayerRef.current.getCurrentTime() + 10);
    };




    return (
        <div className="video_container">
            <ReactPlayer
                ref={videoPlayerRef}
                className="player"
                url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                width="100%"
                height="100%"
                playing={playing}
                volume={volume}
                muted={muted}
            />

            {/* {buffer && <p>Loading</p>} */}

        </div>
    );
}

export default App;