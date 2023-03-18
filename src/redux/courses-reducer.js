const SET_COURSES = 'SET_COURSES';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_PAGINATION_CURSES = 'SET_PAGINATION_CURSES';
const SET_COURS_ID = 'SET_COURS_ID';

let initialState = {
    courses: [],
    paginationPageCount: 0,
    paginationPageSize: 10,
    currentPage: 1,
    paginationCurses:[],
    coursId:"352be3c6-848b-4c19-9e7d-54fe68fef183",

};

const coursesReducer = (state = initialState, action) => {  //редьюсер принимает старый state и меняет его на основании action

    switch (action.type) {  //если объект action имеет тип SET_COURSES тогда выполняем этот код

        case SET_COURSES: {
            return { ...state, courses: action.courses } 
        }
        case SET_COURS_ID: {
            return { ...state,
                coursId: action.coursId 
            } 
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage } 
        }
        case SET_PAGINATION_CURSES: {
            let arr = [];
            let arr2 = state.courses;
            let iter= state.paginationPageSize * state.currentPage;
            for(let i=iter-10;i<iter;i++ ){
                if(arr2[i]===undefined){
                  return { ...state, 
                            paginationCurses: arr 
                        }   
                }else{
                    arr.push(arr2[i]);
                }
            }
            return { ...state, paginationCurses: arr }  
        }

        default:            //если не соответствует не одному action тогда вернуть state
            return state;
    }
}


//ACTION CREATOR
export const setCourses = (courses) => ({ type: SET_COURSES, courses })
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage })
export const setPaginationCurses = (paginationCurses) => ({  type: SET_PAGINATION_CURSES, paginationCurses })
export const setCoursId = (coursId) => ({  type: SET_COURS_ID, coursId })


export default coursesReducer;