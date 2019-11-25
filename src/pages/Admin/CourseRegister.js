import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as action from '../../redux/actions/actions';

// @material-ui/cores
// import { makeStyles } from "@material-ui/core/styles";

// core components
// import GridContainer from '../../components/AdminComponents/Grid/GridContainer';
// import GridItem from '../../components/AdminComponents/Grid/GridItem';
// import CardHeader from '../../components/AdminComponents/Card/CardHeader';
// import Card from '../../components/AdminComponents/Card/Card';
import { Button } from '@material-ui/core';
// import CardBody from '../../components/AdminComponents/Card/CardBody';
// import Course from './../../components/AdminComponents/Course/Course';

function CourseRegister(props) {

    let { user } = props;

    useEffect(() => {
        if (user.taiKhoan !== undefined) {
            props.onGetUnregisterCourses(user.taiKhoan);
            props.onGetWaitingCourses(user.taiKhoan);
            props.onGetRegisteredCourses(user.taiKhoan);
        }
    }, [])

    return (
        <div className="container-fluid" style={{ textAlign: "center", fontWeight: "bolder", fontSize: "20px" }}>
            <p>
                Direction :
            <Button variant="contained" color="primary" style={{ margin: '0 10px' }}>
                    <NavLink style={{ color: '#fff' }} to='/admin/users-management'>
                        Back To Users Management
                </NavLink>
                </Button>
                and click view to account you wanna manage the course register list .
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
    }
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.saveUser
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseRegister);