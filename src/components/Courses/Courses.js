import React from "react";
import Cours from "./Cours/Cours";
import st from '../Courses/Courses.module.css';




function Courses(props) {
    let corsesArr = props.courses;
    let paginationCurses = props.paginationCurses;
    let courses = paginationCurses.map(cours=><Cours key={cours.id} cours={cours} onCoursChoice={props.onCoursChoice}/>); //Створюємо масив елементів "Курси" 
    let totalCorsesCount = corsesArr.length;
    let pagesCount = Math.ceil(totalCorsesCount / props.paginationPageSize);
    let pages = []; //масив елементів пагінації
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
      return (<div className={st.coursesBody}>
        {/* Тут відображаємо пагінацію */}
        <div className={st.paginationConteiner}>
            {pages.map(p => {
                return (<span className={props.currentPage === p && st.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}>{p} </span>
                      )})}
        </div>
        {/* Тут відображаємо курси */}
        <div className={st.coursesConteiner}>
          {courses}
        </div>
      </div>);
    }
    
    export default Courses;