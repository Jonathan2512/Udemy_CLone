import * as actionType from '../constants/actionType';


let initialState = {
    isLogin: false,
    userInfo: {},
    isEdit: false,
    isAdd: false,
    saveUser: {},
    userList: [],
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.USER_LOG_IN:
            state.isLogin = true;
            return { ...state }
        case actionType.GET_USER_INFO:
            state.userInfo = action.userInfo;
            return { ...state };
        case actionType.SAVE_USER:
            state.saveUser = action.saveUser;
            state.isAdd = action.isAdd;
            state.isEdit = action.isEdit;
            return { ...state }
        case actionType.GET_USER_LIST:
            state.userList = action.userList;
            return { ...state };
        default:
            return { ...state }
    }
}
export default userReducer;