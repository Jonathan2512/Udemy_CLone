import * as actionType from '../constants/actionType';



let initialState = {
    isLogin: false,
    userInfo: {},
    editedUserInfo: {},
    isEdit: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.USER_LOG_IN:
            state.isLogin = true;
            return { ...state }
        case actionType.GET_USER_INFO:
            state.userInfo = action.userInfo;
            return { ...state };
        case actionType.EDIT_USER_INFO:
            state.isEdit = action.userEdited.isEdit;
            return { ...state }
        default:
            return { ...state }
    }
}
export default userReducer;