import React from "react";
import {NavLink} from "react-router-dom";
import st from '../Cours/Cours.module.css';

let Cours = (props)=>{

    let cours = props.cours;
    // let imgLink = cours.previewImageLink;
    let imgLink = 'https://static.javatpoint.com/images/javascript/javascript_logo.png';
    let title = cours.title;
    let lesCount = cours.lessonsCount;
    let skills = cours.meta.skills;
    let rating = cours.rating;
    let callBeckCoursId = ()=>{
        props.onCoursChoice(cours.id)
    }
    return(
    <div className={st.body} >
        <NavLink onClick={callBeckCoursId} to={cours.containsLockedLessons 
        ? cours.id 
        : ""} 
                 className={cours.containsLockedLessons ? st.coursLinkActiv:st.coursLinkUnActiv}>
        <div className={st.coursContent}>
            
            <div style={{backgroundImage: 'url(' + imgLink + ')'}} className={st.imgContainer}>
            
            </div>
            <div className={st.InfoContainer}>
                <div className={st.Info}>
                    <h6 className={st.title}>{title}</h6>
                    <div className={st.numbLess}>
                        <span>Number of lessons: {lesCount}</span>
                    </div>
                    <div  className={st.skil}>
                        <span>Skills:</span>
                        <ul>
                            {skills===undefined ? "-" : skills.map(skil => <li key={skil}> {skil} </li>)}
                        </ul>
                    </div>
                    <div  className={st.ratin}>
                        <span>Rating: {rating}</span>
                    </div>
                    
                </div>
            </div>
        </div>
        </NavLink>
    </div>
    );
}
export default Cours;