import React from "react";
import st from './Lessons.module.css';
import LessonsLink from "./LessonsLink/LessonsLink";
import LessonsVideo from "./LessonsVideo/LessonsVideo";
import { Route, Routes } from "react-router-dom";
import ReactHlsPlayer from "react-hls-player/dist";


let Lessons = (props)=>{

    let lessons = props.cours.lessons;
    let title = props.cours.title;
    // let lessonsVideosRout = [];
    let lessonsLinks = [];
    let videoLink = props.videoLink;
    if (props.cours===undefined || lessons===undefined){
        console.log("We have some problem!!!")
    }else{
        // videoLink = props.videoLink===''?lessons[1].link : props.videoLink;
        lessonsLinks = lessons.map(les =><LessonsLink setVideoLink={props.setVideoLink} lesson={les} cours={props.cours}/>);
        // lessonsVideosRout = lessons.map(les =><Route path={props.cours.id+'/'+les.id} key={les.id} element={<LessonsVideo videoLink={videoLink} les={les.link} />}/>);
    }
    return(
<div>
    <h1>{title}</h1>
    <div className={st.lessonsContainer}>
    <div className={st.lessonsVideoConteiner}>
    <LessonsVideo videoLink={videoLink} />
    {/* <ReactHlsPlayer
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
                    /> */}
        {/* <Routes>
              {lessonsVideosRout}
        </Routes> */}
    </div>
    <div className={st.lessonsLinksConteiner}>
        <div className={st.lessonsLinksConteiner2}>
            {lessonsLinks}
        </div>
        
    </div>
    </div>
    

</div>)
}
export default Lessons;