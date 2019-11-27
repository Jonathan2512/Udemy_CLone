import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as action from '../../redux/actions/actions'

class Navbar extends Component {

    componentDidMount() {
        this.props.getCourseList();
    }

    handleSearch = (keyword) => {
        this.props.OnSearch(keyword);
    }

    handleSignOut = () => {
        localStorage.removeItem("userLogin");
        localStorage.removeItem("adminLogin");
    }

    renderFormLogin = () => {

        const user = JSON.parse(localStorage.getItem("userLogin"))
        return (
            user ? (<div className="welcome">
                <NavLink to="/user-profile">
                    <button className="btn btn--gradient profile-btn"> Welcome ! View Your Profile Here  {user.hoTen} </button>
                </NavLink>
                <NavLink to="/home">
                    <button className="btn btn-secondary signout-btn" onClick={this.handleSignOut}>SIGN OUT</button>
                </NavLink>
            </div>)
                : (<div className="header__button">
                    <NavLink to="/sign-in"> <button className="btn btn--white signin-btn">SIGN IN</button></NavLink>
                    <NavLink to="/sign-up">  <button className="btn btn--purple signup-btn">SIGN UP</button></NavLink>
                </div>)
        )
    }

    renderCategory = (maDanhMuc) => {
        let { courseCategoryList } = this.props;
        // Catch Err : 
        if ((courseCategoryList.BackEnd
            && courseCategoryList.Design
            && courseCategoryList.FullStack
            && courseCategoryList.DiDong
            && courseCategoryList.FrontEnd
            && courseCategoryList.TuDuy) !== undefined) {
            switch (maDanhMuc) {
                case "BackEnd":
                    return courseCategoryList.BackEnd.map((item, index) => {
                        return (
                            <li key={index}><NavLink className="nav-link" to={`/course-detail/${item.maKhoaHoc}`}>{item.tenKhoaHoc}</NavLink></li>
                        )
                    });
                case "Design":
                    return courseCategoryList.Design.map((item, index) => {
                        return (
                            <li key={index}><NavLink className="nav-link" to={`/course-detail/${item.maKhoaHoc}`}>{item.tenKhoaHoc}</NavLink></li>
                        )
                    });
                case "DiDong":
                    return courseCategoryList.DiDong.map((item, index) => {
                        return (
                            <li key={index}><NavLink className="nav-link" to={`/course-detail/${item.maKhoaHoc}`}>{item.tenKhoaHoc}</NavLink></li>
                        )
                    });
                case "FrontEnd":
                    return courseCategoryList.FrontEnd.map((item, index) => {
                        return (
                            <li key={index}><NavLink className="nav-link" to={`/course-detail/${item.maKhoaHoc}`}>{item.tenKhoaHoc}</NavLink></li>
                        )
                    });
                case "FullStack":
                    return courseCategoryList.FullStack.map((item, index) => {
                        return (
                            <li key={index}><NavLink className="nav-link" to={`/course-detail/${item.maKhoaHoc}`}>{item.tenKhoaHoc}</NavLink></li>
                        )
                    });
                case "TuDuy":
                    return courseCategoryList.TuDuy.map((item, index) => {
                        return (
                            <li key={index}><NavLink className="nav-link" to={`/course-detail/${item.maKhoaHoc}`}>{item.tenKhoaHoc}</NavLink></li>
                        )
                    });
                default:
                    return;
            }
        }
    }
    render() {
        return (
            <header id="header">
                <nav className="navbar navbar-expand-md navbar-light pt-0">
                    <div className="col-xl-7 col-lg-6 col-md-9 py-4">
                        <div className="header__left d-flex">
                            <a className="navbar-brand" href="/">
                                <img src="/img/logo-coral.svg" alt="/" />
                            </a>
                            <ul className="exo-menu">
                                <li className="drop-down">
                                    <a href="/course-list" target="_blank">
                                        <FontAwesomeIcon icon="align-justify" />
                                        Categories</a>
                                    {/*Drop Down*/}
                                    <ul className="drop-down-ul animate slideIn">
                                        <li className="flyout-right">
                                            <NavLink to="/">
                                                <FontAwesomeIcon icon="calendar" />
                                                Front-end</NavLink>
                                            {/*Flyout Right*/}
                                            <ul className="animate slideIn">
                                                {this.renderCategory("FrontEnd")}
                                            </ul>
                                        </li>
                                        <li className="flyout-right">
                                            <NavLink to="/">
                                                <FontAwesomeIcon icon="calendar" />
                                                Back-End</NavLink>
                                            {/*Flyout Right*/}
                                            <ul className="animate slideIn">
                                                {this.renderCategory("BackEnd")}
                                            </ul>
                                        </li>
                                        <li className="flyout-right">
                                            <NavLink to="/">
                                                <FontAwesomeIcon icon="calendar" />
                                                Full-Stack</NavLink>
                                            {/*Flyout Right*/}
                                            <ul className="animate slideIn">
                                                {this.renderCategory("FullStack")}
                                            </ul>
                                        </li>
                                        <li className="flyout-right">
                                            <NavLink to="/">
                                                <FontAwesomeIcon icon="calendar" />
                                                Mobile</NavLink>
                                            {/*Flyout Right*/}
                                            <ul className="animate slideIn">
                                                {this.renderCategory("DiDong")}
                                            </ul>
                                        </li>
                                        <li className="flyout-right">
                                            <NavLink to="/">
                                                <FontAwesomeIcon icon="calendar" />
                                                Design</NavLink>
                                            {/*Flyout Right*/}
                                            <ul className="animate slideIn">
                                                {this.renderCategory("Design")}
                                            </ul>
                                        </li>
                                        <li className="flyout-right">
                                            <NavLink to="/">
                                                <FontAwesomeIcon icon="calendar" />
                                                Thinking</NavLink>
                                            {/*Flyout Right*/}
                                            <ul className="animate slideIn">
                                                {this.renderCategory("TuDuy")}
                                            </ul>
                                        </li>
                                    </ul>
                                    {/*//End drop down*/}
                                </li>
                            </ul>
                            <div className="input-search">
                                <div className="input-group">
                                    <input type="text" className="form-control" onChange={(event) => { this.handleSearch(event.target.value) }} placeholder="Search for anything" aria-label="Username" aria-describedby="basic-addon1" />
                                    <div className="input-group-prepend mr-0">
                                        <NavLink to="/course-list">
                                            <button className="input-group-text" id="basic-addon1">
                                                <FontAwesomeIcon icon="search" />
                                            </button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 col-md-3">
                        <ul className="navbar-nav">
                            <li className="nav-item course-list" >
                                <NavLink className="nav-link" to="/course-list">Course List</NavLink>
                            </li>
                            <li className="nav-item cart">
                                <NavLink className="nav-link" to="/register-course">
                                    <FontAwesomeIcon icon="shopping-cart" />
                                </NavLink>
                            </li>
                            <li className="nav-item form-login">
                                {this.renderFormLogin()}
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

const mapStateToProps = state => {
    return {
        courseCategoryList: state.courseReducer.courseCategoryList,
        courseCategory: state.courseReducer.courseCategory
    }
}

const mapDispatchToProps = dispatch => {
    return {
        OnSearch: (keyword) => {
            dispatch(action.actFindingInfo(keyword))
        },
        getCourseList: () => {
            dispatch(action.actGetCourseList())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);