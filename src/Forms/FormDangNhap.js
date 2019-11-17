import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as action from './../redux/actions/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer } from 'react-toastify';

function FormDangNhap(props) {

    const [state, setState] = useState(
        {
            taiKhoan: "",
            matKhau: ""
        }
    )

    const handleOnchange = event => {
        let { name, value } = event.target;
        setState({
            ...state,
            [name]: value
        })
    }

    const handleLogin = event => {
        props.logIn(state, props.history);
        event.preventDefault();
    }

    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100 p-b-160 p-t-50">
                    <form className="login100-form validate-form" action="/" onSubmit={handleLogin}>
                        <span className="login100-form-title p-b-43">
                            Account Sign In
                            </span>
                        <div className="wrap-input100 rs1 validate-input">
                            <span className="label-input100">Username</span>
                            <div className="d-flex input-custom">
                                <FontAwesomeIcon icon="user" />
                                <input
                                    className="input100"
                                    type="text"
                                    placeholder="Type your username"
                                    name="taiKhoan"
                                    onChange={handleOnchange}
                                    required />
                            </div>
                        </div>
                        <div className="wrap-input100 rs2 validate-input">
                            <span className="label-input100">Password</span>
                            <div className="d-flex input-custom">
                                <FontAwesomeIcon icon="lock" />
                                <input
                                    className="input100"
                                    type="password"
                                    placeholder="Type your password"
                                    name="matKhau"
                                    onChange={handleOnchange}
                                    required />
                            </div>
                        </div>
                        <div className="container-login100-form-btn">
                            <div className="wrap-login100-form-btn ">
                                <div className="login100-form-bgbtn"></div>
                                <button type="submit" className="login100-form-btn">
                                    Sign in
                                    </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        logIn: (user, history) => {
            dispatch(action.actUserLogin(user, history))
        }
    }
}

const mapStateToProps = state => {
    return {
        isLogin: state.userReducer.isLogin
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormDangNhap);