import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../redux/actions/actions';
import Course from './Course';
import Slider from 'react-slick';

class CourseList extends Component {

    componentDidMount() {
        this.props.GetCourseList();
        this.props.GetCourseCategory();
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
                    return CourseListAPI.BackEnd.map((item, index) => {
                        return (
                            <Course key={index} Course={item} />
                        )
                    });
                case "Design":
                    return CourseListAPI.Design.map((item, index) => {
                        return (
                            <Course key={index} Course={item} />
                        )
                    });
                case "DiDong":
                    return CourseListAPI.DiDong.map((item, index) => {
                        return (
                            <Course key={index} Course={item} />
                        )
                    });
                case "FrontEnd":
                    return CourseListAPI.FrontEnd.map((item, index) => {
                        return (
                            <Course key={index} Course={item} />
                        )
                    });
                case "FullStack":
                    return CourseListAPI.FullStack.map((item, index) => {
                        return (
                            <Course key={index} Course={item} />
                        )
                    });
                case "TuDuy":
                    return CourseListAPI.TuDuy.map((item, index) => {
                        return (
                            <Course key={index} Course={item} />
                        )
                    });
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
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1
        };

        return (
            <section className="courses-section">
                <div className="courses-content">
                    <div className="row">
                        <div className="col-sm-4 courses-decription">
                            <h5>The world’s largest selection of courses</h5>
                            <p>Choose from over 100,000 online video courses with new additions published every month</p>
                        </div>
                        <div className="col-sm-8 courses-item">
                            <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    {this.renderCourseCategory()}
                                </div>
                            </nav>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="BackEnd" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <Slider {...settings}>
                                        {this.renderCourseList("BackEnd")}
                                    </Slider>
                                </div>
                                <div className="tab-pane fade" id="Design" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <Slider {...settings}>
                                        {this.renderCourseList("Design")}
                                    </Slider>
                                </div>
                                <div className="tab-pane fade" id="DiDong" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <Slider {...settings}>
                                        {this.renderCourseList("DiDong")}
                                    </Slider>
                                </div>
                                <div className="tab-pane fade" id="FrontEnd" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <Slider {...settings}>
                                        {this.renderCourseList("FrontEnd")}
                                    </Slider>
                                </div>
                                <div className="tab-pane fade" id="FullStack" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <Slider {...settings}>
                                        {this.renderCourseList("FullStack")}
                                    </Slider>
                                </div>
                                <div className="tab-pane fade" id="TuDuy" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <Slider {...settings}>
                                        {this.renderCourseList("TuDuy")}
                                    </Slider>
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
        CourseCategoryAPI: state.courseReducer.courseCategory
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
