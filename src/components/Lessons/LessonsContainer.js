import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setVideoLink, setCours} from '../../redux/lessons-reducer';
import Lessons from './Lessons';


class LessonsContainer extends React.Component {

  componentDidMount() {
    let id = this.props.coursId;
    axios.get(`https://api.wisey.app/api/v1/core/preview-courses/${id}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0YzJiNDc3MS00NzMwLTQyZWItODkwOC0xNDE4YjY3Mzg4NDEiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg4MjUwOTYsImV4cCI6MTY3OTcyNTA5Nn0.rgIaB0IaKbrKocchY4yMvStvgpvm38rMEyXbm2DCJO8`)
        .then(response => {
          this.props.setCours(response.data);
          let coursLinks = response.data.lessons.map(les=>les.link);
          this.props.setVideoLink(coursLinks[0]);
    })
  }
    onLinkChanged = (videoLink) => {
        
   }
  
    render() {
      return (<div>
        
                <Lessons cours={this.props.cours}
                         videoLink = {this.props.videoLink}
                         setVideoLink = {this.props.setVideoLink}/>
              </div>
      )
    }
  }
let mapStateToProps = (state) => {
    return {
        coursId: state.coursesReducer.coursId,
        cours: state.lessonsReducer.cours,
        videoLink: state.lessonsReducer.videoLink,
      
      }
}


  export default connect ( mapStateToProps, {setVideoLink, setCours,})(LessonsContainer);