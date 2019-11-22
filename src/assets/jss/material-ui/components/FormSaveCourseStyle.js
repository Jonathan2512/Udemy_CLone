import {
    infoCardHeader,
    infoColor,
    warningCardHeader,
    warningColor,
    successCardHeader,
    successColor
} from './../material-dashboard-react';
const formSaveUserStyle = theme => ({
    bodyContent: {
        margin: "20px 60px"
    },
    saveTitle: {
        fontWeight: "bold",
        color: "#fff",
        padding: "0.75rem 1.25rem",
        textAlign: "center",

    },
    addTitle: {
        ...infoCardHeader
    },
    addUserTitle: {
        ...successCardHeader
    },
    edtiTitle: {
        ...warningCardHeader
    },

    formControl: {
        margin: theme.spacing(1, 2, 1, 2),
        width: "90%",
        minWidth: 120,
    },
    imgForm: {
        border: "1px solid rgba(0, 0, 0, 0.87)"
    },
    imgField: {
        display: "none",
    },

    uploadBtn: {
        margin: theme.spacing(2, 2, 0, 2),
    },
    addBtn: {
        background: infoColor[3],
        "&:hover, &:focus": {
            background: infoColor[0],
            outline: "none"
        }
    },
    addUserBtn: {
        background: successColor[3],
        "&:hover, &:focus": {
            background: successColor[0],
            outline: "none"
        }
    },
    editBtn: {
        background: warningColor[3],
        "&:hover": {
            background: warningColor[0],
            outline: "none"
        }
    },

    selectLabel: {
        display: "inline-block",
        margin: "20px 10px 0 20px"
    },
    selectField: {
        width: "65%"
    },
    submitBtn: {
        width: "100%",
    }
})

export default formSaveUserStyle;