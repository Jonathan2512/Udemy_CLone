import React from 'react';
import * as action from './../../../redux/actions/actions';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import classNames from 'classnames';

// core component
import GridItem from "./../Grid/GridItem";
import Card from "./../Card/Card";
import CardHeader from "./../Card/CardHeader.js";
import CardBody from "./../Card/CardBody.js";
import CardFooter from "./../Card/CardFooter.js";

// material core
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";

// material ui icon
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import styles from './../../../assets/jss/material-ui/views/courseManagementStyle';
import { Button } from '@material-ui/core';



const useStyles = makeStyles(styles);

function Course(props) {

    const classes = useStyles();

    let { course } = props;

    const handleDelete = (courseID) => {
        let { history } = props;
        props.deleteCourse(courseID, history);
    }

    return (
        <GridItem xs={12} sm={6} md={3}>
            <Card>
                <CardHeader course={course} color="info"
                    style={{
                        height: "250px"
                    }}>
                    <img
                        className="img-fluid"
                        src={course.hinhAnh}
                        style={{
                            height: "200px",
                            width: "450px"
                        }}
                        alt='/' />
                </CardHeader>
                <CardBody>
                    <p className={classes.courseTitle}>{course.tenKhoaHoc}</p>
                    <p className={classes.courseContent}>{course.moTa}</p>
                </CardBody>
                <CardFooter style={{ justifyContent: "space-between" }}>
                    <NavLink to='/admin/user-register' className={classes.viewLink}>
                        <Button
                            className={classes.viewBtn}
                            onClick={() => { props.onSaveCourse(course) }}>
                            <p className={classes.view}>views : {course.luotXem}</p>
                        </Button>
                    </NavLink>
                    <div className={classes.manageBtn}>
                        <Fab className={classNames({
                            [classes.fab]: true,
                            [classes.edit]: true
                        })}
                            data-toggle="modal"
                            data-target="#formSaveCourse"
                            onClick={() => { props.onSaveCourse(course) }}>
                            <EditIcon />
                        </Fab>
                        <Fab className={classNames({
                            [classes.fab]: true,
                            [classes.delete]: true
                        })}
                            onClick={() => handleDelete(course.maKhoaHoc)}
                        >
                            <DeleteIcon />
                        </Fab>
                    </div>
                </CardFooter>
            </Card>
        </GridItem >
    )
}

const mapDispatchToProps = dispatch => {
    return {
        deleteCourse: (courseID, history) => {
            dispatch(action.actDeleteCourse(courseID, history))
        },
        onSaveCourse: (course) => {
            dispatch(action.actSaveCourse(course))
        }
    }
}

export default connect(null, mapDispatchToProps)(Course);