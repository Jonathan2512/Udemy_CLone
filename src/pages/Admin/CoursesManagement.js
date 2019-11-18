import React, { useState, Fragment, useEffect } from 'react';
import * as action from './../../redux/actions/actions';
import { connect } from 'react-redux';
import classNames from 'classnames';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


// @material-ui/icons
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

// core components
import GridItem from "./../../components/AdminComponents/Grid/GridItem";
import GridContainer from "./../../components/AdminComponents/Grid/GridContainer.js";
import Card from "./../../components/AdminComponents/Card/Card.js";
import CardHeader from "./../../components/AdminComponents/Card/CardHeader.js";
import CardBody from "./../../components/AdminComponents/Card/CardBody.js";
import CardFooter from "./../../components/AdminComponents/Card/CardFooter.js";

import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
import styles from '././../../assets/jss/material-ui/views/courseManagementStyle';
import FormEditCourse from '../../Forms/FormEditCourse';

const useStyles = makeStyles(styles);

function CoursesManagement(props) {

    console.log(props.history)
    const classes = useStyles();

    useEffect(() => {
        props.getCourseList();
        props.getCourseCategory();
    }, [])

    const handleDelete = (courseID) => {
        let { history } = props;
        props.deleteCourse(courseID, history);
    }

    const handleEdit = () => {

    }

    const renderCourses = (courses) => {
        return courses.map((item, index) => {
            return (
                <GridItem key={index} xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader course={item} color="info"
                            style={{
                                height: "250px"
                            }}>
                            <img
                                className="img-fluid"
                                src={item.hinhAnh}
                                style={{
                                    height: "200px",
                                    width: "450px"
                                }}
                                alt='/' />
                        </CardHeader>
                        <CardBody>
                            <p className={classes.courseTitle}>{item.tenKhoaHoc}</p>
                            <p className={classes.courseContent}>{item.moTa}</p>
                        </CardBody>
                        <CardFooter style={{ justifyContent: "flex-end" }}>
                            <Fab className={classNames({
                                [classes.fab]: true,
                                [classes.edit]: true
                            })}
                                data-toggle="modal"
                                data-target="#formEditUser"
                            >
                                <EditIcon />
                            </Fab>
                            <Fab className={classNames({
                                [classes.fab]: true,
                                [classes.delete]: true
                            })}
                                onClick={() => handleDelete(item.maKhoaHoc)}
                            >
                                <DeleteIcon />
                            </Fab>
                        </CardFooter>
                    </Card>
                </GridItem >
            )
        })
    }

    const renderCoursesList = (courseType) => {
        let { courseCategoryList } = props;
        if ((courseCategoryList.BackEnd
            && courseCategoryList.Design
            && courseCategoryList.DiDong
            && courseCategoryList.FrontEnd
            && courseCategoryList.FullStack
            && courseCategoryList.TuDuy) !== undefined) {
            switch (courseType) {
                case "BackEnd":
                    return renderCourses(courseCategoryList.BackEnd);
                case "Design":
                    return renderCourses(courseCategoryList.Design);
                case "DiDong":
                    return renderCourses(courseCategoryList.DiDong);
                case "FrontEnd":
                    return renderCourses(courseCategoryList.FrontEnd);
                case "FullStack":
                    return renderCourses(courseCategoryList.FullStack);
                case "TuDuy":
                    return renderCourses(courseCategoryList.TuDuy);
                default:
                    return;
            }

        }
    }

    const renderCourseCategory = () => {
        let { courseCategory } = props;
        if (courseCategory && courseCategory.length > 0) {
            return courseCategory.map((item, index) => {
                return (
                    <GridContainer key={index}>
                        <GridItem xs={12} sm={12} md={12}>
                            <Card >
                                <CardHeader hovercontent={item.tenDanhMuc} color="danger">
                                    <h3>{item.tenDanhMuc}</h3>
                                </CardHeader>
                            </Card>
                        </GridItem>
                        {renderCoursesList(item.maDanhMuc)}
                    </GridContainer>
                )
            })
        }
    }

    const renderFindingCourse = () => {
        let { courseList, keyword } = props;
        courseList = courseList.filter(course => {
            return course.tenKhoaHoc.toLowerCase().includes(keyword.toLowerCase());
        })
        if (courseList.length < 1) {
            return (
                <div className="container">
                    <h2 className="bg-secondary text-dark p-3"> Course Not Found</h2>
                </div>
            )
        }
        return renderCourses(courseList);
    }

    if (props.keyword !== "") {
        return (
            <Fragment>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card category="On Key Up">
                            <CardHeader color="danger">
                                <h3>May be You Finding</h3>
                            </CardHeader>
                        </Card>
                    </GridItem>
                    {renderFindingCourse()}
                </GridContainer>
            </Fragment>
        )
    }
    return (
        <Fragment>
            {renderCourseCategory()}
            <ScrollUpButton
                StopPosition={0}
                ShowAtPosition={100}
                EasingType='easeOutCubic'
                AnimationDuration={500}
                ContainerClassName='ScrollUpButton__Container'
                TransitionClassName='ScrollUpButton__Toggled'
                style={{
                    fill: "#f44336",
                    border: "2px solid #f44336",
                    outline: "none"
                }}
            />
            <Fab className={classNames({
                [classes.fab]: true,
                [classes.add]: true
            })}>
                <AddIcon />
            </Fab>
            <FormEditCourse />
        </Fragment >
    )
}


const mapDispatchToProps = dispatch => {
    return {
        getCourseList: () => {
            dispatch(action.actGetCourseList());
        },
        getCourseCategory: () => {
            dispatch(action.actGetCourseCategory());
        },
        deleteCourse: (courseID, history) => {
            dispatch(action.actDeleteCourse(courseID, history))
        }
    }
}

const mapStateToProps = state => {
    return {
        courseCategoryList: state.courseReducer.courseCategoryList,
        courseCategory: state.courseReducer.courseCategory,
        courseList: state.courseReducer.courseList,
        keyword: state.courseReducer.keyword,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CoursesManagement);