import React from "react";
import ReactHlsPlayer from "react-hls-player/dist";


let LessonsVideo = (props)=>{
    let videoLink = props.videoLink;
    let link = props.les
    
    return( 
    <ReactHlsPlayer
                        src={videoLink}
                        utoPlay={false}
                        controls={true}
                        width="100%"
                        height="auto"
                        hlsConfig={{
                            maxLoadingDelay: 4,
                            minAutoBitrate: 0,
                            lowLatencyMode: true,
                        }}
                    />
                )
}
export default LessonsVideo;