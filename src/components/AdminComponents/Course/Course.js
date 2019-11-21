import React from 'react';
import * as action from './../../../redux/actions/actions';
import { connect } from 'react-redux';
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



const useStyles = makeStyles(styles);

function Course(props) {

    const handleDelete = (courseID) => {
        let { history } = props;
        props.deleteCourse(courseID, history);
    }

    const classes = useStyles();

    let { course } = props;

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
                    <p className={classes.view}>views : {course.luotXem}</p>
                    <div className={classes.manageBtn}>
                        <Fab className={classNames({
                            [classes.fab]: true,
                            [classes.edit]: true
                        })}
                            data-toggle="modal"
                            data-target="#formSaveCourse"
                            onClick={() => { props.updateModal(course) }}>
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
        updateModal: (course) => {
            dispatch(action.actUpdateModal(course))
        }
    }
}

export default connect(null, mapDispatchToProps)(Course);