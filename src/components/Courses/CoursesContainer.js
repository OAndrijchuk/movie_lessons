import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setCourses, setCurrentPage, setPaginationCurses, setCoursId } from '../../redux/courses-reducer';
import {setCours, setVideoLink} from '../../redux/lessons-reducer'
import Courses from './Courses';


class CoursesContainer extends React.Component {

  componentDidMount() {
      axios.get(`https://api.wisey.app/api/v1/core/preview-courses?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0YzJiNDc3MS00NzMwLTQyZWItODkwOC0xNDE4YjY3Mzg4NDEiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg4MjUwOTYsImV4cCI6MTY3OTcyNTA5Nn0.rgIaB0IaKbrKocchY4yMvStvgpvm38rMEyXbm2DCJO8`)
        .then(response => {
          this.props.setCourses(response.data.courses);
          this.props.setPaginationCurses(1);
        })
  }
    onPageChanged = (pageNumber) => {
       this.props.setCurrentPage(pageNumber);
       this.props.setPaginationCurses(pageNumber);    
    }
    onCoursChoice=(courId)=>{
      // this.props.setCoursId(courId);
      // axios.get(`https://api.wisey.app/api/v1/core/preview-courses/${courId}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0YzJiNDc3MS00NzMwLTQyZWItODkwOC0xNDE4YjY3Mzg4NDEiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg4MjUwOTYsImV4cCI6MTY3OTcyNTA5Nn0.rgIaB0IaKbrKocchY4yMvStvgpvm38rMEyXbm2DCJO8`)
      //   .then(response => {
      //     this.props.setCours(response.data);
      //     let coursLinks = response.data.lessons.map(les=>les.link);
      //     this.props.setVideoLink(coursLinks[0]);
      //   })
    }
    render() {
      return (
        <Courses
          courses={this.props.courses}
          paginationPageSize={this.props.paginationPageSize}
          onPageChanged={this.onPageChanged}
          paginationCurses={this.props.paginationCurses}
          currentPage={this.props.currentPage}
          onCoursChoice={this.onCoursChoice}

        />
      )
    }
  }
let mapStateToProps = (state) => { //это ф-ция которая принимает весть state целиком
    return {                       // и возвращает объект только с теми данными которые реально нужны 
      courses: state.coursesReducer.courses,
      paginationPageSize: state.coursesReducer.paginationPageSize,
      paginationCurses:state.coursesReducer.paginationCurses,
      currentPage: state.coursesReducer.currentPage,
      
      }
}



  export default connect ( mapStateToProps,{setCourses, setCurrentPage, setPaginationCurses, setCoursId, setCours, setVideoLink} )(CoursesContainer);