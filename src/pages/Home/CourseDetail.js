import React, { useEffect } from 'react';
import * as action from '../../redux/actions/actions';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as toastify from './../../components/Custom/toastify'
import { ToastContainer } from 'react-toastify';

function CourseDetail(props) {
    let { id } = props.match.params
    let { course } = props;

    useEffect(() => {
        props.getCourseDetail(id);
    }, [props, id]);

    const handleRegisterCourse = () => {
        if (localStorage.getItem("userLogin")) {
            props.registerCourse(course);
            toastify.SuccessNotify("Registered Successfully (つ ♥灬 ͜ʖ 灬♥)つ");
        }
        else {
            toastify.WariningNotify("You need login to register this course ! (∩ ͡° ͜ʖ ͡°)⊃━☆ﾟ. * ･ ｡ﾟ,")
        }
    }
    const handleDeregisterCourse = () => {
        if (localStorage.getItem("userLogin")) {
            props.deregisterCourse(id);
            toastify.WariningNotify("Deregistered Course   ლ(▀̿̿Ĺ̯̿̿▀̿ლ)");
        }
        else {
            toastify.WariningNotify("You are sign out now !!!")
        }
    }

    return (
        <div className="container" id="courseDetail">
            <div className="card">
                <div className="container-fliud">
                    <div className="wrapper row">
                        <div className="preview col-md-6">
                            <div className="preview-pic tab-content">
                                <div className="tab-pane active" id="pic-1"><img src={course.hinhAnh} alt="/" /></div>
                            </div>
                        </div>
                        <div className="details col-md-6">
                            <h3 className="product-title">{course.tenKhoaHoc}</h3>
                            <div className="rating">
                                <div className="stars">
                                    <FontAwesomeIcon icon="star" />
                                    <FontAwesomeIcon icon="star" />
                                    <FontAwesomeIcon icon="star" />
                                    <FontAwesomeIcon icon="star" />
                                    <FontAwesomeIcon icon="star-half" />
                                </div>
                                <span className="review-no">41 reviews</span>
                            </div>
                            <p className="product-description">{course.moTa}</p>
                            <h4 className="price">current price: <span>$10.99</span></h4>
                            <p className="vote"><strong>91%</strong> of people enjoyed this product! <strong>(87 votes)</strong></p>
                            <p className="author">Created by <strong>Jonathan Dennis.</strong></p>
                            <div className="action">
                                <ToastContainer
                                    className='toast-container'
                                    toastClassName="dark-toast"
                                />
                                {localStorage.getItem(`${id}`) === null ?
                                    (<div>
                                        <button onClick={handleRegisterCourse} className="add-to-cart btn btn-default" type="button">Register Course</button>
                                        <button className="btn add-to-cart" type="button"><FontAwesomeIcon icon="heart" /></button>
                                    </div>)
                                    : (<button onClick={handleDeregisterCourse} className="btn btn-warning remove-from-cart" type="button">Deregister Course</button>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

const mapDispatchToProps = dispatch => {
    return {
        getCourseDetail: (courseID) => {
            dispatch(action.actGetCourseDetail(courseID))
        },
        registerCourse: (courseID) => {
            dispatch(action.actRegisterCourse(courseID))
        },
        deregisterCourse: (courseID) => {
            dispatch(action.actDeregisterCourse(courseID))
        }
    }
}

const mapStateToProps = state => {
    return {
        course: state.courseReducer.course
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetail);


