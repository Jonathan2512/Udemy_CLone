import React, { Component } from 'react';
import * as action from '../../redux/actions/actions';
import FormEditUser from '../../Forms/FormEditUser';
import { connect } from 'react-redux';

class UserProfile extends Component {

    constructor(props) {
        super(props);
        if (localStorage.getItem("userLogin")) {
            this.props.onGetUser();
        }
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.isEdit) {
            nextProps.history.go();
        }
        return true;
    }

    renderUserInfo = () => {
        let { userInfo } = this.props;
        if (userInfo !== "" && localStorage.getItem("userLogin")) {
            return (
                <div className="container mt-5">
                    <div className="emp-profile">
                        <div className="row profile-title">
                            <div className="col-md-4">
                                <div className="profile-img">
                                    <img className="img-fluid" src="./img/personal-user-illustration-@2x.png" alt="/" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="profile-head">
                                    <h5>
                                        {userInfo.hoTen}
                                    </h5>
                                    <h6>
                                        Web Developer and Designer
                                    </h6>
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <button className="btn btn--purple edit-btn" data-toggle="modal" data-target="#formSaveUser">Edit Your Profile</button>
                            </div>
                        </div>
                        <div className="row profile-content">
                            <div className="col-md-4 profile-content-1">
                                <div className="profile-work">
                                    <p>Framework :</p>
                                    <li>React JS</li><br />
                                    <p>SKILLS</p>
                                    <li>Web Designer</li><br />
                                    <li>Web Developer</li><br />

                                </div>
                            </div>
                            <div className="col-md-8 profile-content-2">
                                <div className="tab-content profile-tab" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>User Account : </label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{userInfo.taiKhoan}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{userInfo.hoTen}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{userInfo.email}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{userInfo.soDT}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>User Type : </label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{userInfo.maLoaiNguoiDung}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label> Password : </label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{userInfo.matKhau}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Experience</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Hourly Rate</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>10$/hr</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Total Projects</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>230</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>English Level</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Availability</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>6 months</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <label>Your Bio</label><br />
                                                <p>Your detail description</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FormEditUser />
                </div >
            )
        }
        else return (
            <div className="alert alert-warning">
                <strong>Warning!</strong> You Are Sign Out Now !!!.
            </div>
        )
    }

    render() {
        return (
            this.renderUserInfo()
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onGetUser: () => {
            dispatch(action.actGetUserInfo())
        }
    }
}

const mapStateToProps = state => {
    return {
        userInfo: state.userReducer.userInfo,
        isEdit: state.userReducer.isEdit
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);