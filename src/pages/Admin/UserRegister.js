import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as action from '../../redux/actions/actions';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
import { NavLink } from 'react-router-dom';
// import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';

// // @material-ui/cores
import { makeStyles } from "@material-ui/core/styles";
// import { Fab } from '@material-ui/core';

import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
// import PersonAddIcon from '@material-ui/icons/PersonAdd';

// core components
import GridContainer from '../../components/AdminComponents/Grid/GridContainer';
import GridItem from '../../components/AdminComponents/Grid/GridItem';
import CardHeader from '../../components/AdminComponents/Card/CardHeader';
import Card from '../../components/AdminComponents/Card/Card';
import { Button } from '@material-ui/core';
import CardBody from '../../components/AdminComponents/Card/CardBody';
import Table from '../../components/AdminComponents/Table/Table';

import styles from '../../assets/jss/material-ui/views/advancedRegister';
import FormSaveUser from '../../Forms/FormSaveUser';
import { ToastContainer } from 'react-toastify';

const useStyles = makeStyles(styles);

function AdvancedRegisterCourse(props) {

    const classes = useStyles();

    let { course, unRegisterList, waitingList, registeredList } = props;

    const [currentCourse, setCourseState] = useState(
        {
            biDanh: "",
            danhMucKhoaHoc: {},
            hinhAnh: "",
            luotXem: 0,
            maKhoaHoc: "",
            maNhom: "",
            moTa: "",
            ngayTao: "",
            nguoiTao: {},
            soLuongHocVien: 0,
            tenKhoaHoc: "",
            unregisterUsers: [],
            waitingUsers: [],
            registeredUsers: []
        }
    )

    useEffect(() => {
        if (course.maKhoaHoc !== undefined) {
            props.onGetUnregisterUsers(course.maKhoaHoc);
            props.onGetWaitingrUsers(course.maKhoaHoc);
            props.onGetRegisteredUsers(course.maKhoaHoc);
        };
        setCourseState({
            ...currentCourse,
            biDanh: course.biDanh,
            danhMucKhoaHoc: course.danhMucKhoaHoc,
            hinhAnh: course.hinhAnh,
            luotXem: course.luotXem,
            maKhoaHoc: course.maKhoaHoc,
            maNhom: course.maNhom,
            moTa: course.moTa,
            ngayTao: course.ngayTao,
            nguoiTao: course.nguoiTao,
            soLuongHocVien: course.soLuongHocVien,
            tenKhoaHoc: course.tenKhoaHoc,
            unregisterUsers: unRegisterList,
            waitingUsers: waitingList,
            registeredUsers: registeredList
        });
    }, [course, registeredList]);

    // render

    const renderTableList = (talbeList, color, title) => {
        if (talbeList && talbeList.length > 0) {
            talbeList = talbeList.map((item, index) => {
                return { ...item, key: index }
            })
        }
        return (
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader hovercontent={title} color={color}>
                        <h2>{title}</h2>
                    </CardHeader>
                    <CardBody>
                        <Table
                            tableHeaderColor={color}
                            tableHead={["ID", "Account", "Full Name", "Code Name"]}
                            tableData={talbeList}
                            rowsOnPage={5}
                            listType={title}
                            courseID={course.maKhoaHoc}
                        />
                    </CardBody>
                </Card>
            </GridItem >
        )
    }

    if (course !== {} && course.hinhAnh !== undefined) {
        return (
            <GridContainer className="container-fluid">
                <GridItem xs={12} sm={6} md={4}>
                    <Card>
                        <CardHeader hovercontent="Course Image" color="info" style={{
                            height: "250px"
                        }}>
                            <img
                                className='img-fluid'
                                src={currentCourse.hinhAnh}
                                style={{
                                    height: "200px",
                                    width: "450px"
                                }}
                                alt='/' />
                        </CardHeader>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={8}>
                    <Card>
                        <CardBody className={classes.bodyContent}>
                            <h3 className={classes.courseName}>{currentCourse.tenKhoaHoc}</h3>
                            <div className={classes.rating}>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarHalfIcon />
                                <span style={{ marginLeft: 10 }}>41 reviews</span>
                            </div>
                            <p className={classes.description}>{currentCourse.moTa}</p>
                            <h4 className={classes.price}>current price: <span>$10.99</span></h4>
                            <p className={classes.vote}><strong>91%</strong> of people enjoyed this product! <strong>(87 votes)</strong></p>
                            <p>Created by <strong>Jonathan Dennis.</strong></p>
                        </CardBody>
                    </Card>
                </GridItem>
                {/* {currentCourse.registeredUsers && currentCourse.registeredUsers.length > 0 ? */}
                {renderTableList(currentCourse.registeredUsers, "success", "Registered")}
                {/* : ""} */}
                {/* {currentCourse.waitingUsers && currentCourse.waitingUsers.length > 0 ?*/}
                {renderTableList(currentCourse.waitingUsers, "warning", "Waiting Accept")}
                {/* : ""}; */}
                {/* {currentCourse.unregisterUsers && currentCourse.unregisterUsers.length > 0 ? */}
                {renderTableList(currentCourse.unregisterUsers, "danger", "Unregister")}
                {/* : ""}; */}
                <FormSaveUser />
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
                        outline: "none"
                    }}
                />
                <ToastContainer />
            </GridContainer >
        )
    }
    return (
        <div className="container-fluid" style={{ textAlign: "center", fontWeight: "bolder", fontSize: "20px" }}>
            <p>
                Direction :
                <Button variant="contained" color="secondary" style={{ margin: '0 10px' }}>
                    <NavLink style={{ color: '#fff' }} to='/admin/courses-management'>
                        Back To Course management
                    </NavLink>
                </Button>
                and click view to choose a course you wanna manage the user register list .
            </p>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onGetUnregisterUsers: courseID => {
            dispatch(action.actGetUnregisterUsers(courseID))
        },
        onGetWaitingrUsers: courseID => {
            dispatch(action.actGetWaitingUsers(courseID))
        },
        onGetRegisteredUsers: courseID => {
            dispatch(action.actGetRegisteredUsers(courseID))
        }
    }
}

const mapStateToProps = state => {
    return {
        course: state.courseReducer.editCourse,
        unRegisterList: state.userReducer.unRegisterList,
        waitingList: state.userReducer.waitingList,
        registeredList: state.userReducer.registeredList,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdvancedRegisterCourse);