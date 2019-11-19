import {
    infoCardHeader,
    infoColor,
    warningCardHeader,
    warningColor
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
    edtiTitle: {
        ...warningCardHeader
    },

    formControl: {
        margin: theme.spacing(1, 2, 1, 2),
        width: "90%",
        minWidth: 120,
    },
    imgField: {
        display: "none",
        position: "relative"
    },
    imgName: {
        padding: theme.spacing(5, 0, 0, 4)
    },

    uploadBtn: {
        margin: theme.spacing(2, 2, 0, 2),
    },
    addBtn: {
        background: infoColor[3],
        "&:hover": {
            background: infoColor[0]
        }
    },
    editBtn: {
        background: warningColor[3],
        "&:hover": {
            background: warningColor[0]
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