const SET_COURS = 'SET_COURS';
const SET_VIDEO_LINK = 'SET_VIDEO_LINK';

let initialState = {
    cours: {},
    videoLink:'https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/lesson-1/AppleHLS1/lesson-1.m3u8',
};

const lessonsReducer = (state = initialState, action) => { 

    switch (action.type) { 

        case SET_COURS: {
            return { ...state, cours: action.cours } 
        }
        case SET_VIDEO_LINK: {debugger
            return { ...state, videoLink: action.videoLink } 
        }

        default:           
            return state;
    }
}


//ACTION CREATOR
export const setCours = (cours) => ({ type: SET_COURS, cours })
export const setVideoLink = (videoLink) => ({ type: SET_COURS, videoLink })

export default lessonsReducer;