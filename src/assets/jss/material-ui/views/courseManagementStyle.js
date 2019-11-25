import {
    infoColor,
    infoBoxShadow,
    grayColor,
    dangerColor,
    warningColor,
} from './../material-dashboard-react';

const courseManagementStyle = {
    courseTitle: {
        textAlign: "center",
        color: infoColor[2],
        boxShadow: infoBoxShadow,
        fontSize: "30px",
        fontWeight: "bold",
        maxWidth: "100%",
        height: 42,
        overflow: "hidden",
        textOverflow: "ellipsis"
    },
    courseContent: {
        height: "42px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        color: grayColor[0],
        fontSize: "16px"
    },
    viewLink: {
        "&:hover, &:focus": {
            textDecoration: "none"
        }
    },
    viewBtn: {
        textAlign: "center",
        paddingTop: "20px",
        "&:hover, &:focus": {
            outline: "none"
        }
    },
    view: {
        textTransform: "uppercase",
        color: "#000",
        fontWeight: "bold",
    },
    fab: {
        margin: "0 10px 10px 0",
        "&:focus": {
            outline: "none",
        }
    },
    edit: {
        backgroundColor: warningColor[3],
        "&:hover, &:focus": {
            backgroundColor: warningColor[0],
        }
    },
    delete: {
        backgroundColor: dangerColor[3],
        "&:hover, &:focus": {
            backgroundColor: dangerColor[0],
        }
    },
    add: {
        position: "fixed",
        top: "100px !important",
        right: "0",
        zIndex: "1000",
        backgroundColor: infoColor[3],
        boxShadow: infoBoxShadow,
        "&:hover, &:focus": {
            backgroundColor: infoColor[0]
        }
    }
}

export default courseManagementStyle;