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
    isAdd: false
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
        case actionType.FIND_COURSE:
            state.keyword = action.keyword;
            return { ...state };
        case actionType.SAVE_COURSE:
            state.editCourse = action.editCourse;
            state.isAdd = action.isAdd;
            state.isEdit = action.isEdit;
            return { ...state }
        default:
            return { ...state }
    }
}

export default courseReducer;