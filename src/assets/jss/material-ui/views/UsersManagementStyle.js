import {
    whiteColor,
    successColor,
    successBoxShadow
} from './../material-dashboard-react';

const UsersManagementStyle = theme => ({
    title: {
        textAlign: "center",
        fontWeight: "bolder",
        color: whiteColor,
        letterSpacing: "3px",
        fontSize: "35px"
    },
    fab: {
        "&:focus": {
            outline: "none",
        }
    },
    add: {
        position: "fixed",
        top: "100px !important",
        right: "0",
        zIndex: "1000",
        backgroundColor: successColor[3],
        boxShadow: successBoxShadow,
        "&:hover, &:focus": {
            backgroundColor: successColor[0]
        }
    }
})
export default UsersManagementStyle;
