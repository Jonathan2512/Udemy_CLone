import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../redux/actions/actions';
import Course from '../../components/HomeComponents/Course';

class CourseListPage extends Component {

    componentDidMount() {
        this.props.GetCourseList();
        this.props.GetCourseCategory();
    }

    renderCourses = (courses) => {
        return courses.map((item, index) => {
            if (index % 3 === 0) {
                return courses.slice(index, index + 3).map((item, index) => {
                    return (
                        <div key={index} className="col-sm-4 mt-3">
                            <Course Course={item} />
                        </div>
                    )
                })
            }
            return <div key={index}></div>
        });
    }

    renderCourseList = (tabID) => {

        let { CourseListAPI } = this.props;

        // Catch Err :
        if ((CourseListAPI.BackEnd
            && CourseListAPI.Design
            && CourseListAPI.FullStack
            && CourseListAPI.DiDong
            && CourseListAPI.FrontEnd
            && CourseListAPI.TuDuy) !== undefined) {
            switch (tabID) {
                case "BackEnd":
                    return this.renderCourses(CourseListAPI.BackEnd);
                case "Design":
                    return this.renderCourses(CourseListAPI.Design);
                case "DiDong":
                    return this.renderCourses(CourseListAPI.DiDong);
                case "FrontEnd":
                    return this.renderCourses(CourseListAPI.FrontEnd);
                case "FullStack":
                    return this.renderCourses(CourseListAPI.FullStack);
                case "TuDuy":
                    return this.renderCourses(CourseListAPI.TuDuy);
                default:
                    return;
            }
        }
    }
    renderCourseCategory = () => {
        let { CourseCategoryAPI } = this.props;
        return CourseCategoryAPI.map((item, index) => {
            if (index === 0) {
                return (
                    <a key={index} className="nav-item nav-link active" data-toggle="tab" href={`#${item.maDanhMuc}`} role="tab" aria-selected="true">{item.tenDanhMuc}</a>
                )
            }
            else return (
                <a key={index} className="nav-item nav-link" data-toggle="tab" href={`#${item.maDanhMuc}`} role="tab">{item.tenDanhMuc}</a>
            )
        })
    }
    renderFindingCourse = () => {
        let { Courses, keyword } = this.props;

        Courses = Courses.filter(course => {
            return course.tenKhoaHoc.toLowerCase().includes(keyword.toLowerCase());
        })
        if (Courses.length < 1) {
            return (
                <div className="container">
                    <h2 className="bg-secondary text-dark p-3"> Course Not Found</h2>
                </div>
            )
        }
        return Courses.map((course, index) => {
            return (
                <div key={index} className="col-sm-4">
                    <Course Course={course} />
                </div>
            )
        })
    }
    render() {
        if (this.props.keyword !== "") {
            return (
                <div className="container">
                    <h2 className="m-5 finding-title">May be you finding :</h2>
                    <div className="card-deck">
                        {this.renderFindingCourse()}
                    </div>
                </div>)
        }
        else return (
            <section className="courses-section" >
                <div className="courses-content">
                    <div className="row">
                        <div className="col-sm-12 courses-item">
                            <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    {this.renderCourseCategory()}
                                </div>
                            </nav>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="BackEnd" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <div className="row showCourse">
                                        {this.renderCourseList("BackEnd")}
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="Design" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <div className="row showCourse">
                                        {this.renderCourseList("Design")}
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="DiDong" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <div className="row showCourse">
                                        {this.renderCourseList("DiDong")}
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="FrontEnd" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <div className="row showCourse">
                                        {this.renderCourseList("FrontEnd")}
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="FullStack" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <div className="row showCourse">
                                        {this.renderCourseList("FullStack")}
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="TuDuy" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <div className="row showCourse">
                                        {this.renderCourseList("TuDuy")}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        GetCourseList: () => {
            dispatch(action.actGetCourseList());
        },
        GetCourseCategory: () => {
            dispatch(action.actGetCourseCategory());
        }
    }
}

const mapStateToProps = state => {
    return {
        CourseListAPI: state.courseReducer.courseCategoryList,
        CourseCategoryAPI: state.courseReducer.courseCategory,
        Courses: state.courseReducer.courseList,
        keyword: state.courseReducer.keyword
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseListPage);