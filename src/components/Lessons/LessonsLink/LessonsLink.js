import React from "react";
import { NavLink } from "react-router-dom";
import st from './LessonsLink.module.css'


let LessonsLink = (props)=>{
    let les = props.lesson;
    let callBackLink= ()=>{
        props.setVideoLink(les.link);
    }
    
    return(
        <div className={st.linkConteiner}>
                <NavLink onClick={callBackLink} to={''}>
                               {les.title}
                </NavLink>
        </div>)
}
export default LessonsLink;