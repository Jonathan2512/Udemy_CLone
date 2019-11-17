import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../redux/actions/actions'
import Course from './../../components/HomeComponents/Course';


class RegisterCourse extends Component {

    constructor(props) {
        super(props);
        if (localStorage.getItem("userLogin") !== null) {
            this.props.GetCourseList();
            this.props.GetUserInfo();
        }
    }

    renderRegisteredCourses = () => {
        let { courseList, userInfo } = this.props;
        let courseRegisteredList = [];

        // connect to courseReducer to get courseList from api
        //  and compare items of userInfo.chitaiKhoaHocGhiDanh and couseList 
        //  if true => push to courseRegisterdList
        if (courseList !== {} && courseList.length > 1) {
            if (userInfo.chiTietKhoaHocGhiDanh) {
                userInfo.chiTietKhoaHocGhiDanh.forEach((e1) => courseList.forEach((e2) => {
                    if (e1.maKhoaHoc === e2.maKhoaHoc) {
                        courseRegisteredList.push(e2);
                    }
                }))
            }
        }

        // Catch Error :
        // if user registered a course but actGetCourseList changed new uri (ex : GP09 -> GP01 ) and courseList in courseReducer changes.
        // get the registered course was saved to localstorage and push to courseRegisteredList

        if (courseRegisteredList.length < 1) {
            if (userInfo.chiTietKhoaHocGhiDanh) {
                userInfo.chiTietKhoaHocGhiDanh.map(e => {
                    if (JSON.parse(localStorage.getItem(`${e.maKhoaHoc}`)) !== null) {
                        courseRegisteredList.push(JSON.parse(localStorage.getItem(`${e.maKhoaHoc}`)));
                    }
                    return null;
                })
            }
        }

        if (courseRegisteredList && courseRegisteredList.length > 0) {
            return courseRegisteredList.map((item, index) => {
                return (
                    <div key={index} className="col-sm-4 mt-3">
                        <Course Course={item} />
                    </div>
                )
            })
        }
        else {
            return <h2 className="alert alert-light text-left"> You don't register any course.</h2>
        }
    }

    render() {
        if (localStorage.getItem("userLogin") !== null) {
            return (
                <div className="container mt-5">
                    <h2 className="registered-title text-center"> Your Registered Courses</h2>
                    <div className="row">
                        {this.renderRegisteredCourses()}
                    </div>
                </div>
            )
        }
        else return (
            <div className="alert alert-warning">
                <strong>Warning!</strong> You Are Sign Out Now !!!.
            </div>
        )

    }
}


const mapStateToProps = state => {
    return {
        courseList: state.courseReducer.courseList,
        userInfo: state.userReducer.userInfo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        GetCourseList: () => {
            dispatch(action.actGetCourseList());
        },
        onGetUser: () => {
            dispatch(action.actGetUserInfo())
        },
        GetUserInfo: () => {
            dispatch(action.actGetUserInfo());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterCourse);


