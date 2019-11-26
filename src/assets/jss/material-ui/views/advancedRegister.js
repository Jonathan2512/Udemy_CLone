import {
    infoBoxShadow, whiteColor, grayColor, blackColor, dangerColor, successColor, successBoxShadow
} from './../material-dashboard-react';

const advancedRegister = {
    bodyContent: {
        textAlign: 'center',
        boxShadow: infoBoxShadow
    },
    courseName: {
        textTransform: "uppercase",
        fontSize: 40,
        fontWeight: "bolder",
        letterSpacing: '3px'
    },
    rating: {
        '& svg': {
            color: '#f4c150'
        }
    },
    price: {
        textTransform: "uppercase",
        fontWeight: "bold"
    },
    description: {
        margin: '10px 0',
        fontSize: '20px',
    },
    vote: {
        fontSize: '16px',
        margin: '10px 0'
    },
    btnLink: {
        color: whiteColor,
        "&:hover, &:focus": {
            textDecoration: 'none',
            color: whiteColor
        }
    },
    profile: {
        padding: '30px 100px'
    },
    title: {
        fontSize: '30px',
        textAlign: 'center'
    },

    label: {
        fontSize: "20px",
        color: blackColor,
        fontWeight: 'bold'
    },
    info: {
        fontSize: '16px',
        color: grayColor[0],
        fontStyle: 'italic'
    },
    name: {
        textAlign: 'center',
        fontSize: 16,
        paddingTop: 20
    },
    manage: {
        display: "flex",
        justifyContent: "space-between"
    },
    id: {
        fontSize: 16,
        marginTop: 10
    },
    fab: {
        margin: "0 10px 10px 0",
        "&:focus": {
            outline: "none",
        }
    },
    delete: {
        backgroundColor: dangerColor[3],
        "&:hover, &:focus": {
            backgroundColor: dangerColor[0],
        }
    },
    add: {
        backgroundColor: successColor[3],
        boxShadow: successBoxShadow,
        "&:hover, &:focus": {
            backgroundColor: successColor[0]
        }
    }
}

export default advancedRegister;