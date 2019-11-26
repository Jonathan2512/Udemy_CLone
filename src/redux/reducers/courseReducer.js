import * as actionType from '../constants/actionType';

let initialState = {
    courseCategoryList: {},
    courseCategory: [],
    courseList: [],
    course: {},
    keyword: "",
    courseRegistered: {},
    editCourse: {},
    isEdit: false,
    isAdd: false,
    unregisterCourses: [],
    waitingCourses: [],
    registeredCourses: []
}

const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.GET_COURSE_LIST:
            state.courseCategoryList = action.courseCategoryList;
            state.courseList = action.courseList;
            return { ...state }
        case actionType.GET_COURSE_CATEGORY:
            state.courseCategory = action.courseCategory;
            return { ...state };
        case actionType.GET_COURSE_DETAIL:
            state.course = action.course;
            return { ...state };
        case actionType.FIND_INFO:
            state.keyword = action.keyword;
            return { ...state };
        case actionType.SAVE_COURSE:
            state.editCourse = action.editCourse;
            state.isAdd = action.isAdd;
            state.isEdit = action.isEdit;
            return { ...state };
        case actionType.GET_UNREGISTER_COURSE_LIST_OF_USER:
            state.unregisterCourses = action.unregisterCourses;
            return { ...state }
        case actionType.GET_WAIT_ACCEPT_COURSE_LIST_OF_USER:
            state.waitingCourses = action.waitingCourses;
            return { ...state };
        case actionType.GET_REGISTERED_COURSE_LIST_OF_USER:
            state.registeredCourses = action.registeredCourses;
            return { ...state };
        default:
            return { ...state }
    }
}

export default courseReducer;