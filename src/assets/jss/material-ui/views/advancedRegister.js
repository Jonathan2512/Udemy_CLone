import {
    infoBoxShadow,
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
    }
}

export default advancedRegister;