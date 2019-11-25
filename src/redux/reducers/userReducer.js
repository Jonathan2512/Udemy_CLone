import * as actionType from '../constants/actionType';


let initialState = {
    isLogin: false,
    isEdit: false,
    isAdd: false,
    isGot: false,
    userInfo: {},
    saveUser: {},
    userList: [],
    findingName: "",
    findingUserList: [],
    unRegisterList: [],
    waitingList: [],
    registeredList: [],
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
        case actionType.FIND_INFO:
            state.findingName = action.keyword;
            state.findingUserList = [];
            return { ...state };
        case actionType.GET_FINDING_USER_LIST:
            state.findingUserList = action.findingUserList;
            return { ...state };
        case actionType.GET_UNREGISTER_USER_LIST_OF_COURSE:
            state.unRegisterList = action.unRegisterList;
            return { ...state };
        case actionType.GET_WAIT_ACCEPT_USER_LIST_OF_COURSE:
            state.waitingList = action.waitingList;
            return { ...state };
        case actionType.GET_REGISTERED_USER_LIST_OF_COURSE:
            state.registeredList = action.registeredList;
            return { ...state };
        default:
            return { ...state }
    }
}
export default userReducer;