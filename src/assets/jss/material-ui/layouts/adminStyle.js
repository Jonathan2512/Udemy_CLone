import { fade } from '@material-ui/core/styles'

import {
    hexToRgb,
    dangerColor,
    blackColor,
    whiteColor,
    defaultFont,
    grayColor,
} from './../material-dashboard-react'

const drawerWidth = 280;

const adminStyle = theme => ({
    root: {
        display: "flex",
        backgroundColor: "#eee",
        height: "100%"
    },
    drawer: {
        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0
        },
        boxShadow: "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        border: "none",
        backgroundImage: "url(/img/sidebar-2.310509c9.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        "&:after": {
            position: "absolute",
            zIndex: "3",
            width: "100%",
            height: "100%",
            content: '""',
            display: "block",
            background: "#000",
            opacity: ".7"
        }
    },
    logo: {
        position: "relative",
        padding: "15px 15px",
        zIndex: "9999",
        "&:after": {
            content: '""',
            position: "absolute",
            bottom: "0",
            height: "1px",
            right: "15px",
            width: "calc(100% - 30px)",
            backgroundColor: "rgba(" + hexToRgb(grayColor[6]) + ", 0.3)"
        }
    },
    logoLink: {
        ...defaultFont,
        textTransform: "uppercase",
        padding: "5px 0 5px 45px",
        display: "block",
        fontSize: "18px",
        textAlign: "left",
        fontWeight: "400",
        lineHeight: "45px",
        textDecoration: "none",
        backgroundColor: "transparent",
        "&,&:hover": {
            color: whiteColor,
            textDecoration: "none"
        }
    },
    logoImage: {
        width: "30px",
        display: "inline-block",
        maxHeight: "30px",
        marginLeft: "10px",
        marginRight: "15px"
    },
    img: {
        width: "35px",
        top: "22px",
        position: "absolute",
        verticalAlign: "middle",
        border: "0"
    },
    list: {
        marginTop: "20px",
        paddingLeft: "0",
        paddingTop: "0",
        paddingBottom: "0",
        marginBottom: "0",
        listStyle: "none",
        position: "unset",

    },
    item: {
        zIndex: "999",
        position: "relative",
        display: "block",
        textDecoration: "none",
        "&:hover,&:focus,&:visited,&": {
            color: "#fff",
            textDecoration: "none"
        }
    },
    itemLink: {
        width: "auto",
        transition: "all 300ms linear",
        margin: "10px 15px 0",
        borderRadius: "3px",
        position: "relative",
        display: "flex",
        padding: "10px 15px",
        backgroundColor: "transparent",
        ...defaultFont,
    },
    itemIcon: {
        width: "24px",
        height: "30px",
        fontSize: "24px",
        lineHeight: "30px",
        float: "left",
        marginRight: "15px",
        textAlign: "center",
        verticalAlign: "middle",
        color: "rgba(" + hexToRgb(whiteColor) + ", 0.8)"
    },
    itemText: {
        ...defaultFont,
        margin: "0",
        lineHeight: "30px",
        fontSize: "14px",
        color: whiteColor,
    },
    red: {
        backgroundColor: "#f44336",
        boxShadow:
            "0 12px 20px -10px rgba(" +
            hexToRgb(dangerColor[0]) +
            ",.28), 0 4px 20px 0 rgba(" +
            hexToRgb(blackColor) +
            ",.12), 0 7px 8px -5px rgba(" +
            hexToRgb(dangerColor[0]) +
            ",.2)",
        "&:hover,&:focus": {
            backgroundColor: dangerColor[0],
            boxShadow:
                "0 12px 20px -10px rgba(" +
                hexToRgb(dangerColor[0]) +
                ",.28), 0 4px 20px 0 rgba(" +
                hexToRgb(blackColor) +
                ",.12), 0 7px 8px -5px rgba(" +
                hexToRgb(dangerColor[0]) +
                ",.2)"
        }
    },
    appBar: {
        [theme.breakpoints.up("sm")]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth
        },
        backgroundColor: "transparent",
        color: "#3c4858",
        boxShadow: "none"
    },
    title: {
        ...defaultFont,
        letterSpacing: "unset",
        lineHeight: "30px",
        fontSize: "18px",
        borderRadius: "3px",
        textTransform: "none",
        color: whiteColor,
        margin: "0 0 0 0",
        "&:hover,&:focus": {
            background: "transparent",
            color: dangerColor[0],
            outline: "none"
        },
        minWidth: '200px',
        marginRight: "50%",
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    container: {
        padding: "10px 0 10px 0",
        minHeight: "50px",
        background: "rgba(0,0,0, .7)",
        backgroundImage: "url(/img/sidebar-2.310509c9.jpg)",
        backgroundSize: "contain",
        backgroundPosition: "right top",
        zIndex: "5",
        "&:after": {
            position: "absolute",
            zIndex: "-3",
            width: "100%",
            height: "100%",
            content: '""',
            display: "block",
            background: "#000",
            opacity: ".4"
        }
    },
    menuButton: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        color: whiteColor,
        "&:focus": {
            outline: "none"
        },
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    search: {
        position: 'relative',
        display: 'flex',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: "transparent",
        marginRight: theme.spacing(2),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(18),
            width: 'auto',
        },
    },
    searchIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: "30px",
        lineHeight: "44px",
        height: "44px",
        minWidth: "44px !important",
        zIndex: "101",
        color: grayColor[0],
        backgroundColor: whiteColor,
        touchAction: "manipulation",
        "&:hover,&:focus": {
            color: dangerColor[0],
            backgroundColor: whiteColor,
            outline: "none"
        },
        [theme.breakpoints.down("sm")]: {
            marginLeft: theme.spacing(2.5)
        }
    },
    inputRoot: {
        display: "inline-block",
        "&:hover:before,&:before": {
            borderColor: grayColor[4] + " !important",
            borderWidth: "1px !important"
        },
        "&:after": {
            borderColor: dangerColor[0]
        }
    },
    inputInput: {
        padding: theme.spacing(1, 0, 1, 2),
        marginTop: theme.spacing(1),
        transition: theme.transitions.create('width'),
        width: '100%',
        zIndex: '99',
        backgroundColor: fade(theme.palette.common.white, 0.15),
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
        "&:focus": {
            backgroundColor: whiteColor
        }
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
        marginLeft: '25px',
    },
    iconButton: {
        color: whiteColor,
        "&:hover,&:focus": {
            outline: "none",
            color: dangerColor[0],
        }
    },
    sectionMobile: {
        display: 'flex',
        marginLeft: '20px',
        [theme.breakpoints.up('md')]: {
            display: 'none',
            color: whiteColor
        },
    },
    menuPaper: {
        top: "-70% !important",
        left: "220px !important"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    }
});

export default adminStyle;