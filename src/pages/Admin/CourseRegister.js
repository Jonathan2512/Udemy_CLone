import React, { useState, useEffect, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import * as action from '../../redux/actions/actions';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';

// @material-ui/cores
import { makeStyles } from "@material-ui/core/styles";
import { Fab, Button } from '@material-ui/core';

// @material-ui/icons
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove"

// core components
import GridContainer from '../../components/AdminComponents/Grid/GridContainer';
import GridItem from '../../components/AdminComponents/Grid/GridItem';
import Card from '../../components/AdminComponents/Card/Card';
import CardHeader from '../../components/AdminComponents/Card/CardHeader';
import CardBody from '../../components/AdminComponents/Card/CardBody';

import styles from '../../assets/jss/material-ui/views/advancedRegister';
import { ToastContainer } from 'react-toastify';

const useStyles = makeStyles(styles);

function CourseRegister(props) {

    const classes = useStyles();

    let { user, unregisterCourses, waitingCourses, registeredCourses } = props;

    const [state, setState] = useState({
        unregisterCourses: [],
        waitingCourses: [],
        registeredCourses: []
    })

    useEffect(() => {
        if (user.taiKhoan !== undefined) {
            props.onGetUnregisterCourses(user.taiKhoan);
            props.onGetWaitingCourses(user.taiKhoan);
            props.onGetRegisteredCourses(user.taiKhoan);
        }
        setState({
            ...state,
            unregisterCourses,
            waitingCourses,
            registeredCourses
        })
    }, [user, registeredCourses])

    const renderRegisterButton = (type, courseID) => {
        switch (type) {
            case "Registered Courses":
                return (
                    <Fragment>
                        <Fab className={classNames({
                            [classes.fab]: true,
                            [classes.delete]: true
                        })}
                            onClick={() => {
                                props.onDeregisterUser(courseID, user.taiKhoan);
                            }}>
                            <RemoveIcon />
                        </Fab>
                    </Fragment>
                )
            case "Waiting Courses":
                return (
                    <div>
                        <Fab className={classNames({
                            [classes.fab]: true,
                            [classes.add]: true
                        })}
                            onClick={() => {
                                props.onRegisterUser(courseID, user.taiKhoan);
                            }}>
                            <AddIcon />
                        </Fab>
                        <Fab className={classNames({
                            [classes.fab]: true,
                            [classes.delete]: true
                        })}
                            onClick={() => {
                                props.onDeregisterUser(courseID, user.taiKhoan);
                            }}>
                            <RemoveIcon />
                        </Fab>
                    </div>
                )
            case "Unregister Courses":
                return (
                    <Fragment>
                        <Fab className={classNames({
                            [classes.fab]: true,
                            [classes.add]: true
                        })}
                            onClick={() => {
                                props.onRegisterUser(courseID, user.taiKhoan);
                            }}>
                            <AddIcon />
                        </Fab>
                    </Fragment>)
            default:
                break;
        }
    }

    const renderRegisterCourse = (courses, type, color) => {
        if (courses && courses.length > 0) {
            return courses.map((item, index) => {
                return (
                    <GridItem key={index} xs={12} sm={6} md={3}>
                        <Card>
                            <CardHeader hovercontent={type} color={color}>
                                <p className={classes.name}><strong>Course : </strong>{item.tenKhoaHoc}</p>
                            </CardHeader>
                            <CardBody className={classes.manage}>
                                <p className={classes.id}><strong>ID : </strong> {item.maKhoaHoc}</p>
                                {renderRegisterButton(type, item.maKhoaHoc)}
                            </CardBody>
                        </Card>
                    </GridItem>
                )
            })
        }
    }

    if (user !== {} && user.taiKhoan !== undefined) {
        return (
            <GridContainer>
                <GridItem xs={12} sm={6} md={4}>
                    <Card>
                        <CardHeader color='info' hovercontent='Bello !'>
                            <img src="/img/personal-user-illustration-@2x.png"
                                alt="/"
                                className='img-fluid'
                                style={{
                                    height: "300px",
                                    margin: "0 85px"
                                }} />
                        </CardHeader>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={8}>
                    <Card className={classes.profile}>
                        <CardHeader
                            className={classes.title}
                            hovercontent="User Profile"
                            color='info'> Hello ! {user.hoTen} </CardHeader>
                        <CardBody>
                            <div className="row">
                                <div className="col-md-6">
                                    <label className={classes.label}>User Account : </label>
                                </div>
                                <div className="col-md-6">
                                    <p className={classes.info}>{user.taiKhoan}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label className={classes.label}>FullName : </label>
                                </div>
                                <div className="col-md-6">
                                    <p className={classes.info}>{user.hoTen}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label className={classes.label}>Email : </label>
                                </div>
                                <div className="col-md-6">
                                    <p className={classes.info}>{user.email}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label className={classes.label}>Phone :</label>
                                </div>
                                <div className="col-md-6">
                                    <p className={classes.info}>{user.soDt}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label className={classes.label}>User Type : </label>
                                </div>
                                <div className="col-md-6">
                                    <p className={classes.info}>{user.maLoaiNguoiDung}</p>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader hovercontent='Unregister Courses' color='success'>
                            <h3>Registered Courses</h3>
                        </CardHeader>
                    </Card>
                </GridItem>
                {renderRegisterCourse(state.registeredCourses, "Registered Courses", 'success')}
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader hovercontent='Waiting Courses' color='warning'>
                            <h3>Waiting Accept Courses</h3>
                        </CardHeader>
                    </Card>
                </GridItem>
                {renderRegisterCourse(state.waitingCourses, "Waiting Courses", 'warning')}
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader hovercontent='Unregister Courses' color='danger'>
                            <h3>Unregister Courses</h3>
                        </CardHeader>
                    </Card>
                </GridItem>
                {renderRegisterCourse(state.unregisterCourses, "Unregister Courses", 'danger')}
                <ScrollUpButton
                    StopPosition={0}
                    ShowAtPosition={50}
                    EasingType='easeOutCubic'
                    AnimationDuration={500}
                    ContainerClassName='ScrollUpButton__Container'
                    TransitionClassName='ScrollUpButton__Toggled'
                    style={{
                        fill: "#f44336",
                        border: "2px solid #f44336",
                        outline: "none",
                        zIndex: 1000
                    }}
                />
                <ToastContainer />
            </GridContainer>
        )
    }

    return (
        <div className="container-fluid" style={{ textAlign: "center", fontWeight: "bolder", fontSize: "20px" }}>
            <p>
                Direction :
            <Button variant="contained" color="primary" style={{ margin: '0 10px' }}>
                    <NavLink className={classes.btnLink} to='/admin/users-management'>
                        Back To Users Management
                </NavLink>
                </Button>
                and click to Account you wanna manage The Register Course List .
        </p>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onGetUnregisterCourses: account => {
            dispatch(action.actGetUnregisterCourses(account))
        },
        onGetWaitingCourses: account => {
            dispatch(action.actGetWaitingCourses(account))
        },
        onGetRegisteredCourses: account => {
            dispatch(action.actGetRegisteredCourses(account))
        },
        onRegisterUser: (courseID, account) => {
            dispatch(action.actRegiterUser(courseID, account))
        },
        onDeregisterUser: (courseID, account) => {
            dispatch(action.actDeregisterUser(courseID, account))
        }
    }
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.saveUser,
        unregisterCourses: state.courseReducer.unregisterCourses,
        waitingCourses: state.courseReducer.waitingCourses,
        registeredCourses: state.courseReducer.registeredCourses
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseRegister);