import React, { useState, Fragment, useEffect } from 'react';
import { RotateSpinner } from 'react-spinners-kit';
import { connect } from 'react-redux';
import { Route, Redirect, NavLink } from 'react-router-dom';


import styles from './../assets/jss/material-ui/layouts/adminStyle';
import { makeStyles, useTheme } from '@material-ui/core/styles';

// @material-ui/core components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import IconButton from "@material-ui/core/IconButton";
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';

// @material-ui/icons components
import Search from '@material-ui/icons/Search';
import MailIcon from "@material-ui/icons/Mail";
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from "@material-ui/icons/Menu";
import MoreIcon from '@material-ui/icons/MoreVert';
import AccountCircle from '@material-ui/icons/AccountCircle';


import { adminRoutes } from './../routes';
import * as action from './../redux/actions/actions';

import classNames from "classnames";

const useStyles = makeStyles(styles);

const AdminLayout = props => {

    const classes = useStyles();
    const theme = useTheme();

    const [drawerMobilOpen, setDrawerMobilOpen] = useState(false);
    const [sectionMobilOpen, setSectionMobilOpen] = useState(false);
    const [keyword, setKeyWord] = useState('');

    const handleDrawerToggle = () => {
        setDrawerMobilOpen(!drawerMobilOpen);
    };

    const handleSectionMobileOpen = () => {
        setSectionMobilOpen(!sectionMobilOpen);
    };

    function activeRoute(routeName) {
        return window.location.href.indexOf(routeName) > -1 ? true : false;
    }
    function makeBrand() {
        var name;
        adminRoutes.map(route => {
            if (window.location.href.indexOf(route.path) !== -1) {
                name = route.name
            }
            return null;
        });
        return name;
    }

    const brand = (
        <div className={classes.logo}>
            <NavLink id="brand"
                to="/admin/dashboard"
                className={classes.logoLink}
            >
                <div className={classes.logoImage}>
                    <img src='/logo192.png' alt="logo" className={classes.img} />
                </div>
                ADMIN
            </NavLink>
        </div >
    );

    const drawer = (
        <div>
            <Divider />
            {brand}
            <List className={classes.list}>
                {adminRoutes.map((item, index) => {
                    let ListItemClasses = classNames({
                        [" " + classes["red"]]: activeRoute(item.path)
                    })
                    return <NavLink
                        className={classes.item}
                        key={index}
                        activeClassName="active"
                        to={item.path}>
                        <ListItem button className={classes.itemLink + ListItemClasses}>
                            <ListItemIcon>
                                <item.icon className={classes.itemIcon} />
                            </ListItemIcon>
                            <ListItemText primary={item.name} className={classes.itemText} />
                        </ListItem>
                    </NavLink>
                })}
            </List>
        </div>
    );

    // responsive sectionDestop => sectionMenu
    const renderMobileMenu = (
        <Menu
            className={classes.menuPaper}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            open={sectionMobilOpen}
            onClose={handleSectionMobileOpen}
        >
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={0} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p className="mb-0">Messages</p>
            </MenuItem>
            <MenuItem>
                <NavLink to='/user-profile'>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <p className="mb-0">Profile</p>
                </NavLink>
            </MenuItem>
            <MenuItem>
                <NavLink to='/home'>
                    <IconButton
                        aria-label="show 11 new notifications" color="inherit">
                        <Badge badgeContent={0} color="secondary">
                            <HomeIcon />
                        </Badge>
                    </IconButton>
                    <p className="mb-0" >Home</p>
                </NavLink>
            </MenuItem>
        </Menu >
    );

    const hanldeOnKeyUp = (keyword) => {
        props.routes.OnKeyUp(keyword);
        setKeyWord(keyword);
    }

    const handleOnSearch = () => {
        props.routes.OnSearch(keyword);
    }
    return (
        <div className={classes.root}>
            {/* appbar */}
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.container}>
                    {/* button menu toggle display when screen width < 576px  */}
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        onClick={handleDrawerToggle}
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    {/* logo brand& title */}
                    <Button className={classes.title}>
                        {makeBrand()}
                    </Button>
                    {/* input & search */}
                    <div className={classes.search}>
                        <Input
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={event => { hanldeOnKeyUp(event.target.value) }}
                        />
                        <Button
                            aria-label="search-button"
                            className={classes.searchIcon}
                            onClick={handleOnSearch}>
                            <Search />
                        </Button>
                    </div>
                    {/* destop section */}
                    <div className={classes.sectionDesktop}>
                        <IconButton
                            className={classes.iconButton}
                            aria-label="show 4 new mails"
                            color="inherit">
                            <Badge badgeContent={0} aria-label="mail" color="secondary">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <NavLink to='/user-profile'>
                            <IconButton
                                className={classes.iconButton}
                                aria-label="account of current user"
                                color="inherit">
                                <Badge badgeContent={0} color="secondary">
                                    <AccountCircle />
                                </Badge>
                            </IconButton>
                        </NavLink>
                        <NavLink to='/home'>
                            <IconButton
                                className={classes.iconButton}
                                edge="end"
                                aria-label="view your home page"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <HomeIcon />
                            </IconButton>
                        </NavLink>
                    </div>
                    {/* mobile section */}
                    <div className={classes.sectionMobile}>
                        <IconButton
                            className={classes.iconButton}
                            aria-label="show more"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={handleSectionMobileOpen}
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>

            {/* sidebar */}
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === "rtl" ? "right" : "left"}
                        open={drawerMobilOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        ModalProps={{
                            keepMounted: true // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                        <div
                            className={classes.background}
                        />
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            {/* Components of adminRoutes */}

            <main id="main-content" className={classes.content}>
                <div className={classes.toolbar} />
                {props.children}
            </main>
            {renderMobileMenu}

        </div>
    )
}

function AdminTemplate({ Component, ...props }) {
    const [state, setState] = useState({ isLoading: true });
    useEffect(() => {
        setTimeout(() => {
            setState({
                isLoading: false
            })
        }, 500);
    }, []);

    return (
        state.isLoading ? (<RotateSpinner
            size={100}
            color="#ec5252"
            loading={state.isLoading}
        />) : (<Fragment>
            <Route
                {...props}
                render={propsComponents => {
                    if (localStorage.getItem("adminLogin")) {
                        return (
                            <AdminLayout routes={props}>
                                <Component  {...propsComponents} />
                            </AdminLayout>
                        )
                    }
                    else return <Redirect to="/sign-in" />
                }}
            />
        </Fragment>)

    )
}

const mapDispatchToProps = dispatch => {
    return {
        OnKeyUp: keyword => {
            dispatch(action.actFindingInfo(keyword))
        },
        OnSearch: keyword => {
            dispatch(action.actGetFindingUserProfile(keyword))
        }
    }
}

const mapStateToProps = state => {
    return {
        findingUserList: state.userReducer.findingUserList
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminTemplate);