
import React from "react";
import { connect } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import CoursesContainer from './components/Courses/CoursesContainer';
import LessonsContainer from "./components/Lessons/LessonsContainer";
import './App.css';


function App(props) {
  
  let courses = props.courses;
  let coursesId = courses.map(cours =>cours.id);
  let routedCourses = coursesId.map(id => <Route path={'/'+id} key={id} element={<LessonsContainer/>}/> )
  
  return (
    <div className="App">
      <div>
        <CoursesContainer/>
      </div>
      <div className='siteConteiner'>
        <Routes>
              {routedCourses}
        </Routes>
      </div> 
    </div>
  );
}

let mapStateToProps = (state) => { //это ф-ция которая принимает весть state целиком
  return {                       // и возвращает объект только с теми данными которые реально нужны 
    courses: state.coursesReducer.courses,
    }
}

export default connect ( mapStateToProps,{} )(App);